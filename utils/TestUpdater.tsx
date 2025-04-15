// TestUpdater.ts
import { TestContextData} from '@/context/TestContext';
import { useEffect } from 'react';

interface TestUpdaterProps {
  testName: string;
  eye?: 'left' | 'right' | 'none';
  context: TestContextData; // Pass the context type as a prop
}

const TestUpdater = ({ testName, eye="none" , context }: TestUpdaterProps): void => {
  const { updateLeftEyeScore, updateRightEyeScore, updateScore, markTestTaken } = context;

  const handleUpdate = () => {
    if (eye === "left") {
      updateLeftEyeScore(testName);
    } else if (eye === "right") {
      updateRightEyeScore(testName);
    } else {
      updateScore(testName);
    }
    markTestTaken(testName);
  };

  // Call the update function immediately when the testUpdater is invoked
  handleUpdate();
};

export default TestUpdater;
