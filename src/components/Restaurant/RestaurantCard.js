import React from "react";
import './RestaurantCard.css';


const RestaurantCard = ({ shop }) => {
    
    function tagPrinter(tagsArray) {
        const newTagsArray = [];
        for (let i = 0; i < tagsArray.length; i++) {
          if (i === tagsArray.length - 1) {
            newTagsArray.push(tagsArray[i]);
          } else {
            newTagsArray.push(tagsArray[i]);
            newTagsArray.push(" • ");
          }
        }
        return newTagsArray;
    }


    return(
        <div className="shop-card">
            <div className="shop-img shop" >
                <img 
                    src={ shop.thumbnail } 
                    alt={ shop.name } />
            </div>
            <div className="shop-info">
                <h3 className="shop-name">{ shop.name }</h3>
                <p className="shop-tags">{tagPrinter(shop.tags)}</p>
                <p className="shop-address">{ shop.location }</p>
                {/* <p className="shop-rating">Rating: { shop.Rating }</p> */}
                {/* <p className="shop-eta">ETA: { shop.ETA }</p> */}
            </div>
        </div>
    );
}

export default RestaurantCard;