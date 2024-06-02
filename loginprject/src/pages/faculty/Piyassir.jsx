import React from 'react'
import Header from '../Header'
import Breadcrumb from '../Breadcrumb'
import Footer from '../Footer'

function Piyassir() {
  return (
    <div>
        <Header/>
        <Breadcrumb/>
        <div className="container pb-5">
            <div className="row">
                <div className="col-4">
                    <img src="../assets/piyassir.jpeg" alt="Piyas Chowdhury" className="img-fluid" />
                </div>
                <div className="col-8">
                    <h3 className="text-start">Piyas Chowdhury</h3>
                    <h5 className="fw-lighter mb-4">Assistant Professor</h5>
                    <div className="row">
                        <div className="col-3 pe-0">
                            <p className="fw-medium pt-2">Field of Interest:</p>
                        </div>
                        <div className="col-9 ps-0">
                            <p className="pt-2">Antenna Design, Power Electronics and Control System</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 pe-0">
                            <p className="fw-medium pt-2">Qualification:</p>
                        </div>
                        <div className="col-9 ps-0">
                            <p className="pt-2">
                                B.Sc in EEE, Chittagong University of Engineering and Technology(CUET), Bangladesh.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 pe-0">
                            <p className="fw-medium pt-2">Contact Info:</p>
                        </div>
                        <div className="col-9 ps-0">
                            <p className="pt-2">
                                <i className="fa fa-phone fa-flip-horizontal"></i> +8801715307039<br />
                                <i className="fa fa-at"></i> piyas@cuet.ac.bd
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
      
    </div>
  )
}

export default Piyassir
