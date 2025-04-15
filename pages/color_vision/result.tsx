import React, { useEffect, useState } from "react";
import ResultPage from "../result/ResultPage";
import { useTestContext } from "@/context/TestContext";

type Value = 'good' | 'normal' | 'bad';

const Result: React.FC = () => {
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
        {!loading &&
            <ResultPage testName="Color Vision" testMessage={message}
                testResult={{both: result}} nextTest={{ name: "astigmatism", link: "/astigmatism/RightEyeTest"}}/>
        }
        </>
    );
};

export default Result;