import React, { useEffect, useRef, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SepiaImage: React.FC = ()=> {
    const [isResizing, setIsResizing] = useState(false);
    const [width, setWidth] = useState(200); // Initial width
    const containerRef = useRef<HTMLDivElement>(null);
    const initialMousePosition = useRef<number>(0);
    const initialTouchPosition = useRef<number>(0);
  
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (isResizing && containerRef.current) {
          const newWidth = width - (e.clientX - initialMousePosition.current);
          setWidth(Math.max(0, newWidth)); // Limit minimum width to 100px
          initialMousePosition.current = e.clientX;
        }
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (isResizing && containerRef.current) {
          const newWidth = width - (e.touches[0].clientX - initialTouchPosition.current);
          setWidth(Math.max(0, newWidth)); // Limit minimum width to 0
          initialTouchPosition.current = e.touches[0].clientX;
        }
      };
      
      const handleTouchEnd = () => {
        setIsResizing(false);
      };

      const handleMouseUp = () => {
        setIsResizing(false);
      };
  
      if (isResizing) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
      }
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }, [isResizing, width]);
  
    const handleMouseDown = (e: React.MouseEvent) => {
      setIsResizing(true);
      initialMousePosition.current = e.clientX;
    };

    const handleTouchStart = (e: React.TouchEvent) => {
      setIsResizing(true);
      initialTouchPosition.current = e.touches[0].clientX;
    };

    return (
          <div className="relative w-full h-full">
            <img
              src="/details_images/color-vision.jpg"
              alt="color-vision-details"
              className="object-cover w-full h-full"
            />
             <div 
             ref={containerRef}
             className="absolute inset-y-0 right-0 backdrop-sepia w-3/4 border-l-2 border-blue-950"
             style={{ width: `${width}px`, maxWidth: '100%' }}
             onMouseDown={handleMouseDown}
             onTouchStart={handleTouchStart}>
                <div 
                className="bg-black rounded-full p-2 w-14 h-14 absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 flex justify-between items-center">
                    <ArrowBackIcon style={{ fontSize: '20px' }} className="text-white" />
                    <ArrowForwardIcon style={{ fontSize: '20px' }} className="text-white" />
                </div>
             </div>
          </div>
      );
};

export default SepiaImage;