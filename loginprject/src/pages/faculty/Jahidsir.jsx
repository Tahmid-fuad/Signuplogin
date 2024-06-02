import React from 'react'
import Header from '../Header'
import Breadcrumb from '../Breadcrumb'
import Footer from '../Footer'

function Jahidsir() {
  return (
   <div>
      <Header />
      <Breadcrumb />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src="assets/Jahedsir.jpg" alt="Dr. Md. Jahedul Islam" className="img-fluid" />
          </div>
          <div className="col-8">
            <h3 className="text-start">DR. MD. JAHEDUL ISLAM</h3>
            <h5 className="fw-lighter mb-4">Professor</h5>
            <div className="row">
              <div className="col-3 pe-0">
                <p className="fw-medium pt-2">Field of Interest:</p>
              </div>
              <div className="col-9 ps-0">
                <p className="pt-2">
                  <span style={{ fontWeight: 600 }}>Optical Communications:</span> OCDMA system, WDM system, Free space optical communication, Underwater wireless optical communication, Fiber optic communication, Visible light communication.
                  <br />
                  <span style={{ fontWeight: 600 }}>Nonlinear Optics and Photonics:</span> Nonlinear propagation dynamics, Bragg grating solitons, Optical solitons, Supercontinuum generation, Coupled waveguide, Multi-core fiber, Soliton switching, Photonic crystal fiber in different applications.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-3 pe-0">
                <p className="fw-medium pt-2">Qualification:</p>
              </div>
              <div className="col-9 ps-0">
                <p className="pt-2">
                  <span style={{ fontWeight: 600 }}>Doctor of Philosophy (PhD),</span> School of Electrical and Information Engineering, The University of Sydney, Australia. 2015<br />
                  <span style={{ fontWeight: 600 }}>MSc in Electrical and Electronic Engineering,</span> Khulna University of Engineering & Technology, Bangladesh. 2011<br />
                  <span style={{ fontWeight: 600 }}>BSc in Electrical and Electronic Engineering,</span> Khulna University of Engineering & Technology, Bangladesh. 2009
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-3 pe-0">
                <p className="fw-medium pt-2">Contact Info:</p>
              </div>
              <div className="col-9 ps-0">
                <p className="pt-2">
                  <i className="fa fa-at"></i> jahed@cuet.ac.bd
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

export default Jahidsir
