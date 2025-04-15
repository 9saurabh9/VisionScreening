import React, { useEffect, useRef, useState } from "react";
import WhitenImage from "./interactive-images/WhitenImage";
import Link from "next/link";
import { useTestSelectionContext } from "@/context/TestSelectionContext";

const ContrastVision: React.FC = ()=> {
    const { setSelectedTest } = useTestSelectionContext();

    return (
        <div className="flex items-start justify-center pb-8">
            <div className="w-[35rem] flex flex-col items-center justify-center mt-2 gap-2 px-5" >
                <h3 className="text-center text-sm font-bold text-gray-700">Contrast Vision</h3> 
                <h1 className="text-center text-5xl font-extrabold text-black mt-10">Contrast Vision Test</h1> 
                <h3 className="text-center text-2xl font-thin text-black">Check how well you see differences in shades with our contrast vision test.</h3>
                <Link href="/contrast_vision/agreement" className="w-1/2">
                    <button 
                        className="my-10 w-full text-md bg-gray-900 hover:bg-gray-700 text-white border-2 border-black px-4 py-4 rounded">
                        Start contrast vision check    
                    </button>
                </Link>
                <h2 className="w-full text-3xl font-semibold text-black my-5">Why check your contrast vision?</h2>
                <h6 className="w-full text-xl text-black leading-normal mb-5">
                    A contrast vision test assesses your ability to distinguish between light and dark, changes can be subtle, making it easy to miss. 
                    Regular eye checks, like our screenings, help catch these changes early. 
                    Follow up with Dear Eyes for a thorough exam to keep your eyes in the best shape.
                </h6>
                <div className="border border-2 border-indigo-900">
                    <WhitenImage/>
                </div>
                <h6 className="w-full text-center text-xl text-black leading-normal">Normal contrast vision vs. Reduced contrast vision </h6>
                <h2 className="w-full text-3xl font-semibold text-black my-5">How do we check your contrast vision?</h2>
                <h6 className="w-full text-xl text-black leading-normal mb-5">
                    The contrast vision check, like our visual acuity test, uses the Landolt C symbol. 
                    This C-shaped ring gets gradually brighter. 
                    Spot the gap&apos;s position and mark it on the arrow below.
                </h6>
            </div>
        </div>
      );
};

export default ContrastVision;