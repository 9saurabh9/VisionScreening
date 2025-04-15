import React, { useEffect, useRef, useState } from "react";
import BlurImage from "./interactive-images/BlurImage";
import Link from "next/link";
import { useTestSelectionContext } from "@/context/TestSelectionContext";

const VisualAcuity: React.FC = ()=> {
    const { setSelectedTest } = useTestSelectionContext();

    return (
        <div className="flex items-start justify-center pb-8">
            <div className="w-[35rem] flex flex-col items-center justify-center mt-2 gap-2 px-5" >
                <h3 className="text-center text-sm font-bold text-gray-700">Visual Acuity</h3> 
                <h1 className="text-center text-5xl font-extrabold text-black mt-10">Visual Acuity Test</h1> 
                <h3 className="text-center text-2xl font-thin text-black">See how clear your vision is with our visual acuity check!</h3>
                <Link href="/agreement" className="w-1/2">
                    <button 
                        className="my-10 w-full text-md bg-gray-900 hover:bg-gray-700 text-white border-2 border-black px-4 py-4 rounded"
                        onClick={()=> setSelectedTest('visual acuity')}>
                        Start visual acuity check    
                    </button>
                </Link>
                <h2 className="w-full text-3xl font-semibold text-black my-5">Why check your vision?</h2>
                <h6 className="w-full text-xl text-black leading-normal mb-5">
                    Checking visual acuity is crucial for assessing the overall health of an individual&apos;s vision. 
                    It provides valuable information about their ability to see clearly at various distances. 
                    Regular eye checks, like our screenings, help catch these changes early. 
                    Follow up with Dear Eyes for a thorough exam to keep your eyes in the best shape.
                </h6>
                <div className="border border-2 border-indigo-900">
                    <BlurImage/>
                </div>
                <h6 className="w-full text-center text-xl text-black leading-normal">Normal vision vs. Blurred vision</h6>
                <h2 className="w-full text-3xl font-semibold text-black my-5">How do we test your vision?</h2>
                <h6 className="w-full text-xl text-black leading-normal mb-5">
                    Our method uses a symbol like the letter C, called the Landolt C, which is a ring with an opening. 
                    Just spot the gap&apos;s position and mark it on the matching arrow. 
                    We adjust the Landolt Cs&apos; sizes until we find the smallest one you can see.
                </h6>
            </div>
        </div>
      );
};

export default VisualAcuity;