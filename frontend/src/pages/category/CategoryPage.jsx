import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from "../../data/product.json";
import ProductCards from '../shop/ProductCards';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [filterProducts, setFilterProducts] = useState([]);

    useEffect(() => {
        const filtered = products.filter((product) => product.category === categoryName.toLowerCase
        ());
        
        setFilterProducts(filtered);
    }, [categoryName]);

    useEffect(() => {
        // Scroll to the top of the page when category changes
        window.scrollTo(0, 0);
    }, [categoryName]);

    return (
       <>
       <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>{categoryName}</h2>
        <p className='section__subheader'>
            Browse a diverse collection of artwork from talented African artists. Discover unique pieces that represent culture, heritage, and creativity.
        </p>
       </section>
       <div className='section__container'>
        <ProductCards products={filterProducts}/>
       </div>
       
       </>
    );
};

export default CategoryPage;
