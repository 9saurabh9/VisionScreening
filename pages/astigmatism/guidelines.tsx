import { useEffect, useState } from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import ResizableBox from '@/components/ResizableBox';
import Link from 'next/link';
import { Stack } from '@mui/material';
import { useTestSelectionContext } from '@/context/TestSelectionContext';

const Guidelines: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [sliderUnchanged, setSliderUnchanged] = useState<boolean>(true);
  const { selectedTest } = useTestSelectionContext();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
        if ((prevActiveStep + 1)  === 1 && sliderUnchanged === true)
          setShowConfirmation(true);
        return prevActiveStep + 1
      });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const dontCalibrate = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {showConfirmation === true ? 
        <div className='flex gap-3 flex-col items-center justify-center mb-6'>
          <h1 className="w-[20rem] sm:w-[30rem] text-2xl sm:text-4xl font-bold text-gray-700">Are you sure you don&apos;t want to calibrate your screen?</h1>
          <h3 className="w-[20rem] sm:w-[30rem] text-sm md:text-lg text-gray-500 mb-8">You didn&apos;t do size calibration with a standard card, this will negatively affect test results.</h3>
          <button className="w-[20rem] sm:w-[30rem] text-lg md:text-xl bg-gray-900 hover:bg-gray-700 text-white border-2 border-black p-2 md:p-4 rounded" 
            onClick={()=> { 
              setShowConfirmation(false);
              setActiveStep(0);}}> 
            Go back
          </button>
          <button className="w-[20rem] sm:w-[30rem] text-lg md:text-xl bg-transparent hover:bg-gray-900 text-black hover:text-white border-2 border-black p-2 md:p-4 rounded" onClick={dontCalibrate}> 
            Continue without calibration
          </button>
        </div>
      : <>
        {activeStep === 0 ? 
        <ResizableBox onChange={setSliderUnchanged} /> 
        : <h3 className="text-lg md:text-3xl mb-12 text-center text-black max-w-sm sm:max-w-xl" dangerouslySetInnerHTML={{ __html: instructions[activeStep].title }}></h3>}
        <div className="flex flex-col absolute inset-x-50 bottom-1.5 gap-4 items-center">    
          <MobileStepper
          variant="dots"
          steps={instructions.length}
          position="static"
          activeStep={activeStep}
          sx={{maxWidth: 500, bgcolor: 'transparent', display: 'flex', justifyContent: 'center', color: 'black'}}
          nextButton={
            <></>
          }
          backButton={
            <></>
          }
          />
          {activeStep < instructions.length - 1 ? 
          <Stack direction="row" justifyContent="center" alignItems="center"> 
            <button 
              className={`${activeStep === 0 ? 'hidden' : ''} w-[8rem] text-lg md:w-[10rem] mr-4 md:text-xl bg-gray-900 hover:bg-gray-700 text-white border-2 border-black p-2 md:p-4 rounded`}
              onClick={handleBack}>
              Prev Step
            </button>
            <button 
              className="w-[8rem] md:w-[10rem] text-lg md:text-xl bg-gray-900 hover:bg-gray-700 text-white border-2 border-black p-2 md:p-4 rounded" 
              onClick={handleNext}>
              Next Step
            </button>
          </Stack>
          : <Stack direction="row" spacing={4}>
            <button 
              className="w-[8rem] md:w-[10rem] text-lg md:text-xl bg-gray-900 hover:bg-gray-700 text-white border-2 border-black p-2 md:p-4 rounded" 
              onClick={handleBack}>
              Prev Step
            </button> 
            <Link href='/astigmatism/RightEyeTest'>
              <button className="w-[8rem] md:w-[10rem] text-lg md:text-xl bg-gray-900 hover:bg-gray-700 text-white border-2 border-black p-2 md:p-4 rounded"> 
                I&apos;m Ready
              </button>
            </Link>
          </Stack>}
        </div>
        </>
      }
    </div>
  );
};

export default Guidelines;

const instructions = [
  {
    title: "",
  },
  {
    title: "For the most accurate results, <strong>maximize your screen brightness</strong> in your device settings.",
  },
  {
    title: "<strong>Get ready!</strong><br>Wear your glasses or contacts, if you use them.",
  },
  {
    title: "<strong>Maintain distance.</strong><br>Keep your device at arm's length for the check.",
  },
  {
    title: "<strong>Ready to begin?</strong><br>Cover your left eye.",
  },
];
