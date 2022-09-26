import React from "react";
import "./CategoryCard.css"

const CategoryCard = ( {category} ) => {
    
    return (
        <div className="category-card">
            <p>{category.name}</p>
            <img src={category.icon} alt={category.name} />
        </div>
    )
};

export default CategoryCard;