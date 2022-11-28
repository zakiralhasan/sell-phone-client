import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../images/category/category-1.png';
import img2 from '../../../images/category/category-2.jpg';
import img3 from '../../../images/category/category-3.jpg';
const ProductsCategories = () => {
    return (
        <div className='mx-4 my-6 p-2'>
            <h1 className='my-8 text-5xl text-[#F45510]'>Products category</h1>
            <div className=''>
                <div className='sm:flex justify-between p-2 border bg-white rounded-md shadow-md mt-6'>
                    <div className='flex justify-center items-center'>
                        <img className='' src={img1} alt="" />
                    </div>
                    <div className='px-4 my-6 flex justify-center items-center'>
                        <div>
                            <h1 className='text-2xl font-medium'>Expensive smartphone</h1>
                            <p className='my-4'>In this section, you find many used expensive phones. You can buy your budget-friendly feature phone.</p>
                            <Link to='/category/expensive smartphone'>
                                <button className='bg-[#F45510]  px-10 py-2 text-white rounded-lg'>Select</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='sm:flex justify-between p-2 border bg-white rounded-md shadow-md mt-6'>
                    <div className='flex justify-center items-center'>
                        <img className='' src={img2} alt="" />
                    </div>
                    <div className='px-4 my-6 flex justify-center items-center'>
                        <div>
                            <h1 className='text-2xl font-medium'>Low budget smartphone</h1>
                            <p className='my-4'>In this section, you find many used low-budget phones. You can buy your budget-friendly feature phone.</p>
                            <Link to='/category/low budget smartphone'>
                                <button className='bg-[#F45510]  px-10 py-2 text-white rounded-lg'>Select</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='sm:flex justify-between p-2 border bg-white rounded-md shadow-md mt-6'>
                    <div className='flex justify-center items-center'>
                        <img className='' src={img3} alt="" />
                    </div>
                    <div className='px-4 my-6 flex justify-center items-center'>
                        <div>
                            <h1 className='text-2xl font-medium'>Feature phone</h1>
                            <p className='my-4'>In this section, you find many used feature phones. You can buy your budget-friendly feature phone.</p>
                            <Link to='/category/feature phone'>
                                <button className='bg-[#F45510]  px-10 py-2 text-white rounded-lg'>Select</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCategories;