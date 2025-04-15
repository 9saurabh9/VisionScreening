import React from 'react';
import { Stack } from "@mui/material";
import Link from 'next/link';

interface EyeSwitchProps {
    link: string;
};

const EyeSwitch: React.FC<EyeSwitchProps> = ({link='/agreement'})=> {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h3 className="text-lg md:text-4xl mb-12 text-center text-black max-w-xl"><strong>Ready to begin?</strong><br/>Cover your right eye.</h3>
            <div className="flex flex-col absolute inset-x-50 bottom-1.5 gap-4 items-center">
                <Stack direction="row" spacing={4}>
                    <Link href={link}>
                    <button className="w-[8rem] md:w-[10rem] text-lg md:text-xl bg-gray-900 hover:bg-gray-700 text-white border-2 border-black p-2 md:p-4 rounded"> 
                        I&apos;m Ready
                    </button>
                    </Link>
                </Stack>
            </div>
        </div>
    )
};

export default EyeSwitch;