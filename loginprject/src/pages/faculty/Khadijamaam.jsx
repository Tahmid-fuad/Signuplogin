import React from 'react'
import Breadcrumb from '../Breadcrumb'
import Footer from '../Footer'
import Header from '../Header'

function Khadijamaam() {
  return (
    <div>
        <Header/>
        <Breadcrumb/>
      <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src="../assets/njr.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-8">
                    <h3 className="text-start">Khadija Akther</h3>
                    <h5 className="fw-lighter mb-4">Assistant Professor</h5>
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
                                <i className="fa fa-phone fa-flip-horizontal"></i> +8801783756981<br />
                                <i className="fa fa-at"></i> khadija.ete@cuet.ac.bd
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
                            <td>Predicting Speech Intelligibility with the Regeneration of Envelope from TFS cues for Hearing Impaired Listeners</td>
                            <td>Khadija Akter, Nursadul Mamun</td>
                            <td>2nd International Conference on Electrical, Computer and Communication Engineering (ECCE) 2019</td>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>A Robust Text Dependent Speaker Identification Using Neural Responses from the Model of the Auditory System</td>
                            <td>Ibrahim Khalil, Nursadul Mamun, Khadija Akter</td>
                            <td>2nd International Conference on Electrical, Computer and Communication Engineering (ECCE) 2019</td>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Measuring Speech Perception with Recovered Envelope Cues using the Peripheral Auditory Model</td>
                            <td>Nursadul Mamun, Khadija Akter, H. Ali, John H. L. Hansen</td>
                            <td>The joint 176th Meeting of the Acoustical Society of America (ASA) and 2018 Acoustics Week Canada of the Canadian Acoustical Association , Victoria, British Columbia, Canada</td>
                            <td>2018</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Prediction of Speech Perception with Recovered Envelope Cues from TFS stimulus for Normal Hearing Listener</td>
                            <td>Khadija Akter, Nursadul Mamun</td>
                            <td>4th International Conference on Electrical Engineering and Information & Communication Technology (iCEEiCT 2018), Dhaka, Bangladesh</td>
                            <td>2018</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Khadijamaam
