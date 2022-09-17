import React from "react";
import { useState } from "react";
import "./Slider.css";
import Category from "./Category.js";
import CategoryData from "../data/categories.json";
import { ArrowLeft, ArrowRight } from "react-feather";

const Slider = ( ) => {
    
    // Group every 12 categories into an array (as a page)
    function group12(arr, len) {
        let chunks = [];
        let copy   = [...arr]; // Use a copy to not modifiy the original array
        while(copy.length >= len) {
            chunks.push(copy.splice(0, len));
        }
        return chunks;
    }

    const catsArr = group12(CategoryData, 12); 

    // Set pages in index to access
    const [currentIndex, setCurrentIndex] = useState(0);

    const page = catsArr[currentIndex];
    
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? catsArr.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === catsArr.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className="Slider">
            <div className='Category'>
                {/* Category Heading + Slide Button */}
                <div className="cat-head">
                    <h2>Explore by category</h2>
                    <span className="cat-button">
                        <span><a id="view-all" 
                        href="https://www.ubereats.com/tw-en/category/taipei-nwt">View all</a></span>
                        <button className="slider" onClick={goToPrevious}>
                            <ArrowLeft size={20} />
                        </button>
                        <div className="space"></div>
                        <button className="slider" onClick={goToNext}>
                            <ArrowRight size={20} />
                        </button>
                    </span>
                </div>
                 {/* Slider */}
                <div className="cat-pages">
                    <div className="cat-page">   
                    { page.map((category)=> (
                        <Category category={category}/>
                    ))}
                    </div>
                </div>

            </div>
        </div> 
            
    )
};

export default Slider;

