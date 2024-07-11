import React from 'react';
import OwlCarousel from 'react-owl-carousel';


const Carousel = () => {
    const options = {
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    };

    return (
        <div>
            <div className="section-title text-center">
                <h1 className="display-5 mt-5 mb-5">
                    <a href="photo.html">Photo Gallery</a>
                </h1>
            </div>
            <div className="container-fluid p-0 pb-5">
                <OwlCarousel className="owl-theme header-carousel" {...options}>
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="assets/bg16-9.jpg" alt="" />
                    </div>
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="assets/bg16-9.jpg" alt="" />
                    </div>
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="assets/bg16-9.jpg" alt="" />
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Carousel;
