import React from 'react';
import blogsData from "../../data/blog.json";


const Blogs = () => {
   
    
    return (
        <section className='section__container blog__container'>
            <h2 className='section__header'>Latest from Our Blog</h2>
            <p className='section__subheader'>
                Stay updated with insights, trends, and inspiring stories from the world of African art and culture.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 flex-grow'>


                {
                    blogsData.map((blog, index) => (
                        <div key={index} className='blog__card cursor-pointer hover:scale-105 transition-all duration-300'>
                            <img src={blog.imageUrl} alt="Blog image" />
                            <div className='blog__card__content'>
                                <h6>{blog.subtitle}</h6>
                                <h4>{blog.title}</h4>
                                <p>{blog.date}</p>
                            </div>
                        </div> 
                    ))
                }
            </div>
        </section>
    );
};

export default Blogs;