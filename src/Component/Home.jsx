import { HiArrowNarrowRight } from 'react-icons/hi';
import waseem from '../Assets/waseem.png';


function Home() {
    return (
        <div name='home' className='bg-[#0a192f] w-full h-screen'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col sm:flex-row justify-center items-center h-full'>
                <div className='text-center sm:text-left order-2 sm:order-1 sm:mr-10'>
                    <p className='text-pink-600'>Hi, my name is</p>
                    <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>
                        WASEEM AHMAD
                    </h1>
                    <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                        I'm a Full Stack Developer.
                    </h2>
                    <p className='text-[#8892b0] py-4 max-w-[700px]'>
                        I’m a full-stack developer specializing in building (and occasionally
                        designing) exceptional digital experiences. Currently, I’m focused on
                        building responsive full-stack web applications.
                    </p>
                    <div>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                            View Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3 ' />
                            </span>
                        </button>
                    </div>
                </div>
                <div className='text-center sm:text-left order-1 sm:order-2'>
                   
                <img src={waseem} alt='Waseem Ahmad' className='w-[300px] h-[300px] mb-20 ml-20 rounded-full ' />

                </div>
            </div>
        </div>
    )
}

export default Home;
