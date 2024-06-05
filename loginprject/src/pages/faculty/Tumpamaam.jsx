import React from 'react'
import Header from '../Header'
import Breadcrumb from '../Breadcrumb'
import Footer from '../Footer'

function Tumpamaam() {
    return (
        <div>
            <Header />
            <Breadcrumb />
            <div className="container pb-5">
                <div className="row">
                    <div className="col-4">
                        <img src="../assets/Tumpama'am.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-8">
                        <h3 className="text-start">Priyanti Paul Tumpa</h3>
                        <h5 className="fw-lighter mb-4">Lecturer</h5>
                        <div className="row">
                            <div className="col-3 pe-0">
                                <p className="fw-medium pt-2">Field of Interest:</p>
                            </div>
                            <div className="col-9 ps-0">
                                <p className="pt-2">
                                    Biomedical Engineering, Signal Processing, Machine Learning, Artificial Intelligence


                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 pe-0">
                                <p className="fw-medium pt-2">Qualification:</p>
                            </div>
                            <div className="col-9 ps-0">
                                <p className="pt-2">

                                    B.Sc. in Electronics and Telecommunication Engineering<br />
                                    Chittagong University of Engineering and Technology, Bangladesh.
                                </p>

                            </div>

                        </div>
                        <div className="row">
                            <div className="col-3 pe-0">
                                <p className="fw-medium pt-2">Contact Info:</p>
                            </div>
                            <div className="col-9 ps-0">
                                <p className="pt-2">
                                    <i className="fa fa-phone fa-flip-horizontal"></i> +8801924921674<br />
                                    <i className="fa fa-at"></i> priyanti.ete@cuet.ac.bd
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Tumpamaam
