import React from 'react'
import Header from '../Header'
import Breadcrumb from '../Breadcrumb'
import Footer from '../Footer'

function Tayebamaam() {
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
                    <h3 className="text-start">Taieba Taher</h3>
                    <h5 className="fw-lighter mb-4">Assistant Professor</h5>
                    <div className="row">
                        <div className="col-3 pe-0">
                            <p className="fw-medium pt-2">Field of Interest:</p>
                        </div>
                        <div className="col-9 ps-0">
                            <p className="pt-2">
                                Neural Signal Processing, Audio Language Processing, Biomedical Signal and Image Processing, Speech Intelligibility.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 pe-0">
                            <p className="fw-medium pt-2">Qualification:</p>
                        </div>
                        <div className="col-9 ps-0">
                            <p className="pt-2">
                                B.Sc. in Electronics and Telecommunication Engineering
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
                                <i className="fa fa-at"></i> taieba.athay@cuet.ac.bd
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
                            <td>Predicting Speech Intelligibility Based on Neural Cross-Correlation for Normal Hearing People</td>
                            <td>Taieba Taher1, Nursadul Mamun2* Department of Electronics and Telecommunication Engineering, Chittagong University of Engineering and Technology, Chittagong, Bangladesh</td>
                            <td>10th International Conference on Electrical and Computer Engineering</td>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Accident prevention smart zone sensing system</td>
                            <td>Taieba Taher Dept. of Electronics and Communication Engineering, Chittagong University of Engineering and Technology, Chittagong-4349, Bangladesh ; R. U. Ahmed ; M. A. Haider ; Swapnil Das ; M. N. Yasmin ; Nurasdul Mamun</td>
                            <td>2017 IEEE Region 10 Humanitarian Technology Conference (R10-HTC</td>
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

export default Tayebamaam
