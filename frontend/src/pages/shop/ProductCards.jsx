import React from 'react';
import { Link } from 'react-router-dom'; 
import RatingStars from '../../components/RatingStars';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';



const ProductCards = ({ products }) => {
    const dispatch = useDispatch();
    const handleAddToCart = (product) =>{
         dispatch(addToCart(product))
    }
    console.log('Products:', products);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {
              products.map((product, index) => (
                <div key={index} className='product__card'>
                    <div className='relative'>
                        {/* Corrected usage of Link and template literal */}
                        <Link to={`/shop/${product._id}`}>
                            <img src={product.image} alt='product image' className='max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300' />
                        </Link>
                        <div className="hover:block absolute top-3 right-3">
                            <button className="shopping-cart-btn"
                            onClick={(e) =>{
                                e.stopPropagation();
                                handleAddToCart(product)
                            }}
                            >
                                <i className="ri-shopping-cart-2-line bg-primary text-white p-1.5 hover:bg-primary-dark transition-all duration-300 ease-in-out rounded-lg"></i>
                            </button>
                        </div>
                    </div>

                    <div className='product__card__content'>
                        <h4>{product.name}</h4>
                        <p>
                            ${product.price} 
                            {product.oldPrice ? <s>${product.oldPrice}</s> : null}
                        </p>
                        <RatingStars rating={product.rating}/>
                    </div>
                </div>
              ))  
            }
        </div>
    );
}

export default ProductCards;
