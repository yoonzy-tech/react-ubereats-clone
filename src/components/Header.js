import React from "react";
import "./Header.css";
import { MapPin, Menu } from "react-feather";

const Header = () => {
    return (
        <div className="Header">
            <header>
                <Menu />
                <img id="logo" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg" alt="uber eats logo"/>
                
                <span className="switch">
                    <form>
                        <input type="checkbox" id="slider"/>
                        <label for="slider"></label>
                    </form>
                    
                </span>

                <button id="sign-in">Sign in</button>
            </header>

            <div className="banner search">
                <div className="banner-background">
                    <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7981ed1c9d3bc9f4.svg" alt="" />
                    <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d71cdec0519cee22.svg" alt="" />
                </div>
                    
                <div className="search-container">
                    <h2>Food Delivery in Taipei</h2>
                    <div className="search-bar-container">
                        <div className="search-input">
                        <MapPin />
                            <input placeholder="Enter delivery address"></input>
                        </div>
                        <button id="search-button">Find Food</button>  
                    </div>
                    
                </div>
            </div>  

            {/* Breadcrumb */}

            <div className="location-breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Taiwan (ROC)</li>
                    <li className="breadcrumb-item">New Taipei City</li>
                    <li className="breadcrumb-item" id="taipei">Taipei</li>
                </ol>
            </div>
            <div className="description">
                <h2>Food Delivery in Taipei</h2>
                <p>Have your favorite Taipei restaurant food delivered to your door with Uber Eats. Whether you want to order breakfast, lunch, dinner, or a snack, Uber Eats makes it easy to discover new and nearby places to eat in Taipei. Browse tons of food delivery options, place your order, and track it by the minute. </p>

            </div>
            <hr />
        </div>
    )
};

export default Header;