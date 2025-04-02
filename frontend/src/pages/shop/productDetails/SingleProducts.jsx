import React from 'react';
import { Link, useParams } from 'react-router-dom';
import RatingStars from '../../../components/RatingStars';

const SingleProducts = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>Single Product Page</h2>
        <div className='section__subheader space-x-2'>
          <span className='hover:text-primary'>
            <Link to='/'>Home</Link>
          </span>
          <i className="ri-arrow-right-long-fill"></i>
          <span className='hover:text-primary'>
            <Link to='/shop'>Shop</Link>
          </span>
          <i className="ri-arrow-right-long-fill"></i>
          <span className='hover:text-primary'>Product Name</span>
        </div>
      </section>
      <section className='section__container mt-8'>
        <div className='flex flex-col items-center md:flex-row gap-8'>
          <div className='md:w-1/2 w-full'>
            <img
              src="https://images.pexels.com/photos/8741309/pexels-photo-8741309.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Product"
              className='rounded-md w-full h-auto'
            />
          </div>
          <div className='md:w-1/2 w-full'>
            <h3 className="text-2xl font-semibold mb-4">Product Name</h3>
            <p className="text-xl text-primary mb-4">
              $100 <s>$150</s>
            </p>
            <p className='text-gray-400 mb-4'>Product description here</p>
            <div>
              <p><strong>Category:</strong> Ash Wall Hanging</p>
              <p><strong>Color:</strong> Black</p>
              <div className='flex gap-1 items-center'>
                <strong>Rating:</strong> 
                <RatingStars rating={"4"} />
              </div>
              <button className='mt-6 px-6 py-3 bg-primary text-white rounded-md'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        
      </section>
    </>
  );
};

export default SingleProducts;
