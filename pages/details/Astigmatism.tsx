import React, { useEffect, useRef, useState } from "react";
import ShakenImage from "./interactive-images/ShakenImage";
import Link from "next/link";
import { useTestSelectionContext } from "@/context/TestSelectionContext";

const Astigmatism: React.FC = ()=> {
    const { setSelectedTest } = useTestSelectionContext();
    return (
        <div className="flex items-start justify-center pb-8">
            <div className="w-[35rem] flex flex-col items-center justify-center mt-2 gap-2 px-5" >
                <h3 className="text-center text-sm font-bold text-gray-700">Astigmatism</h3> 
                <h1 className="text-center text-5xl font-extrabold text-black mt-10">Astigmatism Test</h1> 
                <h3 className="text-center text-2xl font-thin text-black">Look for astigmatism signs.</h3>
                <Link href="/astigmatism/agreement" className="w-1/2">
                    <button 
                        className="my-10 w-full text-md bg-gray-900 hover:bg-gray-700 text-white border-2 border-black px-4 py-4 rounded"
                        onClick={()=> setSelectedTest('astigmatism')}>
                        Start astigmatism check    
                    </button>
                </Link>
                <h2 className="w-full text-3xl font-semibold text-black my-5">Why check for astigmatism?</h2>
                <h6 className="w-full text-xl text-black leading-normal mb-5">
                    Astigmatism is a common eye condition due to irregular cornea or lens shape, 
                    causing blurry or distorted vision, eye strain, headaches, and poor night vision. 
                    Regular checks are essential to detect and correct astigmatism, 
                    improving vision clarity and overall eye comfort for a better quality of life.
                </h6>
                <div className="border border-2 border-indigo-900">
                    <ShakenImage/>
                </div>
                <h6 className="w-full text-center text-xl text-black leading-normal">Normal vision vs. Vision with asitgmatism</h6>
                <h2 className="w-full text-3xl font-semibold text-black my-5">How do we check for astigmatism?</h2>
                <h6 className="w-full text-xl text-black leading-normal mb-5">
                    Our test involves a semicircle of black lines appearing in various shades of grey if astigmatism is present. 
                    We ask if you can see any grey shades. Please remember, our test doesn&apos;t replace a professional eye exam.
                </h6>
            </div>
        </div>
      );
};

export default Astigmatism;