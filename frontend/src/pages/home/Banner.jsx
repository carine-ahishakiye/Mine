import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/1.jpg';

const Banner = () => {
  return (
    <div className='section__container header__container'>
      <div className='header__content z-30'>
        <h4 className='uppercase'>UP TO 20% Discount on</h4>
        <h2>Special Products</h2>
        <p>
          Step into the captivating world of African-inspired art. Each masterpiece tells a story of rich culture, exceptional craftsmanship, and boundless creativity, infusing your space with authenticity and timeless elegance. Discover exclusive, one-of-a-kind treasures and join us in supporting the talented African artists who bring these incredible works to life.
        </p>
        <button className='btn'>
          <Link to="/shop">EXPLORE MORE</Link>
        </button>
      </div>
      <div className="header__image">
        <img src={bannerImage} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
