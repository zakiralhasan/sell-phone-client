import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductDetailsModal from '../../Components/ProductDetailsModal/ProductDetailsModal';

const ProductCategory = () => {
    const [productDetails, setProductDetails] = useState('')
    const products = useLoaderData()
    // console.log(products)

    return (
        <div className='w-11/12 mx-auto my-5'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
                {
                    products?.map(product => <div
                        key={product._id}
                    >
                        <div className="p-2 mx-auto max-w-[24rem] bg-base-100 shadow-md rounded-md">
                            <img className='max-h-[15rem] min-h-[10rem] w-full ' src={product.productImg} alt="Shoes" />
                            <div className="my-2 ">
                                <div className='flex justify-between items-center'>
                                    <h2 className="card-title">{product.productName}</h2>
                                    <small><span className='font-medium'>Posted:</span>{product.postedTime}</small>
                                </div>
                                <div className='my-2 grid grid-cols-2 gap- text-left'>
                                    <p>Resell Price: ${product.resellPrice}</p>
                                    <p>Original Price: ${product.originalPrice}</p>
                                    <p>Condition: {product.condition}</p>
                                    <p>Used time: {product.usedTime}</p>
                                    <p>Location: {product.sellerLocation}</p>
                                </div>

                                <div className="flex gap-3 justify-between border p-1 bg-gray-100 rounded-md">
                                    <label onClick={() => setProductDetails(product)} htmlFor="product-details-modal" className="bg-[#2CBBD5] px-2 py-1 rounded-md text-white text-xs sm:text-base cursor-pointer">See Details</label>
                                    <button className="bg-[#F45510] px-2 py-1 rounded-md text-white text-xs sm:text-base ">Book Now</button>
                                    <button className="bg-[#2CBBD5] px-2 py-1 rounded-md text-white text-xs sm:text-base ">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <ProductDetailsModal productDetails={productDetails}></ProductDetailsModal>
        </div>
    );
};

export default ProductCategory;