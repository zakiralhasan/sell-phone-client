import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductDetailsModal from '../../../Components/ProductDetailsModal/ProductDetailsModal';
import ProductCard from './ProductCard';

const ProductAdvertise = () => {
    const [productDetails, setProductDetails] = useState('')
    const [products, setProducts] = useState(null)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])


    return (
        <div>
            <div>
                {products &&
                    <div className='w-11/12 mx-auto my-5'>
                        <h1 className='my-8'>Advertise section</h1>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
                            {
                                products?.map(product => <ProductCard
                                    key={product._id}
                                    product={product}
                                    setProductDetails={setProductDetails}
                                ></ProductCard>)
                            }
                        </div>
                    </div>
                }
            </div>
            <ProductDetailsModal productDetails={productDetails}></ProductDetailsModal>
        </div>
    );
};

export default ProductAdvertise;