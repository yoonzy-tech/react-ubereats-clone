import React from "react";
import "./Category.css";

const Category = ( {category} ) => {
    
    return (
        <div className="category-card">
            <p>{category.name}</p>
            <img src={category.icon} alt={category.name} />
        </div>
    )
};

export default Category;