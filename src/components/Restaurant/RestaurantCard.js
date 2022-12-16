import React from "react";
import './RestaurantCard.css';


const RestaurantCard = ({ shop }) => {
    
    return(
        <div className="shop-card">
            <div className="shop-thumbnail" >
                <img 
                    src={ shop.thumbnail } 
                    alt={ shop.name } />
            </div>
            <div className="shop-info">
                <h3 className="shop-name">{ shop.name }</h3>
                <p className="shop-address">{ shop.location }</p>
                <p className="shop-rating">Rating: { shop.Rating }</p>
                <p className="shop-eta">ETA: { shop.ETA }</p>
            </div>
        </div>
    );
}

export default RestaurantCard;