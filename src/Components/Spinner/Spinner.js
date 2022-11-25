import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div className=''>
                <div className=' flex justify-center items-center'>
                    <div className='w-10 h-10 border-dashed border-4 border-[#F45510] rounded-full animate-spin'></div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;