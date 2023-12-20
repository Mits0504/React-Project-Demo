import React from "react";
import "./banner.css"


const Banner = () => {
    return (
        <>
            {/* banner block */}
            <div className="banner">
                <div className="container">
                    <div className="banner-block">
                        <div className="banner-card">
                            <img src="assets/images/banne1.webp" width={350} height={342.217}></img>
                            <div className="card-info">
                                <h5 className="card-title">ceiling<br />lamp</h5>
                                <span className="card-shop-btn">shop now</span>
                            </div>
                        </div>
                        <div className="banner-card">
                            <img src="assets/images/banner2.webp" width={350} height={342.217}></img>
                            <div className="card-info">
                                <h5 className="card-title">Aspen<br />Chairs</h5>
                                <span className="card-shop-btn">shop now</span>
                            </div>
                        </div>
                        <div className="banner-card">
                            <img src="assets/images/banner3.webp" width={350} height={342.217}></img>
                            <div className="card-info">
                                <h5 className="card-title">slab<br />table</h5>
                                <span className="card-shop-btn">shop now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* product block */}

            <div className="product-block">
                <div className="container">
                    <div className="heading">
                        <h2>Featured product</h2>
                    </div>
                    <div className="p-card-block">
                        <div className="p-card">
                            <figure>
                                <img src="assets/images/p1.webp" width={280.5} height={350.625}></img>
                                <div className="p-card-info">
                                    <h4>63in.white stucco floor lamp</h4>
                                    <span className="p-card-price">$80.00</span>
                                    <span className="cart-btn"><button>add to cart</button></span>
                                </div>
                            </figure>

                        </div>
                        <div className="p-card">
                            <figure>
                                <img src="assets/images/p2.webp" width={280.5} height={350.625}></img>
                                <div className="p-card-info">
                                    <h4>gold metal clothing rack with folding leg</h4>
                                    <span className="p-card-price">$100.00</span>
                                    <span className="cart-btn"><button>add to cart</button></span>
                                </div>
                            </figure>
                
                        </div>
                        <div className="p-card">
                            <figure>
                                <img src="assets/images/p3.webp" width={280.5} height={350.625}></img>
                                <div className="p-card-info">
                                    <h4>rabbit grey faux fur pouf</h4>
                                    <span className="p-card-price">$115.00</span>
                                    <span className="cart-btn"><button>add to cart</button></span>
                                </div>
                            </figure>
                        </div>
                        <div className="p-card">
                            <figure>
                                <img src="assets/images/p4.webp" width={280.5} height={350.625}></img>
                                <div className="p-card-info">
                                    <h4>velvet quilted blush round ottoman</h4>
                                    <span className="p-card-price">$80.00</span>
                                    <span className="cart-btn"><button>add to cart</button></span>
                                </div>
                            </figure>
                        </div>
                        <div className="p-card">
                            <figure>
                                <img src="assets/images/p5.webp" width={280.5} height={350.625}></img>
                                <div className="p-card-info">
                                    <h4>68in. bronze metal coat rack</h4>
                                    <span className="p-card-price">$60.00 - $100.00</span>
                                    <span className="cart-btn"><button>view products</button></span>
                                </div>
                            </figure>
                        </div>
                        <div className="p-card">
                            <figure>
                                <img src="assets/images/p6.webp" width={280.5} height={350.625}></img>
                                <div className="p-card-info">
                                    <h4>heirloom gold metal folding shelf</h4>
                                    <span className="p-card-price">$78.00</span>
                                    <span className="cart-btn"><button>add to cart</button></span>
                                </div>
                            </figure>
                        </div>
                        <div className="p-card">
                            <figure>
                                <img src="assets/images/p7.webp" width={280.5} height={350.625}></img>
                                <div className="p-card-info">
                                    <h4>spring floral printed pouf</h4>
                                    <span className="p-card-price">$115.00</span>
                                    <span className="cart-btn"><button>add to cart</button></span>
                                </div>
                            </figure>
                        </div>
                        <div className="p-card">
                            <figure>
                                <img src="assets/images/p8.webp" width={280.5} height={350.625}></img>
                                <div className="p-card-info">
                                    <h4>vienna grey folding desk ,35"</h4>
                                    <span className="p-card-price">$95.00</span>
                                    <span className="cart-btn"><button>add to cart</button></span>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}
export default Banner