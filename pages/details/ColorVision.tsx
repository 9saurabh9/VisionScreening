import React, { useEffect, useRef, useState } from "react";
import SepiaImage from "./interactive-images/SepiaImage";
import Link from "next/link";
import { useTestSelectionContext } from "@/context/TestSelectionContext";

const ContrastVision: React.FC = ()=> {
    const { setSelectedTest } = useTestSelectionContext();
    return (
        <div className="flex items-start justify-center pb-8">
            <div className="w-[35rem] flex flex-col items-center justify-center mt-2 gap-2 px-5" >
                <h3 className="text-center text-sm font-bold text-gray-700">Colour Vision</h3> 
                <h1 className="text-center text-5xl font-extrabold text-black mt-10">Colour Vision Test</h1> 
                <h3 className="text-center text-2xl font-thin text-black">Check how well you distinguish colours with our colour vision test.</h3>
                <Link href="/color_vision/agreement" className="w-1/2">
                    <button 
                        className="my-10 w-full text-md bg-gray-900 hover:bg-gray-700 text-white border-2 border-black px-4 py-4 rounded">
                        Start colour vision check    
                    </button>
                </Link>
                <h2 className="w-full text-3xl font-semibold text-black my-5">Why check your colour vision?</h2>
                <h6 className="w-full text-xl text-black leading-normal mb-5">
                    A colour vision test evaluates your ability to distinguish between different colours and shades. 
                    It ensures you can perceive colours accurately, vital for various tasks like driving and identifying objects. 
                    Inherited conditions can slowly alter colour vision, commonly known as &apos;colour blindness&apos;. 
                    Regular checks help detect any colour vision deficiencies early, ensuring optimal vision for daily activities.
                </h6>
                <div className="border border-2 border-indigo-900">
                    <SepiaImage/>
                </div>
                <h6 className="w-full text-center text-xl text-black leading-normal">Normal colour vision vs. Reduced colour vision </h6>
                <h2 className="w-full text-3xl font-semibold text-black my-5">How do we check your colour vision?</h2>
                <h6 className="w-full text-xl text-black leading-normal mb-5">
                    Our test, inspired by Dr. Shinobu Ishihara, uses color plates. If you see numbers clearly, your color vision is normal. 
                    Difficulty seeing indicates a color vision issue. 
                    The screening gives a good idea but isn&apos;t a substitute for a complete eye exam.
                </h6>
            </div>
        </div>
      );
};

export default ContrastVision;