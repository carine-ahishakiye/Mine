import React, { useState } from 'react';
import productsData from "../../data/product.json";
import ProductCards from '../shop/ProductCards';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();

    const filtered = productsData.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );

    setFilteredProducts(filtered);
  };

  return (
    <>
      <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>Search Page</h2>
        <p className='section__subheader'>
          Browse a diverse collection of artwork from talented African artists. Discover unique pieces that represent culture, heritage, and creativity.
        </p>
      </section>

      <section className='section__container'>
        <div className='w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4'>
          <input 
            type='text' 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            className='search-bar w-full max-w-4xl p-2 border rounded'
            placeholder='Search for products...'
          />
          <button 
            onClick={handleSearch}
            className='search button w-full md:w-auto py-2 px-8 bg-primary text-white rounded'
          >
            Search
          </button>
        </div>
        <ProductCards products={filteredProducts}/>
      </section>
    </>
  );
}

export default Search;
