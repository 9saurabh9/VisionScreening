import Link from "next/link";
import React, {useState, useEffect} from "react";
import { useTestContext } from '../../context/TestContext';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SearchIcon from '@mui/icons-material/Search';

interface ResultProps {
    testName: string;
    testMessage: string;
    testResult: { left?: "good" | "bad" ; right?: "good" | "bad" ; both?: "good" | "normal" | "bad" };
    nextTest: { name: string ; link: string};
};

const ResultPage: React.FC<ResultProps> = ({testName, testMessage, testResult={left: 'bad', right: 'bad', both: 'bad'}, nextTest= {name: '', link:''}}) => {
    const [quitComfirmation, setQuitConfirmation] = useState<boolean>(false);
    return (
        <div className="flex items-center sm:items-start justify-center min-h-screen">
            <div className="flex flex-wrap items-stretch justify-center sm:justify-start mt-16 gap-8" >
                <div className="flex flex-col gap-4 bg-white rounded-2xl justify-center p-1 pb-6 items-center shadow-lg">
                    <h3 className="w-[20rem] text-center text-sm font-bold text-gray-700">Results</h3>
                    <h1 className="w-[20rem] text-center text-4xl font-bold text-gray-700">{testName}</h1>
                    <h3 className="w-[18rem] text-center text-md text-gray-700" dangerouslySetInnerHTML={{ __html: testMessage }}></h3>
                    <div className="flex justify-center items-center w-[20rem]">
                        <div className="flex w-1/2 flex-col gap-2 items-center">
                            { testResult.left === "good" || testResult.both === "good" ?
                                <SentimentSatisfiedAltIcon style={{ fontSize: '70px', color: 'green' }} />
                            :   testResult.both === "normal" ? 
                                    <SentimentSatisfiedIcon style={{ fontSize: '70px', color: 'darksalmon' }} />
                                :   <SentimentDissatisfiedIcon style={{ fontSize: '70px', color: 'orange' }} />
                            }
                            <h3 className="text-center text-md text-gray-700">LEFT EYE</h3>
                        </div>
                        <div className="flex w-1/2 flex-col gap-2 items-center">
                            { testResult.right === "good" || testResult.both === "good" ?
                                <SentimentSatisfiedAltIcon style={{ fontSize: '70px', color: 'green' }} />
                            :   testResult.both === "normal" ? 
                                    <SentimentSatisfiedIcon style={{ fontSize: '70px', color: 'darksalmon' }} />
                            :       <SentimentDissatisfiedIcon style={{ fontSize: '70px', color: 'orange' }} />
                            }
                            <h3 className="text-center text-md text-gray-700">RIGHT EYE</h3>
                        </div>
                    </div> 
                    <Link className="w-3/4" href={nextTest.link}>
                        {nextTest.name === "" ? <></> 
                        : <button 
                        className="w-full mt-4 text-md bg-gray-900 hover:bg-gray-700 text-white border-2 border-black px-4 py-4 rounded">
                        Next: {nextTest.name}
                        </button>
                        }
                    </Link> 
                    <Link className="w-3/4" href="/result/CummulativeResult">
                    <button 
                        className="w-full text-md bg-transparent hover:bg-gray-900 text-black hover:text-white px-4 py-4 rounded"
                    >
                        See results
                    </button> 
                    </Link>
                </div>
                <div className="flex flex-col gap-4 bg-white rounded-2xl justify-around px-3 py-8 items-center shadow-lg">
                    <SearchIcon className="text-cyan-600" style={{ fontSize: '70px' }} />
                    <h1 className="w-[20rem] text-center text-md text-gray-700">
                        <strong>Don&apos;t delay!</strong><br/>Book your complete eye test with Dear Eyes today. 
                        Our skilled team will thoroughly examine your vision, uncovering any issues.
                    </h1>
                    <a className="w-3/4" target="_blank">
                        <button 
                            className="w-full mt-4 text-md bg-transparent hover:bg-gray-900 text-black hover:text-white border-2 border-black px-4 py-4 rounded">
                                Book eye test
                        </button> 
                    </a>
                </div>
            </div>
        </div>     
    )
};

export default ResultPage;