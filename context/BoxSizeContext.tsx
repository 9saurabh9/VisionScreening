import { createContext, useContext, ReactNode, useState } from 'react';

interface BoxSizeContextProps {
  children: ReactNode;
}

interface BoxSizeContextValues {
  boxDimensions: { width: number; height: number };
  updateBoxDimensions: (newWidth: number, newHeight: number) => void;
}

const BoxSizeContext = createContext<BoxSizeContextValues | undefined>(undefined);

export const BoxSizeProvider: React.FC<BoxSizeContextProps> = ({ children }) => {
  const [boxDimensions, setBoxDimensions] = useState({ width: 0, height: 0 });

  const updateBoxDimensions = (newWidth: number, newHeight: number) => {
    setBoxDimensions({ width: newWidth, height: newHeight });
  };

  const contextValues: BoxSizeContextValues = {
    boxDimensions,
    updateBoxDimensions,
  };

  return <BoxSizeContext.Provider value={contextValues}>{children}</BoxSizeContext.Provider>;
};

export const useBoxSizeContext = () => {
  const context = useContext(BoxSizeContext);
  if (!context) {
    throw new Error('useBoxSizeContext must be used within a BoxSizeProvider');
  }
  return context;
};
