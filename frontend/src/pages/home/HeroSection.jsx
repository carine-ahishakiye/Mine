import React from 'react';
import card1 from "../../assets/7.jpg";
import card2 from "../../assets/8.jpg";
import card3 from "../../assets/9.jpg";

const cards = [
    {
        id: 1,
        image: card1,
        trend: 'African Art Renaissance 2025',
        title: 'Exploring African Heritage Through Modern Art'
    },
    {
        id: 2,
        image: card2,
        trend: 'Empowering African Artists',
        title: 'The Rise of African-Inspired Interior Designs'
    },
    {
        id: 3,
        image: card3,
        trend: 'Bridging Tradition and Modernity',
        title: 'Preserving African Culture Through Art and Design'
    }
];

const HeroSection = () => {
    return (
        <section className='section__container hero__container'>
            {cards.map((card) => (
                <div key={card.id} className='hero__card'>
                    <img src={card.image} alt={card.title} />
                    <div className='hero__content'>  
                        <p>{card.trend}</p>
                        <h4>{card.title}</h4>
                        <a href='#'>Discover More</a>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default HeroSection;
