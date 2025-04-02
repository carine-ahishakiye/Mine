import React from 'react';
import { Link } from 'react-router-dom'; 
import category2 from "../../assets/3.jpg";
import category3 from "../../assets/4.jpg";
import category4 from "../../assets/5.jpg";
import category5 from "../../assets/6.jpg";

const Categories = () => {
  const categories = [
    { name: 'African Furniture', path: 'african-furniture', image: category2 },
    { name: 'Traditional Textiles', path: 'traditional-textiles', image: category3 },
    { name: 'Cultural Artwork', path: 'cultural-artwork', image: category4 },
    { name: 'Handcrafted Jewelry', path: 'handcrafted-jewelry', image: category5 }
  ];

  return (
    <div className='product__grid'>
      {categories.map((category) => (
        <Link key={category.name} to={`/categories/${category.path}`} className='categories__card'>
          <img src={category.image} alt={category.name} />
          <h4>{category.name}</h4>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
