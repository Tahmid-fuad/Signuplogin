import React from 'react'
import Header from '../Header'
import Breadcrumb from '../Breadcrumb'
import Footer from '../Footer'

function Arifsir() {
  return (
    <div>
        <Header/>
        <Breadcrumb/>
        <div className="container">
        <div className="row">
            <div className="col-4">
                <img src="../assets/Arifsir.jpeg" alt="" className="img-fluid"/>
            </div>
            <div className="col-8">
                <h3 className="text-start">Arif Istiaque</h3>
                <h5 className="fw-lighter mb-4">Lecturer</h5>
                <div className="row">
                    <div className="col-3 pe-0">
                        <p className="fw-medium pt-2">Field of Interest:</p>
                    </div>
                    <div className="col-9 ps-0">
                        <p className="pt-2">
                            Engineering.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 pe-0">
                        <p className="fw-medium pt-2">Qualification:</p>
                    </div>
                    <div className="col-9 ps-0">
                        <p className="pt-2">
                            B.Sc in ETE from CUET, Bangladesh
                        </p>

                    </div>

                </div>
                <div className="row">
                    <div className="col-3 pe-0">
                        <p className="fw-medium pt-2">Contact Info:</p>
                    </div>
                    <div className="col-9 ps-0">
                        <p className="pt-2">
                            <i className="fa fa-at"></i>arif.ete@cuet.ac.bd
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

export default Arifsir
