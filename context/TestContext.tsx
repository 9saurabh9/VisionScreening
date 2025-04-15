import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface TestContextData {
  testScores: Record<string, { leftEyeScore?: number; rightEyeScore?: number; score?: number }>;
  testsTaken: Record<string, boolean>;
  updateLeftEyeScore: (testName: string) => void;
  updateRightEyeScore: (testName: string) => void;
  updateScore: (testName: string) => void;
  markTestTaken: (testName: string) => void;
  resetContext: () => void;
}

const TestContext = createContext<TestContextData | undefined>(undefined);

interface TestProviderProps {
  children: ReactNode;
}

export const TestProvider: React.FC<TestProviderProps> = ({ children }) => {
  const [testScores, setTestScores] = useState<Record<string, { leftEyeScore?: number; rightEyeScore?: number; score?: number }>>({});
  const [testsTaken, setTestsTaken] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Initialize "contrast vision" test with left and right scores as 0
    setTestScores((prevScores) => ({
      ...prevScores,
      'contrast vision': { leftEyeScore: 0, rightEyeScore: 0 },
      'visual acuity': { leftEyeScore: 0, rightEyeScore: 0 },
      'color vision': { score: 0 },
      'astigmatism': { leftEyeScore: 0, rightEyeScore: 0 },
    }));
  
    // Mark the tests as not taken initially
    setTestsTaken((prevTestsTaken) => ({
      ...prevTestsTaken,
      'contrast vision': false,
      'visual acuity': false,
      'color vision': false,
      'astigmatism': false,
    }));
  }, []);

  const resetContext = () => {
    setTestScores({
      'contrast vision': { leftEyeScore: 0, rightEyeScore: 0 },
      'visual acuity': { leftEyeScore: 0, rightEyeScore: 0 },
      'color vision': { score: 0 },
      'astigmatism': { leftEyeScore: 0, rightEyeScore: 0 },
    });

    setTestsTaken({
      'contrast vision': false,
      'visual acuity': false,
      'color vision': false,
      'astigmatism': false,
    });
  };
  

  const updateLeftEyeScore = (testName: string) => {
    setTestScores((prevScores) => ({
      ...prevScores,
      [testName]: {
        ...prevScores[testName],
        leftEyeScore: (prevScores[testName]?.leftEyeScore || 0) + 1,
      },
    }));
  };

  const updateRightEyeScore = (testName: string) => {
    setTestScores((prevScores) => ({
      ...prevScores,
      [testName]: {
        ...prevScores[testName],
        rightEyeScore: (prevScores[testName]?.rightEyeScore || 0) + 1,
      },
    }));
  };

  const updateScore = (testName: string) => {
    setTestScores((prevScores) => ({
      ...prevScores,
      [testName]: {
        ...prevScores[testName],
        score: (prevScores[testName]?.score || 0) + 1,
      },
    }));
  };

  const markTestTaken = (testName: string) => {
    setTestsTaken((prevTestsTaken) => ({ ...prevTestsTaken, [testName]: true }));
  };

  const contextValue: TestContextData = {
    testScores,
    testsTaken,
    updateLeftEyeScore,
    updateRightEyeScore,
    updateScore,
    markTestTaken,
    resetContext,
  }; 

  return <TestContext.Provider value={contextValue}>{children}</TestContext.Provider>;
};

export const useTestContext = () => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTestContext must be used within a TestProvider');
  }
  return context;
};