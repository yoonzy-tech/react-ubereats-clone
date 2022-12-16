import React from 'react';
import { useState, useEffect } from 'react';
import "./RestaurantSlider.css";
import RestaurantCard from './RestaurantCard.js';
import JSON_Data from "../../data/smallData.json";

const RestaurantSlider = () => {
    
    // const [searchTerm, setSearchTerm] = useState('');
    const [shops, setShops] = useState([]);

    function searchShops(food) {
        const dataSearched = JSON_Data.filter((response) => response.tags.includes(food));
        setShops(dataSearched);
    }

    // function sortByKey(key) {
    //     //console.log(key);
    //     let sorted = [];
    //     if (key === '0') {
    //         sorted = [...shops].sort((a, b) => {
    //             return b['Rating'] - a['Rating']
    //         });
    //     }
    //     if (key === '1') {
    //         sorted = [...shops].sort((a, b) => {
    //             return a['ETA'] - b['ETA']
    //         });
    //     }
    //     setShops(sorted);
    // }
    
    useEffect(()=>{
        searchShops('American');
    },[]);
    
    return (
        <div className='RestaurantSlider'>
            <h2>Popular near you</h2>
            {shops.length > 0
                    ? (
                        <div className='shop-card-container'>
                            {shops.map((shop) => (
                                <RestaurantCard shop={shop} />
                            ))}
                        </div>
                    ) : 
                    (
                        <div className="empty">
                            <h2>No Shops Found</h2>
                        </div>
                    )}
            <hr />
        </div>
    );
};

export default RestaurantSlider;