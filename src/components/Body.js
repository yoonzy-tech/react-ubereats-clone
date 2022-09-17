import React from "react";
import "./Category.css";
import Slider from "./Slider.js";
import { ArrowLeft, ArrowRight } from "react-feather";

const Body = () => {
    
    const pages = document.querySelectorAll(".cat-page");
    const translateAmount = 100;
    let translate = 0;

    const slide = (direction) => {
        direction === 'next' ? translate -= translateAmount : translate += translateAmount;
    
        pages.forEach(
          pages => (pages.style.transform = `translateX(${translate}%)`)
        );
    };

    return (
         <div className="Body">
            {/* Category */}
            <div className='Category'>
                <div className="cat-head">
                    <h2>Explore by category</h2>
                    <span className="cat-button">
                        <span><a id="view-all" 
                        href="https://www.ubereats.com/tw-en/category/taipei-nwt">View all</a></span>
                        <button className="slider" onclick={slide('prev')}>
                            <ArrowLeft size={20} />
                        </button>
                        <div className="space"></div>
                        <button className="slider" onclick={slide('next')}>
                            <ArrowRight size={20} />
                        </button>
                    </span>
                </div>
            </div>
                
            <div className="cat-pages-container">
                <div className="pages">
                    <Slider />
                </div>
            </div>
                
    
        </div>
    )
};

export default Body;
