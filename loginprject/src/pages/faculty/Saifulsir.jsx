import React from 'react'
import Header from '../Header'
import Breadcrumb from '../Breadcrumb'
import Footer from '../Footer'

function Saifulsir() {
    return (
        <div>
            <Header />
            <Breadcrumb />
            <div className="container">
            <div className="row">
                <div className="col-3">
                    <img src="../assets/saifulsir.jpg" alt="Dr. Md. Saiful Islam" className="img-fluid" />
                </div>
                <div className="col-8">
                    <h3 className="text-start">DR. MD. SAIFUL ISLAM</h3>
                    <h5 className="fw-lighter mb-4">Associate Professor</h5>
                    <div className="row">
                        <div className="col-3 pe-0">
                            <p className="fw-medium pt-2">Field of Interest:</p>
                        </div>
                        <div className="col-9 ps-0">
                            <p className="pt-2">
                                • Signal Processing • Image Processing • Artificial Intelligence • Fault Analysis • Optimization Algorithms
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 pe-0">
                            <p className="fw-medium pt-2">Qualification:</p>
                        </div>
                        <div className="col-9 ps-0">
                            <p className="pt-2">
                                Ph.D., University of Ulsan, Ulsan, South Korea<br />
                                MS, University of Ulsan, Ulsan, South Korea<br />
                                B.Sc., Chittagong University of Engineering and Technology
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 pe-0">
                            <p className="fw-medium pt-2">Contact Info:</p>
                        </div>
                        <div className="col-9 ps-0">
                            <p className="pt-2">
                                <i className="fa fa-phone fa-flip-horizontal"></i> +88018400666254<br />
                                <i className="fa fa-at"></i> saiful05eee@cuet.ac.bd
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
                            <td>An imperceptible & robust digital image watermarking scheme based on DWT, entropy and neural network</td>
                            <td>Md Saiful Islam; Ahsan Ullah, Muhammad; and Prakash Dhar, Jitu</td>
                            <td>International Journal of Modern Science, Vol. 5 : Iss. 1 , Article 6, 2019 (SCOPUS).</td>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Fault detection and severity classification based on adaptive filter and fuzzy logic</td>
                            <td>Md. Saiful Islam and Uipil Chong</td>
                            <td>SN Applied Sciences (2019) 1:1632 | https://doi.org/10.1007/s42452-019-1680-0, 2019.</td>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>A fuzzy logic based contrast and edge sensitive digital image watermarking technique</td>
                            <td>Jitu Prakash Dhar, Md. Saiful Islam, Muhammad Ahsan Ullah</td>
                            <td>SN Applied Sciences (2019) 1:716 | https://doi.org/10.1007/s42452-019-0731-x, 2019</td>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Optimal PID tuning for controlling the temperature of electric furnace by genetic algorithm</td>
                            <td>Md. Manjurul Gani, Md. Saiful Islam, Muhammad Ahsan Ullah</td>
                            <td>SN Applied Sciences (2019) 1:880 | https://doi.org/10.1007/s42452-019-0929-y, 2019.</td>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Design and Implementation of an Automated Monitoring System</td>
                            <td>Md Saiful Islam, Jung-Chul Lee, and Uipil Chong</td>
                            <td>Journal of Supercomputing, Vol. 72, pages: 4247-4261, 2016.</td>
                            <td>2016</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Maximizing incipient fault signatures of rotating machines using WE and CLES</td>
                            <td>Md Saiful Islam, Sangjin Cho, Uipil Chong</td>
                            <td>IETE Technical Review, Volume 34 (3), 2017.</td>
                            <td>2017</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>A New Method for Improving the Detection Capability of RADAR in the Presence of Noise</td>
                            <td>Md Saiful Islam, Jung-Chul Lee, and Uipil Chong</td>
                            <td>Emerging Trends and Advanced Technologies for Computational Intelligence, Studies in Computational Intelligence, Vol. 47, pp. 401-414, 2016.</td>
                            <td>2016</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Data Analysis of Automated Monitoring System based on Target Features</td>
                            <td>Md Saiful Islam, J.C. Lee, J.P. Shin, and U.P. Chong</td>
                            <td>Advances in Computer Science and Ubiquitous Computing, LNEE, Springer, 18 Dec. 2015, vol. 373, pp. 145-152, 2015.</td>
                            <td>2015</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Noise reduction of continuous wave radar and pulse radar using matched filter and wavelets</td>
                            <td>Md Saiful Islam, Uipil Chong</td>
                            <td>EURASIP Journal on Image and Video Processing, Vol. 2014, Issue 1, Article 43, doi:10.1186/1687-5281-2014-43. (SCIE)</td>
                            <td>2014</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Improvement in Moving Target Detection Based on Hough Transform and Wavelet</td>
                            <td>Md Saiful Islam, Uipil Chong</td>
                            <td>IETE Technical Review, vol. 32, no. 1, pp. 46-51, Jan-Feb 2015. (SCIE)</td>
                            <td>2015</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Comparative Analysis of Matched Filter and Wavelets for Radar Noise Reduction</td>
                            <td>Md Saiful Islam, Uipil Chong</td>
                            <td>International Journal of Information and Electronics Engineering, vol. 4, pp. 116-120, March, 2014.</td>
                            <td>2014</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Performance of a Hybrid DCT SVD Visually Imperceptible Digital Watermarking against Signal Processing Attacks</td>
                            <td>Md Saiful Islam, Uipil Chong</td>
                            <td>Computer Science and Its Applications, LNEE, Springer, Vol. 330, pp. 7-14, 2015. (Scopus)</td>
                            <td>2015</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Performance Analysis of Continuous Wave and Pulse Radar Based on Noise Reduction</td>
                            <td>Md Saiful Islam, Uipil Chong</td>
                            <td>Future Information Technology, LNEE, Springer, vol. 309, pp. 823-831, 2014. (Scopus)</td>
                            <td>2014</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>A Digital Image Watermarking Algorithm Based on DWT DCT and SVD</td>
                            <td>Md Saiful Islam, Uipil Chong</td>
                            <td>International Journal of Computer and Communication Engineering, vol. 3, no. 5, Sept. 2014</td>
                            <td>2014</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Matched Filter and Wavelets for Continuous Wave Radar Noise Reduction</td>
                            <td>Md Saiful Islam, Uipil Chong</td>
                            <td>Journal of the Korean Institute of Intelligent Systems, vol. 24, no. 4, pp. 458-463, Aug 2014.</td>
                            <td>2014</td>

                        </tr>
                        <tr>
                        <td>16</td>
                        <td>Detection of Uncooperative Targets Using Cross-Correlation in Oceanic Environment</td>
                        <td>Md Saiful Islam,Uipil Chong</td>
                        <td>International Journal of Digital Content Technology and its Applications, vol. 7, no. 12, pp. 105-112, Aug. 2013. (Scopus)</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>17</td>
                        <td>Optimization and energy management of hybrid renewable power generation using HOMER and FLC</td>
                        <td>1. N. Uddin, S. Abu Nahian, Md. S. Islam, J.S.Joy</td>
                        <td>” International conference on energy and power engineering (ICASERT 2019).</td>
                        <td>2019</td>
                    </tr>
                    <tr>
                        <td>18</td>
                        <td>Optimization and Management Strategy of Grid Connected Hybrid Renewable Energy Sources</td>
                        <td>2. N. Uddin, M. S. Islam</td>
                        <td>” International conference on energy and power engineering (ICASERT 2019).</td>
                        <td>2019</td>
                    </tr>
                    <tr>
                        <td>19</td>
                        <td>Optimal Fuzzy Logic Based Smart Energy Management System For Real Time Application Integrating RES, Grid and Battery</td>
                        <td>N. Uddin, M. S. Islam</td>
                        <td>4th international conference on Electrical Engineering and Information & Communication Technology (iCEEiCT 2018).</td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td>20</td>
                        <td>Optimization of PV Energy Generation based on ANFIS	</td>
                        <td>N. Uddin, M. S. Islam</td>
                        <td>International conference on Innovations in Science, Engineering & Technology (ICISET 2018).</td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td>21</td>
                        <td>Modeling and Designing a Genetically Optimized PID Controller for Separately Excited DC Motor</td>
                        <td>Md. Manjurul Gani, Md. Saiful Islam, Muhammad Ahsan Ullah</td>
                        <td>International Conference on Electrical, Computer and Communication Engineering (ECCE), 7-9 February, 2019.</td>
                        <td>2019</td>
                    </tr>
                    <tr>
                        <td>22</td>
                        <td>Comparison of Square and Hilbert Based Envelope Analysis based on backgroundNoise</td>
                        <td>6. Md Saiful Islam,F. S. Chowdhury, J. C. Lee, J. P. Shin, Uipil Chong</td>
                        <td>International Conference on Recent Innovations in Engineeringand Technology (ICRIET), Zurich, Switzerland, 7-8 August, 2016.</td>
                        <td>2016</td>
                    </tr>
                    <tr>
                        <td>23</td>
                        <td>Bearing fault detection and Identification using Adaptive Filter and Computed Order Tracking	</td>
                        <td>Md Saiful Islam, Sangjin Cho, Uipil Chong</td>
                        <td>5th International Conference on Informatics, Electronics & Vision, Dhaka, Bangladesh, 13-14 May, 2016.</td>
                        <td>2016</td>
                    </tr>
                    <tr>
                        <td>24</td>
                        <td>Development of Moving Target Detection Based on Image Processing Techniques	</td>
                        <td>Md Saiful Islam, Uipil Chong</td>
                        <td>Science and Information Conference 2015, London, UK, 28-30 July 2015.</td>
                        <td>2015</td>
                    </tr>
                    <tr>
                        <td>25</td>
                        <td>Unmanned Monitoring System using Motion Detection and Ultrasonic Signals</td>
                        <td>Md Saiful Islam, Jung-Chul Lee, Uipil Chong</td>
                        <td>Second International Conference on Advances in Information Processing and Communication Technology (IPCT 2015), Rome, Italy, 18-19 April 2015</td>
                        <td>2015</td>
                    </tr>
                    <tr>
                        <td>26</td>
                        <td>A Novel Approach for Multiple Moving Targets Detection and Noise Reduction</td>
                        <td>10. Md Saiful Islam, Jung-Chul Lee, Uipil Chong</td>
                        <td>The 2015 International Conference on Advanced Intelligent Mobile Computing (AIM 2015),Jeju, South Korea, 24-26 Feb. 2015.</td>
                        <td>2015</td>
                    </tr>
                    <tr>
                        <td>27</td>
                        <td>A Digital Image Watermarking Algorithm Based on DWT DCT and SVD</td>
                        <td>Md Saiful Islam, Uipil Chong</td>
                        <td>4th International Conference on Computer Communication and Management (ICCCM 2014), Paris, France, 21-22 May, 2014</td>
                        <td>2014</td>
                    </tr>
                    <tr>
                        <td>28</td>
                        <td>Performance of a Hybrid DCT SVD Visually Imperceptible Digital Watermarking against Signal Processing Attacks</td>
                        <td>Md Saiful Islam, Uipil Chong</td>
                        <td>The 6th FTRA International Conference on Computer Science and its Applications (CSA 2014), Guam, USA, 17-19 December 2014</td>
                        <td>2014</td>
                    </tr>
                    <tr>
                        <td>29</td>
                        <td>Radar Low RCS Signal Detection with Cross Correlation	</td>
                        <td>Md Saiful Islam, Jung-Chul Lee, HyunTaeJeong, Uipil Chong</td>
                        <td>9th International Forum on Strategic Technology (IFOST-2014), Cox's Bazar, Bangladesh, 21-23 Oct 2014</td>
                        <td>2014</td>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td>Comparative Analysis of Matched Filter and Wavelets for Radar Noise Reduction	</td>
                        <td>Md Saiful Islam, Uipil Chong</td>
                        <td>International Conference on Communication and Electronics Information, Melbourne, Australia, 2-3 January 2014</td>
                        <td>2014</td>
                    </tr>
                    <tr>
                        <td>31</td>
                        <td>Target Detection Based Experiments of Marine Radar Reflectors</td>
                        <td>Md Saiful Islam, Hyungseob Han, Sang-Hoon Jang, Taegyu Kim, Uipil Chong</td>
                        <td>KISPS Fall Conference, Korea, July 6-7, 2013</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>32</td>
                        <td>Small Target Detection and Noise Reduction in Marine Radar Systems</td>
                        <td>Md Saiful Islam, Hyungseob Han, Lee, Myung Gook Jung, Uipil Chong</td>
                        <td>IERI Procedia, Elsevier, vol. 4, pp. 168-173, 2013.</td>
                        <td>2013</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

            <Footer />
        </div>

    )
}

export default Saifulsir
