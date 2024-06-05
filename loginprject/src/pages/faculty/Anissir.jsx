import React from 'react'
import Header from '../Header'
import Breadcrumb from '../Breadcrumb'
import Footer from '../Footer'

function Anissir() {
  return (
    <div>
      <Header/>
      <Breadcrumb/>
      <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src="../assets/ful.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-8">
                    <h3 className="text-start">Mohammed Anisur Rahman</h3>
                    <h5 className="fw-lighter mb-4">Assistant Professor</h5>
                    <div className="row">
                        <div className="col-3 pe-0">
                            <p className="fw-medium pt-2">Field of Interest:</p>
                        </div>
                        <div className="col-9 ps-0">
                            <p className="pt-2">
                                Biomedical Engineering , Antenna and Propagation , VLSI and Embedded System , Image Processing
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 pe-0">
                            <p className="fw-medium pt-2">Qualification:</p>
                        </div>
                        <div className="col-9 ps-0">
                            <p className="pt-2">
                                M.Sc in EEE, CUET<br />
                                B.Sc in EEE, CUET
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 pe-0">
                            <p className="fw-medium pt-2">Contact Info:</p>
                        </div>
                        <div className="col-9 ps-0">
                            <p className="pt-2">
                                <i className="fa fa-phone fa-flip-horizontal"></i>+8801878790960,+8801618790960<br />
                                <i className="fa fa-at"></i> anisur.rahaman@cuet.ac.bd, anis00024@yahoo.com.
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
                            <td>A Low Profile UWB Antenna for Biomedical Application</td>
                            <td>Jawad Mahmud Chowdhury and Mohammad Anisur Rahaman</td>
                            <td>5th International Conference on Advances in Electrical Engineering (ICAEE),Independent University, Bangladesh</td>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>A Color and Texture Based Approach for the Detection and Classification Plant Leaf Disease Using KNN Classifier</td>
                            <td>Eftekhar Hossain, Md. Farhad Hossain and Mohammad AnisurRahaman</td>
                            <td>2ndInternational Conference on Electrical, Computer and Communication Engineering (ECCE), CUET,Bangladesh</td>
                            <td>2019</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Design and Overall Performance Analysis of an Open End Slot Feed Miniature Microstrip Antenna for on-body Biomedical Applications</td>
                        <td>Mohammad Anisur Rahaman and Quazi Delwar Hossain</td>
                        <td>International Conference on Robotics, Electrical and Signal Processing Techniques (ICREST2019),Dhaka,Bangladesh</td>
                        <td>2019</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Design of a Miniature Microstrip Wide Band Antenna for On-body Biomedical Telemetry</td>
                        <td>Mohammad Anisur Rahaman and Quazi Delwar Hossain</td>
                        <td>International Conference on Smart Systems and Inventive Technology (ICSSIT 2018),Tamilnadu,India</td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Design of Truncated Circular Microstrip Patch with Slot for GPS Application</td>
                        <td>Rebeka Sultana , Akib Jayed Islam and Mohammad Anisur Rahaman</td>
                        <td>International Conference on Advancement in Electrical and Electronic Engineering (ICAEEE 2018),Dhaka,Bangladesh</td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Performance Studies of UWB Microstrip Antenna for Multipurpose Biotelemetry Applications</td>
                        <td>Swarup Chakraborty, Akib Jayed Islam, Md Mehedi Farhad, Md. Mahmudul Hasan, Md. Siddat Bin Nesar and Mohammad Anisur Rahaman</td>
                        <td>2nd Int. Conf. on Innovations in Science, Engineering and Technology (ICISET 2018),Chittagong,Bangladesh)</td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Bone Cancer Detection & Classification Using Fuzzy Clustering & Neuro Fuzzy Classifier</td>
                        <td>Efftekhar Hossain and Mohammad Anisur Rahaman</td>
                        <td>4th International Conference on Electrical Engineering and Information &Communication Technology (iCEEiCT 2018),Dhaka,Bangladesh)</td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Comparative Evaluation of Segmentation Algorithms for Tumor Cells Detection from Bone MR Scan Imagery</td>
                        <td>Efftekhar Hossain and Mohammad Anisur Rahaman</td>
                        <td>2nd Int. Conf. on Innovations in Science, Engineering and Technology (ICISET 2018),Chittagong,Bangladesh)</td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Detection & Classification of Bone Cancer Using Connected Component Analysis & Neural Network	</td>
                        <td>Efftekhar Hossain and Mohammad Anisur Rahaman</td>
                        <td>2018 International Conference on Advancement in Electrical and Electronic Engineering (ICAEEE 2018),Dhaka,Bangladesh</td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>An Approach for the Detection & Classification of Tumor Cells from Bone MRI Using Wavelet Transform & KNN Classifier</td>
                        <td>Efftekhar Hossain and Mohammad Anisur Rahaman</td>
                        <td>International Conference on Innovation in Engineering and Technology (ICIET), DU,Bangladesh</td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Automatic Sickle cell Anemia Detection Using Image Processing Technique</td>
                        <td>Tajkia Saima Chy and Mohammad Anisur Rahaman</td>
                        <td>2018 International Conference on Advancement in Electrical and Electronic Engineering (ICAEEE 2018),Dhaka,Bangladesh</td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>A Comparative Analysis By KNN, SVM & ELMClassification to detect Sickle Cell Anemia</td>
                        <td>Tajkia Saima Chy and Mohammad Anisur Rahaman</td>
                        <td>International Conference on Robotics, Electrical and Signal Processing Techniques (ICREST),2019,Dhaka,Bangladesh</td>
                        <td>2019</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>A Low Cost and Ionizing Radiation-free Method based on Pulse-Echo Ultrasonic for the Diagnosis of Osteoporosis</td>
                        <td>Sadia Mahmud and Mohammad Anisur Rahaman</td>
                        <td>2nd Int. Conf. on Innovations in Science, Engineering and Technology (ICISET 2018),Chittagong,Bangladesh</td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>Smart fan for human tracking</td>
                        <td>Tajrin Ishrat,Mohammad Anisur Rahaman and Arif Ahamed</td>
                        <td>9th International Forum on strategic Technology (IFOST 2014),CoxsBazar,Bangladesh</td>
                        <td>2014</td>
                    </tr>
                        {/* Add other rows similarly */}
                    </tbody>
                </table>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Anissir
