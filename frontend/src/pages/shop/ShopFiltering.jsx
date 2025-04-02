import React from 'react';

const ShopFiltering = ({ filters, filterState, setFilterState, clearFilter }) => {
  // Handler for price range changes
  const handlePriceRangeChange = (e) => {
    const selectedLabel = e.target.value;
    const selectedRange = filters.priceRanges.find(range => range.label === selectedLabel);
    setFilterState({
      ...filterState,
      priceRange: selectedRange || ''
    });
  };

  return (
    <div className='space-y-5 flex-shrink-0'>
      <h3>Filters</h3>

      {/* Category Filter */}
      <div className='flex flex-col space-y-2'>
        <h4 className='font-medium text-lg'>Category</h4>
        <hr />
        {filters.categories.map((category) => (
          <label key={category} className='capitalize cursor-pointer'>
            <input 
              type='radio' 
              name='category' 
              value={category}
              checked={filterState.category === category}
              onChange={(e) => setFilterState({ ...filterState, category: e.target.value })}
            />
            <span className='ml-1'>{category}</span>
          </label>
        ))}
      </div>

      {/* Color Filter */}
      <div className='flex flex-col space-y-2'>
        <h4 className='font-medium text-lg'>Color</h4>
        <hr />
        {filters.colors.map((color) => (
          <label key={color} className='capitalize cursor-pointer'>
            <input 
              type='radio' 
              name='color' 
              value={color}
              checked={filterState.color === color}
              onChange={(e) => setFilterState({ ...filterState, color: e.target.value })}
            />
            <span className='ml-1'>{color}</span>
          </label>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className='flex flex-col space-y-2'>
        <h4 className='font-medium text-lg'>Price</h4>
        <hr />
        {filters.priceRanges.map((range) => (
          <label key={range.label} className='cursor-pointer'>
            <input 
              type='radio'
              name='price'
              value={range.label}
              checked={filterState.priceRange && filterState.priceRange.label === range.label}
              onChange={handlePriceRangeChange}
            />
            <span className='ml-1'>{range.label}</span>
          </label>
        ))}
      </div>

      {/* Clear Filters Button */}
      <button 
        className='mt-4 px-4 py-2 bg-red-500 text-white rounded'
        onClick={clearFilter}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default ShopFiltering;
