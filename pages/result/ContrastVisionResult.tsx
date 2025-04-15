import Link from "next/link";
import React, {useState, useEffect} from "react";
import { useTestContext } from '../../context/TestContext';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

type Value = 'good' | 'bad';

const ContrastVisionResult: React.FC = ()=> {
    const [message, setMessage] = useState<string>("Your <strong>both eyes</strong> appear to have excellent contrast vision.");
    const [result, setResult] = useState<Value[]>(["good","good"]);
    const {testScores} = useTestContext();
    const testName = "contrast vision";
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const leftEyeScore = testScores[testName]?.leftEyeScore ?? 0;
        const rightEyeScore = testScores[testName]?.rightEyeScore ?? 0;
        if (leftEyeScore < 8) {
            setResult(prevResult => prevResult.map((value, index) => (index === 0 ? "bad" : value)));
            setMessage("Your <strong>left eye</strong> appear to have reduced contrast vision.");
        } 
        if (rightEyeScore < 8) {
            setResult(prevResult => prevResult.map((value, index) => (index === 1 ? "bad" : value)));
            setMessage("Your <strong>right eye</strong> appear to have reduced contrast vision.");
        }
        if (leftEyeScore < 8 && rightEyeScore < 8) {
            setMessage("Your <strong>both eyes</strong> appear to have reduced contrast vision.");
        }
        setLoading(false);
    },[]);
    
    return (
        <>
            <h3 className="w-[18rem] text-center text-md text-gray-700" dangerouslySetInnerHTML={{ __html: message }}></h3>
            <div className="flex justify-center items-center mt-6 w-[20rem]">
                <div className="flex w-1/2 flex-col gap-2 items-center">
                    { result[0] === "good" ?
                        <SentimentSatisfiedAltIcon style={{ fontSize: '70px', color: 'green' }} />
                    :   <SentimentDissatisfiedIcon style={{ fontSize: '70px', color: 'orange' }} />
                    }
                <h3 className="text-center text-md text-gray-700">LEFT EYE</h3>
                </div>
                <div className="flex w-1/2 flex-col gap-2 items-center">
                { result[1] === "good" ?
                    <SentimentSatisfiedAltIcon style={{ fontSize: '70px', color: 'green' }} />
                :   <SentimentDissatisfiedIcon style={{ fontSize: '70px', color: 'orange' }} />
                }
                <h3 className="text-center text-md text-gray-700">RIGHT EYE</h3>
                </div>
            </div>
        </> 
    );
};

export default ContrastVisionResult;