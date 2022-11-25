import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center mt-32'>
            <div className=' flex justify-center items-center'>
                <div className='w-10 h-10 sm:w-20 sm:h-20 border-dashed border-4 sm:border-8 border-[#F45510] rounded-full animate-spin'></div>
                <h1 className='text-[#2CBBD5] sm:text-8xl text-5xl'>Loading...</h1>
            </div>
        </div>
    );
};

export default Loader;