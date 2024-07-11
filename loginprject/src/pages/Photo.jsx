import React, { useEffect } from 'react';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';
import Header from './Header';
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2';
import Isotope from 'isotope-layout';

function Photo() {
    useEffect(() => {
        // Initialize Isotope
        const isotope = new Isotope('.portfolio-container', {
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        // Filter items on button click
        const filters = document.querySelectorAll('#portfolio-flters li');
        filters.forEach(filter => {
            filter.addEventListener('click', function () {
                filters.forEach(f => f.classList.remove('active'));
                this.classList.add('active');
                const filterValue = this.getAttribute('data-filter');
                isotope.arrange({ filter: filterValue });
            });
        });

        // Initialize Lightbox
        window.lightbox.option({
            resizeDuration: 200,
            wrapAround: true
        });
    }, []);

    return (
        <div>
            <div>
                <Header />
                <Breadcrumb />
                <div>
                    <div className="container-xxl py-5">
                        <div className="container">
                            <div className="section-title text-center">
                                <h1 className="display-5 mb-5">Photo Gallery</h1>
                            </div>
                            <div className="row mt-n2 wow fadeInUp">
                                <div className="col-12 text-center">
                                    <ul className="list-inline mb-5" id="portfolio-flters">
                                        <li className="mx-2 active" data-filter="*">All</li>
                                        <li className="mx-2" data-filter=".first">Academic</li>
                                        <li className="mx-2" data-filter=".second">Extra-Curriculam</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row g-4 portfolio-container">
                                <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp">
                                    <div className="rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/njr.jpg" alt="" />
                                            <div className="portfolio-overlay">
                                                <a className="btn btn-square btn-outline-light mx-1" href="assets/njr.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                                <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a>
                                            </div>
                                        </div>
                                        <div className="border border-5 border-light border-top-0 p-4">
                                            {/* <p className="text-primary fw-medium mb-2">Academic</p> */}
                                            <h5 className="lh-base mb-0 text-center">Pic1</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp">
                                    <div className="rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/ful.jpg" alt="" />
                                            <div className="portfolio-overlay">
                                                <a className="btn btn-square btn-outline-light mx-1" href="assets/ful.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                                <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a>
                                            </div>
                                        </div>
                                        <div className="border border-5 border-light border-top-0 p-4">
                                            {/* <p className="text-primary fw-medium mb-2">Extra-Curriculam</p> */}
                                            <h5 className="lh-base mb-0 text-center">Pic2</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp">
                                    <div className="rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/ful.jpg" alt="" />
                                            <div className="portfolio-overlay">
                                                <a className="btn btn-square btn-outline-light mx-1" href="assets/ful.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                                <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a>
                                            </div>
                                        </div>
                                        <div className="border border-5 border-light border-top-0 p-4">
                                            {/* <p className="text-primary fw-medium mb-2">Academic</p> */}
                                            <h5 className="lh-base mb-0 text-center">Pic3</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp">
                                    <div className="rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/njr.jpg" alt="" />
                                            <div className="portfolio-overlay">
                                                <a className="btn btn-square btn-outline-light mx-1" href="assets/njr.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                                <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a>
                                            </div>
                                        </div>
                                        <div className="border border-5 border-light border-top-0 p-4">
                                            {/* <p className="text-primary fw-medium mb-2">Extra-Curriculam</p> */}
                                            <h5 className="lh-base mb-0 text-center">Pic4</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp">
                                    <div className="rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/njr.jpg" alt="" />
                                            <div className="portfolio-overlay">
                                                <a className="btn btn-square btn-outline-light mx-1" href="assets/njr.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                                <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a>
                                            </div>
                                        </div>
                                        <div className="border border-5 border-light border-top-0 p-4">
                                            {/* <p className="text-primary fw-medium mb-2">Academic</p> */}
                                            <h5 className="lh-base mb-0 text-center">Pic5</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp">
                                    <div className="rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/njr.jpg" alt="" />
                                            <div className="portfolio-overlay">
                                                <a className="btn btn-square btn-outline-light mx-1" href="assets/njr.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                                <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a>
                                            </div>
                                        </div>
                                        <div className="border border-5 border-light border-top-0 p-4">
                                            {/* <p className="text-primary fw-medium mb-2">Extra-Curriculam</p> */}
                                            <h5 className="lh-base mb-0 text-center">Pic6</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Photo
