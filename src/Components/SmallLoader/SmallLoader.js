import React from 'react';

const SmallLoader = () => {
    return (
        <div className='flex justify-center items-center mt-8'>
            <div className=' flex justify-center items-center'>
                <div className='w-6 h-6 border-dashed border-2 border-[#F45510] rounded-full animate-spin'></div>
                <h1 className='text-[#2CBBD5] text-3xl'>Loading...</h1>
            </div>
        </div>
    );
};

export default SmallLoader;