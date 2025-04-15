import React, {useState} from "react";
import Link from "next/link";
import LandoltCChart from "@/components/LandoltCChart";
import { useTestSelectionContext } from '@/context/TestSelectionContext';

const Index: React.FC = () => {
    const { setSelectedTest } = useTestSelectionContext();
    return (
        <div className="flex items-start justify-center pb-8">
            <div className="w-[35rem] flex flex-col items-center justify-center mt-2 gap-8 px-5" >
                <h3 className="text-center text-sm font-bold text-gray-700">All Checks</h3>   
                <h1 className="text-center text-5xl font-bold text-black">Choose one of our four vision checks to start.</h1>
                <div className="w-full flex flex-col bg-white rounded-2xl justify-center p-6 items-center shadow-lg">
                    <LandoltCChart rotation={0} width={70}/>
                    <h2 className="text-center text-3xl font-semibold text-black mt-10">Visual Acuity Test</h2> 
                    <h3 className="text-center font-medium text-xl text-gray-700">See how clear your vision is with our visual acuity check!</h3>
                    <Link href="/details/VisualAcuity">
                        <h3 className="text-center font-medium text-xl text-indigo-700 hover:underline hover:text-indigo-900">Details</h3>
                    </Link>
                    <Link href="/agreement" className="w-full sm:w-1/2">
                        <button 
                            className="mt-10 w-full text-md bg-gray-900 hover:bg-gray-700 text-white border-2 border-black px-4 py-4 rounded"
                            onClick={()=> setSelectedTest('visual acuity')}>
                            Start visual acuity check    
                        </button>
                    </Link>
                </div>
                <div className="w-full flex flex-col bg-white rounded-2xl justify-center p-6 items-center shadow-lg">
                    <LandoltCChart rotation={120} width={70} opacity={0.5}/>
                    <h2 className="text-center text-3xl font-semibold text-black mt-10">Contrast Vision Test</h2> 
                    <h3 className="text-center font-medium text-xl text-gray-700">Check how well you see differences in shades with our contrast vision test.</h3>
                    <Link href="/details/ContrastVision">
                        <h3 className="text-center font-medium text-xl text-indigo-700 hover:underline hover:text-indigo-900">Details</h3>
                    </Link>
                    <Link href="/contrast_vision/agreement" className="w-full sm:w-1/2">
                        <button 
                            className="mt-10 w-full text-md bg-gray-900 hover:bg-gray-700 text-white border-2 border-black px-4 py-4 rounded"
                            onClick={()=> setSelectedTest('contrast vision')}>
                            Start contrast vision check    
                        </button>
                    </Link>
                </div>
                <div className="w-full flex flex-col bg-white rounded-2xl justify-center p-6 items-center shadow-lg">
                    <img className="h-[5rem]" src="/test_images/Ishihara_9.svg" alt="Test_image" />
                    <h2 className="text-center text-3xl font-semibold text-black mt-10">Colour Vision Test</h2> 
                    <h3 className="text-center font-medium text-xl text-gray-700">Check how well you distinguish colours with our colour vision test.</h3>
                    <Link href="/details/ColorVision">
                        <h3 className="text-center font-medium text-xl text-indigo-700 hover:underline hover:text-indigo-900">Details</h3>
                    </Link>
                    <Link href="/color_vision/agreement"className="w-full sm:w-1/2">
                        <button 
                            className="mt-10 w-full text-md bg-gray-900 hover:bg-gray-700 text-white border-2 border-black px-4 py-4 rounded">
                            Start colour vision check    
                        </button>
                    </Link>
                </div>
                <div className="w-full flex flex-col bg-white rounded-2xl justify-center p-6 items-center shadow-lg">
                    <img className="w-[8rem]" src="/test_images/astigmatism-chart.jpg" alt="Test_image" />
                    <h2 className="text-center text-3xl font-semibold text-black mt-10">Astigmatism Test</h2> 
                    <h3 className="text-center font-medium text-xl text-gray-700">Look for astigmatism signs.</h3>
                    <Link href="/details/Astigmatism">
                        <h3 className="text-center font-medium text-xl text-indigo-700 hover:underline hover:text-indigo-900">Details</h3>
                    </Link>
                    <Link href="/astigmatism/agreement" className="w-full sm:w-1/2">
                        <button 
                            className="mt-10 w-full text-md bg-gray-900 hover:bg-gray-700 text-white border-2 border-black px-4 py-4 rounded">
                            Start astigmatism check    
                        </button>
                    </Link>
                </div>
            </div>
        </div>     
    );
};

export default Index;