import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductCard from './ProductCard';

const ProductAdvertise = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])


    return (
        <div className='w-11/12 mx-auto my-5'>
            <h1 className='my-8'>Advertise section</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
                {
                    products?.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }</div>
        </div>
    );
};

export default ProductAdvertise;