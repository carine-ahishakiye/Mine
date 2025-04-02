import React, { useState } from 'react';
import ProductCards from './ProductCards';
import products from '../../data/product.json'; // Correct path to the products.json file

const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);

    // Function to load more products when the user clicks "Load More"
    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4);
    };

    return (
        <section className='section__container product__container'>
            <h2 className='section__header'>Trending Products</h2>
            <p className='section__subheader mb-12'>
                Explore our most popular and trending products, carefully curated for you. Stay ahead of the curve with the latest offerings and enjoy the best deals available.
            </p>
            
            <div className='mt-12'>
                <ProductCards products={products.slice(0, visibleProducts)} />
            </div>
            <div className='product__btn'>
                {visibleProducts < products.length && (
                    <button className='btn' onClick={loadMoreProducts}>
                        Load More
                    </button>
                )}
            </div>
        </section>
    );
};

export default TrendingProducts;
