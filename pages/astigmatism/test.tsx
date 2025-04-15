import Link from "next/link";
import {useState, useEffect} from "react";
import { useRouter } from 'next/router';
import { useTestContext } from '../../context/TestContext';
import TestUpdater from "@/utils/TestUpdater";
import { useBoxSizeContext } from "@/context/BoxSizeContext"; 

interface TestProps {
    eye: "left" | "right";
};


const Test: React.FC<TestProps> = ({eye}) => {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState<boolean | null>(null);
    const [isCorrect,setIsCorrect] = useState<boolean>(false);
    const context = useTestContext();
    const {markTestTaken} = context;
    const { boxDimensions, updateBoxDimensions } = useBoxSizeContext();
    const [width, setWidth] = useState<number | null>(null);

    useEffect(()=> {
        if (boxDimensions.width) {
            setWidth((boxDimensions.width/556));
          } else {
            setWidth(200/556);
          }
          markTestTaken("astigmatism");
    },[boxDimensions.width]);

    useEffect(() => {
        if (selectedOption !== null){
            if(selectedOption)
                handleCorrect();
            else
                handleIncorrect();
            setTimeout(() => {
                setSelectedOption(null);
                if (eye === "right") 
                    router.push("/astigmatism/SwitchEye");
                else    
                    router.push("/astigmatism/result");
            }, 1000);
        }
    }, [selectedOption]);

    const handleCorrect = () => {
        setIsCorrect(true);
        TestUpdater({ testName: 'astigmatism', eye: eye, context: context });
    };

    const handleIncorrect = () => {
        setIsCorrect(false);
    }   

    const handleOptionSelect = (optionIndex: boolean) => {
        setSelectedOption(optionIndex);
    };

    return(
        <div className="flex items-start justify-center min-h-screen">
            <div className="flex flex-col items-center justify-start mt-2 gap-16" >
                <h3 className="w-[20rem] text-center text-sm font-bold text-gray-700">Astigmatism</h3>
                <ul className="w-full p-4 md:w-[40rem] text-gray-600 text-xl md:text-2xl text-center">
                    {eye==="right" ? <li>1) Cover your left eye.</li> : <li>1) Cover your right eye.</li>}
                    <li>2) Keep your device at arm&apos;s length.</li>
                    <li>3) Look at the semicircle&apos;s center. Are all the lines the same shade of black?</li>
                </ul>
                <div className="flex flex-col gap-24 bg-white h-[28rem] rounded-2xl justify-center w-9/12 p-16 items-center shadow-lg">
                    <div className="h-[22rem] flex items-center justify-center">
                      <img className="h-[7rem]" style={{ transform: `scale(${width})` }} src="/test_images/astigmatism-chart.jpg" alt="Test_image" />
                    </div>
                    <div className="flex gap-3 justify-center items-center rounded-full relative">
                        <button
                          className="text-black border text-lg py-6 px-12 cursor-pointer border-2 rounded-xl border-gray-200 hover:bg-black hover:text-white"
                          onClick={()=> handleOptionSelect(true)}
                        >
                          Yes
                        </button>
                        <button
                          className="text-black border text-lg py-6 px-12 cursor-pointer border-2 rounded-xl border-gray-200 hover:bg-black hover:text-white"
                          onClick={()=> handleOptionSelect(false)}
                        >
                          No
                        </button>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Test
