// import React, { useEffect } from "react";
import { useState, useRef } from "react";
import "./Slider.css";
import CategoryCard from "./Card.js";
import CategoryData from "../../data/categories.json";
import { ArrowLeft, ArrowRight } from "react-feather";

const Slider = ( ) => {

    // Set pages in index to access
    const [scrollX, setScrollX] = useState(0);
    const [scrollEnd, setScrollEnd] = useState(false);
    

    const scrl = useRef(null);
    
    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setScrollX(scrollX + shift); // Updates the latest scrolled postion
        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= 
            scrl.current.offsetWidth
        ) {
            setScrollEnd(true);
          } else {
            setScrollEnd(false);
        }
    };
    console.log(scrl.current.scrollWidth);
    // console.log(scrl.current.scrollLeft);
    console.log(scrl.current.offsetWidth);
    console.log(scrollX);
    
    const scrollCheck = () => {
        setScrollX(scrl.current.scrollLeft);
        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= 
            scrl.current.offsetWidth
        ) {
          setScrollEnd(true);
        } else {
          setScrollEnd(false);
        }
    };

    console.log(scrollEnd);
    

    // useEffect();
    

    return (
        <div className="Slider">
            <div className='Category'>
                {/* Category Heading + Slide Button */}
                <div className="cat-head">
                    <h2>Explore by category</h2>
                    <span className="cat-button">
                        <span><a id="view-all" 
                        href="https://www.ubereats.com/tw-en/category/taipei-nwt">View all</a></span>
                        
                       
                            <button
                                className={scrollX === 0 ?"slider-button-disabled" : "slider-button"}
                                
                                onClick={ ((()=>{ 
                                slide(-scrl.current.scrollWidth);
                            }))}>
                            
                                <ArrowLeft size={20} />
                            </button>
    
                        

                        <div className="space"></div>

                        
                            <button 
                                className={scrollEnd ? "slider-button-disabled" : "slider-button"} 
                                onClick={((()=>{ 
                                slide(+scrl.current.scrollWidth);
                            }))}>
                                <ArrowRight size={20} />
                            </button>
                        
                        
                    </span>
                </div>
                 {/* Slider */}
                
                <div ref={scrl} onScoll={scrollCheck} className="cat-pages">
                    {CategoryData.map((catItem, i) => (
                        <div className="cat-page"
                        key={i} 
                        >
                            <div className="cat-container">
                            { catItem.map((category)=> (
                                <CategoryCard category={category}/>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
                <hr />
            </div>
        </div> 
            
    )
};

export default Slider;

    // Group every 12 categories into an array (as a page)
    // function group12(arr, len) {
    //     let chunks = [];
    //     let copy   = [...arr]; // Use a copy to not modifiy the original array
    //     while(copy.length >= len) {
    //         chunks.push(copy.splice(0, len));
    //     }
    //     return chunks;
    // }
    // const catsArr = group12(CategoryData, 12); 