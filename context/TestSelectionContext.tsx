// contexts/TestSelectionContext.tsx

import { createContext, ReactNode, useContext, useState } from 'react';

interface TestSelectionContextProps {
  selectedTest: string | null;
  setSelectedTest: (testName: string) => void;
}

const TestSelectionContext = createContext<TestSelectionContextProps | undefined>(undefined);

interface TestSelectionContextProviderProps {
  children: ReactNode;
}

export const TestSelectionContextProvider: React.FC<TestSelectionContextProviderProps> = ({ children }) => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  const setTest = (testName: string) => {
    // Replace the test names and links with your actual data
    const testLinks: Record<string, string> = {
      "visual acuity": '/visual_acuity/RightEyeTest',
      "contrast vision": '/contrast_vision/RightEyeTest',
      "color vision": '/color_vision/test',
      "astigmatism": '/astigmatism/RightEyeTest',
    };

    const testLink = testLinks[testName];

    if (testLink) {
      setSelectedTest(testLink);
    } else {
      console.error(`Test link not found for test: ${testName}`);
    }
  };

  return (
    <TestSelectionContext.Provider value={{ selectedTest, setSelectedTest: setTest }}>
      {children}
    </TestSelectionContext.Provider>
  );
};

export const useTestSelectionContext = () => {
  const context = useContext(TestSelectionContext);
  if (!context) {
    throw new Error('useTestSelectionContext must be used within a TestSelectionContextProvider');
  }
  return context;
};
