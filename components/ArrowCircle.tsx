import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ArrowCircleProps {
    rotation: number;
    onClick: () => void;
    disabled: boolean;
  }
  

const ArrowCircle: React.FC<ArrowCircleProps> = ({ rotation, onClick, disabled }) => {
    const [isHidden, setIsHidden] = useState(false);

    const handleIconClick = () => {
      setIsHidden(true);
      onClick();
      setTimeout(() => {
        setIsHidden(false);
      }, 1000);
    };  

    return (
      <div
        className="bg-gray-900 absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 hover:bg-gray-600"
        style={{
          transform: `rotate(${rotation}deg) translate(100px)`,
          cursor: 'pointer',
          opacity: isHidden ? 0 : 1,
          pointerEvents: disabled ? 'none' : 'auto',
        }}
        onClick={handleIconClick}
      >
        <ArrowForwardIcon style={{ color: '#fff', width: '2.5rem', height: 'auto' }} />
      </div>
    );
};

export default ArrowCircle;