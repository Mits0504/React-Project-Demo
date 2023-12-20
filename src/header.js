import React from "react";
import "./header.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { LinkHTMLAttributes } from "react";

const Header = () => {


        const option = {
            loop: true,
            margin: 10,
            autoplay:true,
            autoplayTimeout:8000,
            animationOut: 'slideOutUp',
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                },
            },
        };

    return (
        <>
            <div className="top-header">
                <div className="container">
                    <div className="top-inner">

                       <div className="serch-icon">
                        <span>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                       </div>

                       <div className="header-logo">
                        <img src="assets/images/logo_moller2.svg" width={140} height={25.8}></img>
                       </div>

                       <div className="header-icon">
                            <li className="h-icon"><a><i class="fa-regular fa-heart fa-lg"></i></a></li>
                            <li className="h-icon"><a><i class="fa-solid fa-bag-shopping fa-lg"></i></a></li>
                       </div>
                    </div>

                    <div className="menu">
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>shop</a></li>
                            <li><a>blog</a></li>
                            <li><a>pages</a></li>
                            <li><a>contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* owl carousel */}

            <OwlCarousel className='owl-theme' {...option}>
                <div class='item'>
                    <div className="slide1">
                        <img src="assets/images/home3-slider1-1.webp"></img>
                    </div>
                    <div className="container">
                        <div className="info-title">
                            <span className="owl-title">home decoration</span>
                            <h1 className="header-title">
                                the best<br/>coffee table
                            </h1>
                            <span className="button">shop now</span>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div className="slide2">
                        <img src="assets/images/home3-slider1-2.webp"></img>
                    </div>
                    <div className="container">
                        <div className="info-title">
                            <span className="owl-title">home decoration</span>
                            <h1 className="header-title">
                                heals bedside<br/>lamps
                            </h1>
                            <span className="button">shop now</span>
                        </div>
                    </div>
                </div>
                
            </OwlCarousel>
        </>
    );

}

export default Header