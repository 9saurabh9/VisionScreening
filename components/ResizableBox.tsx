import React, { useState} from 'react';
import Slider from '@mui/material/Slider';
import { useBoxSizeContext } from '../context/BoxSizeContext';
import { useEffect } from 'react';

interface ResizableBoxProps {
  onChange: (newValue: boolean) => void;
};

const ResizableBox: React.FC<ResizableBoxProps> = ({onChange}) => {
  const [boxWidth, setBoxWidth] = useState<number>(275);
  const [boxHeight, setBoxHeight] = useState<number>(172.95);
  const aspectRatio = 1.59;
  const { boxDimensions, updateBoxDimensions } = useBoxSizeContext();
  const [isTextHidden, setIsTextHidden] = useState<boolean>(false);

  useEffect(()=>{
    updateBoxDimensions(boxWidth, boxHeight);
    if (boxWidth < 250) setIsTextHidden(true);
    else setIsTextHidden(false);
  },[boxWidth]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    onChange(false);
    if (typeof newValue === 'number') {
      setBoxHeight(newValue / aspectRatio);
      setBoxWidth(newValue);
    }
  };

  return (
    <div className="flex flex-col items-end">
        <div className="flex min-h-[300px] max-w-[20rem] sm:max-w-xl md:gap-12 items-end justify-end">
        {/* Resizable Box */}
        <div className="box-wrapper w-xl">
            <div
            className="h-[200px] w-[18rem] flex justify-center items-center p-8 bg-white border border-4 border-gray-300 rounded-xl border-dashed"
            style={{
                width: boxWidth,
                height: boxHeight,
            }}
            >
              {!isTextHidden && 
                <h5 className='text-black text-sm text-center'>
                  Any standard ID, credit, or bank card is suitable for adjusting your screen size for our check. 
                  Rest assured, this screening is entirely free, and we won&apos;t collect any information during the process.
                </h5>
              }
            </div>
        </div>

        {/* Vertical Slider */}
        <Slider
            orientation="vertical"
            value={boxWidth}
            onChange={handleSliderChange}
            min={100}
            max={450}
            style={{ height: '150px' }}
        />
        </div>
        <h3 className="text-lg md:text-3xl my-24 text-center text-black max-w-xl">
            <strong>Optimize screen size,</strong> by placing a card on the frame and aligning it using the slider.  
        </h3>
    </div>
  );
};

export default ResizableBox;