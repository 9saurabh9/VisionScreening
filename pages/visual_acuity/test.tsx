import Link from "next/link";
import {useState, useEffect} from "react";
import ArrowCircle from "../../components/ArrowCircle";
import LandoltCChart from "@/components/LandoltCChart";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import { useBoxSizeContext } from "@/context/BoxSizeContext"; 
import { useRouter } from 'next/router';
import { useTestContext } from '../../context/TestContext';
import TestUpdater from "@/utils/TestUpdater";

interface TestProps {
  eye: "left"|"right";
}

const Test: React.FC<TestProps> = ({eye}) => {
    const router = useRouter();
    const [rotation, setRotation] = useState(0);
    const [selectedRotation, setSelectedRotation] = useState<number | null>(null);
    const [round, setRound] = useState(1);
    const [isHidden, setIsHidden] = useState(false);
    const [isCorrect,setIsCorrect] = useState<boolean>(true);
    const [width, setWidth] = useState<number>(26);
    const { boxDimensions, updateBoxDimensions } = useBoxSizeContext();
    const possibleRotations = [0, 45, 90, 135, 180, 225, 270, 315];
    const [disabled, setDisabled] = useState(false);
    const context = useTestContext();
    const {markTestTaken} = context;
    const [timesWrong, setTimesWrong] = useState<number>(0);

    useEffect(()=>{
        if (boxDimensions.width) {
          setWidth((boxDimensions.width/17.307));
        } else {
          setWidth(26);
        }
        const newRotation = possibleRotations[Math.floor(Math.random() * possibleRotations.length)];
        setRotation(newRotation);
        markTestTaken("visual acuity");
    },[]);

    useEffect(() => {
      if (round === 11) {
        // Log test scores from context
        setRound(1);
        setTimeout(() => {
          if (eye==="right") {
            router.push("/visual_acuity/SwitchEye");
          } else {
            router.push("/visual_acuity/result");
          }
        }, 500);
      }
    }, [round]);

    useEffect(() => {
        if (selectedRotation !== null) {
          // Check if the selected rotation matches the C chart rotation
          if (selectedRotation === rotation) {
            // Display a tick or perform any other action on correct selection
            handleCorrect();
          } else {
            // Handle incorrect selection if needed
            handleIncorrect();
          }
    
          // Move to the next round
          setRound((prevRound) => prevRound + 1);
    
          // Generate a new random rotation for the Landolt C chart
          const newRotation = possibleRotations[Math.floor(Math.random() * possibleRotations.length)];
          setRotation(newRotation);
    
          // Reset the selected rotation
          setSelectedRotation(null);
        }
      }, [selectedRotation,rotation]);

      const handleCorrect = () => {
        setIsCorrect(true);
        setIsHidden(true);
        updateWidth();
        TestUpdater({ testName: 'visual acuity', eye: eye, context });
        setTimesWrong(0);
        setTimeout(() => {
          setIsHidden(false);
          setDisabled(false);
        }, 1000);
      };

      const handleIncorrect = () => {
        setIsCorrect(false);
        setIsHidden(true);
        setTimesWrong((prevTimesWrong) => {
          if (prevTimesWrong < 2 && prevTimesWrong > 0) {
            setWidth(prevWidth => prevWidth + 3);
            return prevTimesWrong + 1;
          } else if (prevTimesWrong === 2){ 
            setRound(11);
            return prevTimesWrong + 1;
          } else {
            return prevTimesWrong + 1;
          }  
        });
        setTimeout(() => {
          setIsHidden(false);
          setDisabled(false);
        }, 1000);
      }
    
      const handleArrowClick = (clickedRotation: number) => {
        setDisabled(true);
        setSelectedRotation(clickedRotation);
      };    

      const updateWidth = () => {
        if (width <= 8) {
            return;
        } 
        else {
            setWidth((width - 3));
            return;
        }
      }

    return(
        <div className="flex items-start justify-center min-h-screen">
            <div className="flex flex-col items-center justify-start mt-2 gap-16" >
                <h3 className="w-[20rem] text-center text-sm font-bold text-gray-700">Visual Acuity</h3>                
                <ul className="text-gray-600 text-xl md:text-2xl text-center">
                    {eye==="right" ? <li>1) Cover your left eye.</li> : <li>1) Cover your right eye.</li>}
                    <li>2) Keep your device at arm&apos;s length.</li>
                    <li>3) Locate the top ring? Mark the corresponding arrow.</li>
                </ul>
                <div className="flex flex-col gap-16 bg-white h-[28rem] rounded-2xl justify-center w-9/12 p-16 items-center shadow-lg">
                    <div className="h-16 flex items-center justify-center">
                        <LandoltCChart rotation={rotation} width={width}/>
                    </div>
                    <div className="flex justify-center items-center w-52 h-52 rounded-full relative">
                        {possibleRotations.map((arrowRotation) => (
                            <ArrowCircle
                                key={arrowRotation}
                                rotation={arrowRotation}
                                onClick={() => handleArrowClick(arrowRotation)}
                                disabled={disabled}
                            />
                        ))}
                        {isHidden && (
                            isCorrect ? (
                                <div
                                className="bg-white absolute rounded-full"
                                >
                                <CheckCircleOutlineIcon style={{ fontSize: '70px', color: 'green' }} />
                                </div>
                            ) :
                            (
                                <div
                                className="bg-white absolute rounded-full"
                                >
                                <CancelIcon style={{ fontSize: '70px', color: 'red' }} />
                                </div>
                            )
                        )}
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Test