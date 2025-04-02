import React from 'react';
import instaImage1 from '../assets/11.jpg';
import instaImage2 from '../assets/12.jpg';
import instaImage3 from '../assets/13.jpg';
import instaImage4 from '../assets/14.jpg';
import instaImage5 from '../assets/15.jpg';
import instaImage6 from '../assets/16.jpg';

const Footer = () => {
  return (
    <>
      <footer className='section__container footer__container'>
        <div className='footer__col'>
            <h4>CONTACT INFO</h4>
            <p>
                <span><i className="ri-map-pin-2-fill"></i></span>
                303, Kigali Street, Rwanda
            </p>
            <p>
                <span><i className="ri-mail-fill"></i></span>
                artculturehub@gmail.com
            </p>
            <p>
                <span><i className="ri-phone-fill"></i></span>
                (+250) 788 888 8888
            </p>
        </div>

        <div className='footer__col'>
            <h4>EXPLORE</h4>
            <a href='/'>Home</a>
            <a href='/about-us'>About Us</a>
            <a href='/work-with-us'>Work With Us</a>
            <a href='/blogs'>Our Blogs</a>
            <a href='/terms-and-conditions'>Terms & Conditions</a>
        </div>

        <div className='footer__col'>
            <h4>RESOURCES</h4>
            <a href='/help'>Help</a>
            <a href='/track-your-order'>Track Your Order</a>
            <a href='/privacy-policy'>Privacy Policy</a>
            <a href='/community'>Join Our Community</a>
            <a href='/partnerships'>Partnerships</a>
        </div>

        <div className='footer__col'>
            <h4>INSTAGRAM</h4>
            <div className='instagram__grid'>
                <img src={instaImage1} alt="Instagram Image 1"/>
                <img src={instaImage2} alt="Instagram Image 2"/>
                <img src={instaImage3} alt="Instagram Image 3"/>
                <img src={instaImage4} alt="Instagram Image 4"/>
                <img src={instaImage5} alt="Instagram Image 5"/>
                <img src={instaImage6} alt="Instagram Image 6"/>
            </div>
        </div>
      </footer>
      <div className='footer__bar'>
      2025 CULTURA. All Rights Reserved. Crafted with love & creativity.

      </div>
    </>
  );
}

export default Footer;
