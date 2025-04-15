import Link from "next/link";
import React, {useState, useEffect} from "react";
import { useTestContext } from '../../context/TestContext';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';


type Value = 'good' | 'bad' | 'normal';

const ColorVisionResult: React.FC = ()=> {
    const [message, setMessage] = useState<string>("Your colour vision appears to be excellent.");
    const [result, setResult] = useState<Value>("good");
    const {testScores} = useTestContext();
    const testName = "color vision";
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const score = testScores[testName]?.score ?? 0;
        if (score === 3) {
            setResult("normal");
            setMessage("Your colour vision appears to be normal.");
        } 
        if (score < 3) {
            setResult("bad");
            setMessage("Your colour vision appears to be reduced.");
        }
        setLoading(false);
    },[]);
    
    return (
        <>
            <h3 className="w-[18rem] text-center text-md text-gray-700" dangerouslySetInnerHTML={{ __html: message }}></h3>
            <div className="flex justify-center items-center mt-6 w-[20rem]">
                <div className="flex w-1/2 flex-col gap-2 items-center">
                    { result === "good" ?
                        <SentimentSatisfiedAltIcon style={{ fontSize: '70px', color: 'green' }} />
                    :   result === "normal" ?
                        <SentimentSatisfiedIcon style={{ fontSize: '70px', color: 'darksalmon' }} />
                    :   <SentimentDissatisfiedIcon style={{ fontSize: '70px', color: 'orange' }} />
                    }
                <h3 className="text-center text-md text-gray-700">LEFT EYE</h3>
                </div>
                <div className="flex w-1/2 flex-col gap-2 items-center">
                { result === "good" ?
                    <SentimentSatisfiedAltIcon style={{ fontSize: '70px', color: 'green' }} />
                :   result === "normal" ?
                    <SentimentSatisfiedIcon style={{ fontSize: '70px', color: 'darksalmon' }} />
                :   <SentimentDissatisfiedIcon style={{ fontSize: '70px', color: 'orange' }} />
                }
                <h3 className="text-center text-md text-gray-700">RIGHT EYE</h3>
                </div>
            </div>
        </> 
    );
};

export default ColorVisionResult;