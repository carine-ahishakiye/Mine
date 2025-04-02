import React, { useEffect, useState } from 'react';
import productData from '../../data/product.json';
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';

const filters = {
  categories: [
    'all', 
    'African furnitures',
    'traditional textile', 
    'cultural artwork',
    'handcrafted jewelry'
  ],
  colors: [
    'all', 
    'black', 
    'white',
    'green', 
    'beige'
  ],
  priceRanges: [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $200', min: 100, max: 200 },
    { label: 'Above $200', min: 200, max: Infinity }
  ]
};

const ShopPage = () => {
    const [products, setProducts] = useState(productData);
    const [filterState, setFilterState] = useState({
        category: 'all',
        color: 'all',
        priceRange: ''
    });
    
    const applyFilter = () => {
        let filteredProducts = productData;

        if (filterState.category && filterState.category !== "all") {
            filteredProducts = filteredProducts.filter(product => product.category === filterState.category); 
        }
        if (filterState.color && filterState.color !== "all") {
            filteredProducts = filteredProducts.filter(product => product.color === filterState.color);
        }
        if (filterState.priceRange) {
            filteredProducts = filteredProducts.filter(product => 
                product.price >= filterState.priceRange.min && product.price <= filterState.priceRange.max
            );
        }
        setProducts(filteredProducts);
    };

    useEffect(() => {
        applyFilter();
    }, [filterState]);

    const clearFilter = () => {
        setFilterState({
            category: 'all',
            color: 'all',
            priceRange: ''
        });
    };

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Shop Page</h2>
                <p className='section__subheader text-lg text-gray-700'>
                    Explore a curated selection of handcrafted, traditional, and culturally inspired products that bring authenticity and elegance into your life.
                </p>
            </section>
            <section>
                <div className="section__container">
                    <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
                    <ShopFiltering
              filters={filters}
              filterState={filterState}         // Corrected prop name
              setFilterState={setFilterState}     // Corrected prop name
              clearFilter={clearFilter}           // Corrected prop name
            />

                        <div>Shop Filtering</div>
                        <div>
                            <h3 className='text-2xl font-semibold mb-4 text-gray-800'>
                                Products Availabe: {products.length}
                            </h3>
                            <ProductCards products={products} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopPage;
