import React from 'react';
import "./Footer.css";
import GoogleAppleStoreImg from "./google-app-store.png";
import GoogleTranslate from "./g-translate.png";
import {Facebook, Twitter, Instagram} from "react-feather";

const Footer = () => {
    return (
        <div className="Footer">
            <h2>Taipei food delivery and takeout</h2>
            <p>Enjoy your favorite food, beverages and more from the stores and restaurants that deliver near you in Taipei. Choose from a variety of delivery options, from <a href="https://www.ubereats.com/tw-en/category/taipei-nwt/fast-food">Fast Food</a> to <a href="https://www.ubereats.com/tw-en/category/taipei-nwt/breakfast-and-brunch">Breakfast And Brunch</a>, review menus and store offerings, then place your online order. If you’d prefer to get your takeout yourself, simply browse the spots offering pickup in Taipei</p>

            <h2>Taipei restaurants that deliver</h2>
            <p>Uber Eats helps you find food delivery and pickup options from a wide selection of places to eat in Taipei. Enter an address to browse Taipei restaurants and cafes offering food delivery. See Taipei restaurants on Uber Eats that you’ve never tried? View their menus and star ratings to help decide if you’d like to try their food.</p>

            <h2>Best food in Taipei</h2>
            <p>On a quest to taste the best food in Taipei? Search for famous restaurants in Taipei or for your personal favorite places to eat in Taipei to see if they offer food delivery with Uber Eats. Sometimes the best food is just what you’re craving so if you know what you’d like to eat, browse Taipei restaurants that deliver by cuisine or dish.
            </p>
            <hr />
            <footer  class="cities">
                <h2>Nearby cities</h2>
                <div class="container-footer-col">
                    <div class="footer-col">
                        <ul>
                            <li><a href="#">Heping Township</a></li>
                            <li><a href="#">Sanchong</a></li>
                            <li><a href="#">Chung-ho</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <ul>
                            <li><a href="#">Xindian</a></li>
                            <li><a href="#">Xizhi</a></li>
                            <li><a href="#">Tucheng</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <ul>
                            <li><a href="#">Banqiao</a></li>
                            <li><a href="#">Danshui</a></li>
                            <li><a href="#">Sanxia</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <ul>
                            <li><a href="#">Taoyuan</a></li>
                        </ul>
                    </div>
                </div>
            </footer>    
            <hr />
            <footer class="branding">
                <div class="container-branding">
                    <div class="container-footer-col container-img">
                        <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg" alt="uber eats logo" width="150" />
                        <img src={GoogleAppleStoreImg} alt="google play store and app stoer badge" height="auto" width="300" />
                    </div>
                    <div class="container-footer-col container-footer-sub-col">
                        <div class="footer-sub-col">
                            <ul>
                                <li><a href="#">Get Help</a></li>
                                <li><a href="#">Add your restaurant</a></li>
                                <li><a href="#">Sign up to deliver</a></li>
                                <li><a href="#">Create a business account</a></li>
                                <li><a href="#">Promotions</a></li>
                            </ul>
                        </div>
                        <div class="footer-sub-col">
                            <ul>
                                <li><a href="#">Restaurants near me</a></li>
                                <li><a href="#">View all cities</a></li>
                                <li><a href="#">View all countries</a></li>
                                <li><a href="#">Pickup near me</a></li>
                                <li><a href="#">About Uber Eats</a></li>
                                <li><img id="g-translate-icon" src={GoogleTranslate} /><a href="#">English</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <hr />
            <footer class="social">
                <div class="social-col">
                    <div class="social-link">
                        <a href="#"><Facebook size="16" fill="currentColor" /></a>
                        <a href="#"><Twitter size="16" fill="currentColor" /></a>
                        <a href="#"><Instagram size="16" /></a>
                    </div>
                    <div class="statement-menu">
                        <span><a href="#">Privacy Policy</a></span>
                        <span><a href="#">Terms</a></span>
                        <span><a href="#">Pricing</a></span>                            
                        <span><a href="#">Do not sell or share my personal information</a></span>
                    </div>
                </div>
                
                <div class="statement">
                    <span>This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a>and <a href="#">Terms of Service</a> apply.</span>
                    <span>&copy; 2022 Uber Technologies Inc.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;