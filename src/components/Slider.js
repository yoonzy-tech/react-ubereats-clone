import React from "react";
import { useState } from "react";
import Category from "./Category.js";
import "./Category.css";
import CategoryData from "../data/categories.json";
import { ArrowLeft, ArrowRight } from "react-feather";

const Slider = ( ) => {
    
    function group12(arr, len) {
        let chunks = [];
        let copy   = [...arr]; 
        // Use a copy to not modifiy the original array
        while(copy.length >= len) {
            chunks.push(copy.splice(0, len));
        }
        return chunks;
    }
    
    const catArr = group12(CategoryData, 12);

    const [index, setIndex] = useState(0);

    const slide = (direction) => {
        if (direction === "next") {
            index !== catArr.length - 1 || index !== 0 ?
            setIndex( index + 1 ) : 
            setIndex( index - 1 )
        }
        return index
    }

     const item = catArr[index];
    
    return (
        <div className="Body">
            <div className='Category'>
                <div className="cat-head">
                    <h2>Explore by category</h2>
                    <span className="cat-button">
                        <span><a id="view-all" 
                        href="https://www.ubereats.com/tw-en/category/taipei-nwt">View all</a></span>
                        <button className="slider" onClick={slide('prev')}>
                            <ArrowLeft size={20} />
                        </button>
                        <div className="space"></div>
                        <button className="slider" onClick={slide('next')}>
                            <ArrowRight size={20} />
                        </button>
                    </span>
                </div>
            </div>
        
            <div className="cat-pages-container">
                <div className="cat-pages">   
                    { item.map((category)=> (
                        <div className="cat-page" key={index}>
                            <div className="cat-container">
                                <Category category={category}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Slider;

