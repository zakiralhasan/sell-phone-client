import React from 'react';
import ProductAdvertise from '../ProductAdvertise/ProductAdvertise';
import ProductsCategories from '../../Home/ProductsCategories/ProductsCategories';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ProductAdvertise></ProductAdvertise>
            <ProductsCategories></ProductsCategories>
        </div>
    );
};

export default Home;