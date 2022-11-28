import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { BsCheckCircleFill } from "react-icons/bs";

const ProductDetailsModal = ({ productDetails }) => {
    const [userData, setUserData] = useState()

    const { category, condition, description, id, originalPrice, postedTime, productImg, productName, resellPrice, sellerLocation, sellerMobileNumber, usedTime, sellerName, email } = productDetails

    //this ueseEffect is used for find verified users
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/user?email=${productDetails?.email}`)
            .then(data => setUserData(data.data))
            .catch(error => console.log(error))
    }, [productDetails?.email])

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="product-details-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="product-details-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <div className="p-2 mx-auto max-w-[24rem] bg-base-100 shadow-md rounded-md">
                            <img className='max-h-[15rem] min-h-[10rem] w-full ' src={productImg} alt="Shoes" />
                            <div className="my-2 ">
                                <div className='flex justify-between items-center'>
                                    <h2 className="card-title">{productName}</h2>
                                    <small><span className='font-medium'>Posted:</span>{postedTime}</small>
                                </div>
                                <div className='my-2 grid grid-cols-2 gap- text-left'>
                                    <p className='col-span-2'><span className='font-semibold'>Category:</span> {category}</p>
                                    <p><span className='font-semibold'>Resell Price:</span> ${resellPrice}</p>
                                    <p><span className='font-semibold'>Original Price:</span> ${originalPrice}</p>
                                    <p><span className='font-semibold'>Condition:</span> {condition}</p>
                                    <p><span className='font-semibold'>Used time:</span> {usedTime}</p>
                                    <p><span className='font-semibold'>Location:</span> {sellerLocation}</p>
                                </div>

                                <div className="text-left p-1 rounded-md">
                                    {userData?.verified ?
                                        <div className='flex gap-6 justify-start items-center'>
                                            <p><span className='font-semibold'>Seller name: </span>{sellerName}</p>
                                            <BsCheckCircleFill className='text-blue-500 pt-1 text-xl' />
                                        </div>
                                        :
                                        <div>
                                            <p><span className='font-semibold'>Seller name: </span>{sellerName}</p>
                                        </div>
                                    }
                                    <p><span className='font-semibold'>Seller mobile: </span>{sellerMobileNumber}</p>
                                    <p><span className='font-semibold'>Description:</span> {description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsModal;