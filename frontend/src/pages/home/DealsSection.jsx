import React from 'react';
import dealsimg from "../../assets/10.jpg"; // Import the image

const DealsSection = () => {
  return (
    <div className='section__container deals__container'>
      <div className='deals__image'>
        <img src={dealsimg} alt="Amazing Deals of the Month" />  {/* Added alt text for accessibility */}
      </div>
      <div className='deals__content'>
        <h5 className='deals__discount'>Limited Time Offer: Get Up to 15% Discount!</h5> {/* Catchy heading */}
        <h4 className='deals__headline'>Deals Of The Month – Don't Miss Out!</h4> {/* Strong headline */}
        <p className='deals__description'>
          Grab this exclusive offer while it lasts! With up to 15% off on select products, now is the perfect time to save big. Hurry, the clock is ticking!
        </p>
        
        <div className='deals__countdown flex-wrap'>
          <div className='deals__countdown__card'>
            <h4>10</h4>
            <p>Days</p>
          </div> 
          <div className='deals__countdown__card'>
            <h4>20</h4>
            <p>Hours</p>
          </div> 
          <div className='deals__countdown__card'>
            <h4>40</h4>
            <p>Mins</p>
          </div> 
          <div className='deals__countdown__card'>
            <h4>60</h4>
            <p>Secs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsSection;
