import React from 'react';

interface LandoltCChartProps {
  rotation: number;
  width?: number;
  opacity?: number;
}


const LandoltCChart: React.FC<LandoltCChartProps> = ({ rotation, width, opacity=1 }) => {
  return (
  <img src="/test_images/Landolt_C.svg"
    style={{
      width: `${width}px`, 
      transform: `rotate(${rotation}deg)`,
      opacity: opacity,
    }} />
  );
};

export default LandoltCChart;