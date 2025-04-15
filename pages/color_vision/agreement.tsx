import Link from 'next/link';
import { useTheme } from "@emotion/react";
import { Theme } from "@/utils/theme";

const Agreement: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className='p-5 flex gap-3 flex-col items-center justify-center mb-6'>
          <h1 className="w-full sm:w-[40rem] text-2xl md:text-4xl font-bold text-black">Please review and agree before proceeding</h1>
          <h3 className="w-full sm:w-[40rem] text-sm md:text-lg font-normal text-gray-600 mb-8 leading-5">
                By accessing and utilizing our online eye test services, you agree to the following terms: You acknowledge that the test results are for 
                informational purposes only and not a substitute for professional eye care. You understand the importance of regular eye examinations by 
                a qualified eye care professional. Any reliance on the online eye test is at your own risk. We are not liable for any misinterpretation of 
                results or any consequences arising from the use of this service. Your personal information will be handled in accordance with our 
                privacy policy. If you have any concerns or uncertainties, it is strongly advised to consult with an eye care professional.
            </h3>
          <Link href="/color_vision/guidelines" className="text-center w-full">
            <button className="w-full sm:w-[40rem] text-lg md:text-xl bg-gray-900 hover:bg-gray-700 text-white border-2 border-black px-4 py-4 rounded"> 
                I agree
            </button>
          </Link>
        </div>
    </div>
  );
};

export default Agreement;