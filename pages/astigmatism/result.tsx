import React, { useEffect, useState } from "react";
import ResultPage from "../result/ResultPage";
import { useTestContext } from "@/context/TestContext";

type Value = 'good' | 'bad';

const Result: React.FC = () => {
    const [message, setMessage] = useState<string>("You don't exhibit symptoms of astigmatism.");
    const [result, setResult] = useState<Value[]>(["good","good"]);
    const {testScores} = useTestContext();
    const testName = "astigmatism";
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const leftEyeScore = testScores[testName]?.leftEyeScore ?? 0;
        const rightEyeScore = testScores[testName]?.rightEyeScore ?? 0;
        if (leftEyeScore === 0) {
            setResult(prevResult => prevResult.map((value, index) => (index === 0 ? "bad" : value)));
            setMessage("It seems you're seeing differences among the lines with <strong>one eye</strong>.");
        } 
        if (rightEyeScore === 0) {
            setResult(prevResult => prevResult.map((value, index) => (index === 1 ? "bad" : value)));
            setMessage("It seems you're seeing differences among the lines with <strong>one eye</strong>.");
        }
        if (leftEyeScore === 0 && rightEyeScore === 0) {
            setMessage("It seems you're seeing differences among the lines with <strong>both eyes</strong>.");
        }
        setLoading(false);
    },[testScores]);

    return (
        <>
        {!loading &&
            <ResultPage testName="Astigmatism" testMessage={message}
                testResult={{left: result[0], right: result[1]}} nextTest={{ name: "", link: ""}}/>
        }
        </>
    );
};

export default Result;