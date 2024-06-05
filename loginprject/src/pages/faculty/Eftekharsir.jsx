import React from 'react'
import Header from '../Header'
import Breadcrumb from '../Breadcrumb'
import Footer from '../Footer'

function Eftekharsir() {
  return (
    <div>
        <Header/>
        <Breadcrumb/>
        <div className="container">
        <div className="row">
            <div className="col-4">
                <img src="../assets/eftekharsir.jpg" alt="" className="img-fluid"/>
            </div>
            <div className="col-8">
                <h3 className="text-start">Eftekhar Hossain</h3>
                <h5 className="fw-lighter mb-4">Assistant Proffesor</h5>
                <div className="row">
                    <div className="col-3 pe-0">
                        <p className="fw-medium pt-2">Field of Interest:</p>
                    </div>
                    <div className="col-9 ps-0">
                        <p className="pt-2">
                            Deep Learning, Natural Language Processing, Computer Vision, and Data Science.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 pe-0">
                        <p className="fw-medium pt-2">Qualification:</p>
                    </div>
                    <div className="col-9 ps-0">
                        <p className="pt-2">
                            B.Sc in ETE, CUET <br/>
                            M.Sc in ETE, CUET

                        </p>

                    </div>

                </div>
                <div className="row">
                    <div className="col-3 pe-0">
                        <p className="fw-medium pt-2">Contact Info:</p>
                    </div>
                    <div className="col-9 ps-0">
                        <p className="pt-2">
                            <i className="fa fa-phone fa-flip-horizontal"></i>+8801521532765
                            <br/>
                            <i className="fa fa-at"></i> eftekhar.hossain@cuet.ac.bd
                        </p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-3 pe-0">
                        <a href="https://eftekhar-hossain.github.io/" className="fw-medium pt-2">Visit my profile</a>
                    </div>
                    <div className="col-9 ps-0">
                        <p className="pt-2">
                            <i className="fa fa-phone fa-flip-horizontal"></i>+8801521532765
                            <br/>
                            <i className="fa fa-at"></i> eftekhar.hossain@cuet.ac.bd 
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

export default Eftekharsir
