import { useTestContext } from '../context/TestContext';

interface TestUpdaterProps {
  testName: string;
  eye: 'left' | 'right';
  // Add any other relevant props for updating the context
}

export const TestUpdater = ({ testName, eye }: TestUpdaterProps): void => {
  const { updateLeftEyeScore, updateRightEyeScore, markTestTaken } = useTestContext();

  const handleUpdate = () => {
    if (eye === 'left') {
      updateLeftEyeScore(testName);
    } else {
      updateRightEyeScore(testName);
    }
    markTestTaken(testName);
  };

  // Call the update function immediately when the testUpdater is invoked
  handleUpdate();
};
