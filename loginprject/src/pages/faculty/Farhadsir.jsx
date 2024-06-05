import React from 'react'
import Header from '../Header'
import Breadcrumb from '../Breadcrumb'
import Footer from '../Footer'

function Farhadsir() {
  return (
    <div>
        <Header/>
        <Breadcrumb/>
        <div className="container">
      <div className="row">
        <div className="col-4">
          <img src="../assets/farhadsir.jpg" alt="Farhad Hossain" className="img-fluid" />
        </div>
        <div className="col-8">
          <h3 className="text-start">Farhad Hossain</h3>
          <h5 className="fw-lighter mb-4">Assistant Professor</h5>
          <div className="row">
            <div className="col-3 pe-0">
              <p className="fw-medium pt-2">Field of Interest:</p>
            </div>
            <div className="col-9 ps-0">
              <p className="pt-2">
                Antenna Propagation, Deep Learning and Machine Learning techniques for Computer Vision.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-3 pe-0">
              <p className="fw-medium pt-2">Qualification:</p>
            </div>
            <div className="col-9 ps-0">
              <p className="pt-2">
                M.Sc. in Electronics and Telecommunication Engineering (Pursuing)<br />
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
              <i className="fa fa-phone fa-flip-horizontal"></i> +8801521484469<br />
              <i className="fa fa-at"></i> farhad.hossain@cuet.ac.bd
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h4>Publications</h4>
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
              <td>A Color and Texture Based Approach for the Detection and Classification of Plant Leaf Disease Using KNN Classifier</td>
              <td>Eftekhar Hossain, Md. Farhad Hossain, Md. Anisur Rahman</td>
              <td>2019 International Conference on Electrical, Computer and Communication Engineering (ECCE)</td>
              <td>2019</td>
            </tr>
            <tr>
              <td>2</td>
              <td>An Approach for the Detection and Classification of Tumor Cells from Bone MRI Using Wavelet Transform and KNN Classifier</td>
              <td>Eftekhar Hossain, Md. Farhad Hossain, Md. Anisur Rahman</td>
              <td>2018 International Conference on Innovation in Engineering and Technology (ICIET)</td>
              <td>2018</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Brain Tumor Classification from MRI Images Using Convolutional Neural Network</td>
              <td>Md. Farhad Hossain, Md. Ariful Islam, Syed Naimatullah Hussain, Debprosad Das, Ruhul Amin, Mohammad Saydul Alam</td>
              <td>2021 IEEE International Conference on Artificial Intelligence in Engineering and Technology (IICAIET)</td>
              <td>2021</td>
            </tr>
            <tr>
              <td>4</td>
              <td>International Journal of Electrical and Computer Engineering (IJECE)</td>
              <td>Debprosad Das, Md. Farhad Hossain, Md. Azad Hossain</td>
              <td>Vol. 13, No. 6, December 2023</td>
              <td>2023</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Design and Characterization of a Ring Shaped Circular Polarized Microstrip Patch Antenna for X Band Applications</td>
              <td>Md. Farhad Hossain, Debprosad Das, Md. Azad Hossain</td>
              <td>2022 4th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE)</td>
              <td>2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
        <Footer/>
      
    </div>
  )
}

export default Farhadsir
