import React, { useEffect, useState } from "react";
import ResultPage from "../result/ResultPage";
import { useTestContext } from "@/context/TestContext";

type Value = 'good' | 'bad';

const Result: React.FC = () => {
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
        {!loading &&
            <ResultPage testName="Contrast Vision" testMessage={message}
                testResult={{left: result[0], right: result[1]}} nextTest={{ name: "color vision check", link: "/color_vision/test"}}/>
        }
        </>
    );
};

export default Result;