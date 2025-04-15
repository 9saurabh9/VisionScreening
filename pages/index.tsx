import Link from 'next/link';
import { useTestSelectionContext } from '@/context/TestSelectionContext';

const Home: React.FC = () => {
  const { setSelectedTest } = useTestSelectionContext();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center text-black">Welcome to Dear Eyes Screening test</h1>
          <div className='flex gap-3 flex-col items-center justify-center mb-6'> 
            <Link href="/agreement" className='text-center'>
              <button 
                className="w-[20rem] md:w-[30rem] text-lg md:text-xl text-center bg-gray-900 hover:bg-gray-600 text-white px-4 py-4 rounded"
                onClick={()=> setSelectedTest('visual acuity')}>
                Check your vision</button>
            </Link>
            <Link href="/select_check" className='text-center'>
              <button 
                className="w-[20rem] md:w-[30rem] text-lg md:text-xl bg-transparent hover:bg-gray-900 text-black hover:text-white border-2 border-black px-4 py-4 rounded">
                Or select a specific check
              </button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Home;