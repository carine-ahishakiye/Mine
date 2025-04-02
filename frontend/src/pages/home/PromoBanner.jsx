import React from 'react';

const PromoBanner = () => {
  return (
    <section className='section__container banner__container'>
      <div className='banner__card'>
        <span><i className="ri-truck-line"></i></span>
        <h4>Fast & Free Delivery</h4>
        <p>Enjoy quick and reliable delivery on all orders, straight to your doorstep.</p>
      </div>
      <div className='banner__card'>
        <span><i className="ri-money-dollar-circle-line"></i></span>
        <h4>Secure Payments</h4>
        <p>Shop with confidence using our secure and hassle-free payment options.</p>
      </div>
      <div className='banner__card'>
        <span><i className="ri-user-voice-fill"></i></span>
        <h4>Support Local Artists</h4>
        <p>Every purchase helps African artists thrive and share their culture worldwide.</p>
      </div>
    </section>
  );
};

export default PromoBanner;
