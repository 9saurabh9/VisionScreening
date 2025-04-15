import Link from "next/link";
import {useState, useEffect} from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import { useRouter } from 'next/router';
import { useTestContext } from '../../context/TestContext';
import TestUpdater from "@/utils/TestUpdater";

const Test: React.FC = () => {
    const router = useRouter();
    const [currentTestIndex, setCurrentTestIndex] = useState<number>(0);
    const [testIndices, setTestIndices] = useState(shuffleIndices());
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [round, setRound] = useState(1);
    const [isCorrect,setIsCorrect] = useState<boolean>(false);
    
    const context = useTestContext();
    const {markTestTaken} = context;

    useEffect(() => {
      setTestIndices(shuffleIndices());
      markTestTaken("color vision");
    }, []);

    useEffect(() => {
      if (round === 4) {
        setTimeout(() => {
          router.push("/color_vision/result");
        }, 700);
      }
    }, [currentTestIndex]);

    useEffect(() => {
        if (selectedOption !== null) {
          if (tests[testIndices[currentTestIndex]].correctOption === selectedOption) {
            handleCorrect();
          } else {
            handleIncorrect();
          }

          setCurrentTestIndex((prevIndex) => {
            if (prevIndex === 3) {
              setRound(4);
              return 0;
            } else {
            return prevIndex + 1;
            }
          });

          setTimeout(() => {
            setSelectedOption(null);
          }, 1000);
        }
      }, [selectedOption]);

      const handleCorrect = () => {
        setIsCorrect(true);
        TestUpdater({ testName: 'color vision', context: context });
      };

      const handleIncorrect = () => {
        setIsCorrect(false);
      }   

      const handleOptionSelect = (optionIndex: number) => {
        setSelectedOption(optionIndex);
      };

    return(
        <div className="flex items-start justify-center min-h-screen">
            <div className="flex flex-col items-center justify-start mt-2 gap-16" >
                <h3 className="w-[20rem] text-center text-sm font-bold text-gray-700">Color Vision</h3>
                  <ul className="text-gray-600 text-xl md:text-2xl text-center">
                    <li>1) Keep both eyes open.</li>
                    <li>2) Keep your device at arm&apos;s length.</li>
                    <li>3) Choose the number in the circle.</li>
                </ul>
                <div className="flex flex-col gap-4 bg-white h-[28rem] md:w-[25rem] rounded-2xl justify-center w-9/12 p-16 items-center shadow-lg">
                    <div className="h-[22rem] flex items-center justify-center">
                      <img className="h-[18rem]" style={{ display: selectedOption === null ? 'block' : 'none' }} src={tests[testIndices[currentTestIndex]].image} alt="Test_image" />
                    </div>
                    <div className="flex gap-1 justify-center items-center rounded-full relative">
                    { selectedOption === null ?
                      <>
                      {tests[testIndices[currentTestIndex]].options.map((option, index) => (
                        <button
                          className="text-black border text-md px-4 py-2 cursor-pointer border-2 rounded-xl border-gray-200 hover:bg-black hover:text-white"
                          key={index}
                          onClick={() => handleOptionSelect(index)}
                        >
                          {option}
                        </button>
                      ))}
                      </> : isCorrect ? 
                        <div className="bg-white rounded-full">
                          <CheckCircleOutlineIcon style={{ fontSize: '50px', color: 'green' }} />
                        </div> : 
                        <div
                          className="bg-white rounded-full"
                        >
                          <CancelIcon style={{ fontSize: '50px', color: 'red' }} />
                        </div>
                      }
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Test

const tests = [
  { image: '/test_images/Ishihara_1.svg', options: ['12', '26', '18', 'Nothing'], correctOption: 0 },
  { image: '/test_images/Ishihara_11.png', options: ['47', '6', '28', 'Nothing'], correctOption: 1 },
  { image: '/test_images/Ishihara_23.png', options: ['42', '66', '7', 'Nothing'], correctOption: 0 },
  { image: '/test_images/Ishihara_19.png', options: ['56', '13', '35', 'Nothing'], correctOption: 3 },
];

const shuffleIndices = () => {
  const indices = [0, 1, 2, 3];
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices;
};