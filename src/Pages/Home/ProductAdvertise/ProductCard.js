import React from 'react';

const ProductCard = ({ product, setProductDetails }) => {

    const { condition, originalPrice, postedTime, productImg, productName, resellPrice, sellerLocation, usedTime } = product

    // const date = new Date().toString()
    // const date = new Date()
    console.log()
    return (
        <div>

            <div className="p-2 mx-auto max-w-[24rem] bg-base-100 shadow-md rounded-md">
                <img className='max-h-[15rem] min-h-[10rem] w-full ' src={productImg} alt="Shoes" />
                <div className="my-2 ">
                    <div className='flex justify-between items-center'>
                        <h2 className="card-title">{productName}</h2>
                        <small><span className='font-medium'>Posted:</span>{postedTime}</small>
                    </div>
                    <div className='my-2 grid grid-cols-2 gap- text-left'>
                        <p>Resell Price: ${resellPrice}</p>
                        <p>Original Price: ${originalPrice}</p>
                        <p>Condition: {condition}</p>
                        <p>Used time: {usedTime}</p>
                        <p>Location: {sellerLocation}</p>
                    </div>

                    <div className="flex gap-3 justify-between border p-1 bg-gray-100 rounded-md">
                        <label onClick={() => setProductDetails(product)} htmlFor="product-details-modal" className="bg-[#2CBBD5] px-2 py-1 rounded-md text-white text-xs sm:text-base cursor-pointer">See Details</label>
                        <label onClick={() => setProductDetails(product)} htmlFor="booking-modal" className="bg-[#F45510] px-2 py-1 rounded-md text-white text-xs sm:text-base cursor-pointer">Book Now</label>
                        <label onClick={() => setProductDetails(product)} htmlFor="reporting-modal" className="bg-[#2CBBD5] px-2 py-1 rounded-md text-white text-xs sm:text-base cursor-pointer">Add to Report</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;