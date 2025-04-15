import React, { useEffect, useState } from "react";
import ResultPage from "../result/ResultPage";
import { useTestContext } from "@/context/TestContext";

type Value = 'good' | 'bad';

const Result: React.FC = () => {
    const [message, setMessage] = useState<string>("Your <strong>both eyes</strong> appear to have excellent visual acuity.");
    const [result, setResult] = useState<Value[]>(["good","good"]);
    const {testScores} = useTestContext();
    const testName = "visual acuity";
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const leftEyeScore = testScores[testName]?.leftEyeScore ?? 0;
        const rightEyeScore = testScores[testName]?.rightEyeScore ?? 0;
        if (leftEyeScore < 8) {
            setResult(prevResult => prevResult.map((value, index) => (index === 0 ? "bad" : value)));
            setMessage("Your <strong>left eye</strong> appear to have reduced visual acuity.");
        } 
        if (rightEyeScore < 8) {
            setResult(prevResult => prevResult.map((value, index) => (index === 1 ? "bad" : value)));
            setMessage("Your <strong>right eye</strong> appear to have reduced visual acuity.");
        }
        if (leftEyeScore < 8 && rightEyeScore < 8) {
            setMessage("Your <strong>both eyes</strong> appear to have reduced visual acuity.");
        }
        setLoading(false);
    },[]);

    return (
        <>
        {!loading &&
            <ResultPage testName="Visual Acuity" testMessage={message}
                testResult={{left: result[0], right: result[1]}} nextTest={{ name: "contrast vision check", link: "/contrast_vision/RightEyeTest"}}/>
        }
        </>
    );
};

export default Result;