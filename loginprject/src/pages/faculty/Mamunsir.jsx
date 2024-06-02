import React from 'react'
import Header from '../Header'
import Breadcrumb from '../Breadcrumb'
import Footer from '../Footer'

function Mamunsir() {
  return (
    <div>
        <Header/>
        <Breadcrumb/>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src="../assets/mamunsir.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-8">
                    <h3 className="text-start">Nursadul Mamun</h3>
                    <h5 className="fw-lighter mb-4">Assistant Professor</h5>
                    <div className="row">
                        <div className="col-3 pe-0">
                            <p className="fw-medium pt-2">Field of Interest:</p>
                        </div>
                        <div className="col-9 ps-0">
                            <p className="pt-2">
                                • Audio, Speech and Language Processing • Speech Enhancement • Auditory Nerve Modelling • Cochlear Implants and Hearing aids • Speech and Speaker Recognition • Deep neural networks in speech recognition • Speech Intelligibility and Quality measure • Machine Learning
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 pe-0">
                            <p className="fw-medium pt-2">Qualification:</p>
                        </div>
                        <div className="col-9 ps-0">
                            <p className="pt-2">
                                Ph.D. in EEE, Erik Jonsson School of Engineering and Computer Science, The University of Texas at Dallas, USA. <br />
                                M.Sc. in Biomedical Engineering, University Malaya, Kuala Lumpur, Malaysia.<br />
                                B.Sc. in EEE, Chittagong University of Engineering and Technology, Bangladesh.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 pe-0">
                            <p className="fw-medium pt-2">Contact Info:</p>
                        </div>
                        <div className="col-9 ps-0">
                            <p className="pt-2">
                                <i className="fa fa-phone fa-flip-horizontal"></i> +8801813977506<br />
                                <i className="fa fa-at"></i> nursad.mamun@cuet.ac.bd
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <h4 className="">Publications</h4>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Title</th>
                            <th>Authors</th>
                            <th>Informations</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Design and Characterization of Polarization Reconfigurable Heart Shape .Monopole Antenna for 2.4GHz Application</td>
                            <td>MA Hossain, AH Morshed, MA Rahman, E Nishiyama and I Toyoda</td>
                            <td>IJECE</td>
                            <td>2021</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>A 4-element MIMO antenna with orthogonal circular polarization for sub-6 GHz 5G cellular applications</td>
                            <td>S Chakraborty, MA Rahman, MA Hossain, AT Mobashsher, E Nishiyama, I Toyoda</td>
                            <td>Springer Nature Applied Sciences</td>
                            <td>2020</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Design and exploration of functioning of a DZ shaped SNG multiband metamaterial for L-, S-, and X-bands applications</td>
                            <td>N Dhar, MA Rahman, MA Hossain</td>
                            <td>Springer Nature Applied Sciences</td>
                            <td>2020</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Gain enhanced linear polarization switchable microstrip array antenna</td>
                            <td>MA Hossain, E Nishiyama and M Aikawa</td>
                            <td>IEEE International Symposium on Antennas and Propagation</td>
                            <td>2010</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Single feed circularly polarized crescent-cut and extended corner square microstrip antennas for wireless biotelemetry</td>
                            <td>MH Chowdhury, QD Hossain, MA Hossain, RCC Cheung</td>
                            <td>IJECE</td>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>A Deep Neural Network Model for Predicting Electric Fields Induced by Transcranial Magnetic Stimulation Coil</td>
                            <td>KA Sathi, MA Hossain, MK Hosain, NH Hai, MA Hossain</td>
                            <td>IEEE Access</td>
                            <td>2021</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
      
    </div>
  )
}

export default Mamunsir
