import React from 'react';

const ProductCard = ({ product }) => {

    const { category, condition, description, id, originalPrice, postedTime, productImg, productName, resellPrice, sellerLocation, sellerMobileNumber, usedTime } = product
    return (
        <div>
            <div className="p-2 mx-auto card card-compact sm:max-w-[24rem] bg-base-100 shadow-md">
                <img className='max-h-[15rem] min-h-[8rem] ' src={productImg} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <small>{description}</small>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;