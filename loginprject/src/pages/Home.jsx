import Footer from "./Footer"
import Header from "./Header"

function Home() {
  return (
    <div>
      <Header></Header>

      {/* Header start */}
      <div className="owl-carousel-item position-relative">
        <img className="img-fluid" src="/assets/bg.jpg" alt="" />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style={{ background: "rgba(53, 53, 53, .7)" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8 text-center">
                <h3 className="text-white text-uppercase mb-3 animated slideInDown">Welcome To</h3>
                <h1 className="display-3 text-white animated slideInDown mb-4">Depertment of Electronics and Telecommunication
                  Engineering</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About start */}
      <section id="About" className="about_section m-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    About Us
                  </h2>
                </div>
                <p>
                  Today, we are at the peak of the information technology age, and communication engineering plays a vital
                  role in today's rapidly changing world. In this prospect, CUET has launched Department of Electronics and
                  Telecommunication Engineering (ETE) in the year 2012. The vision of this department is to make great
                  contribution by producing efficient and resourceful engineers with research and development capabilities.
                </p>
                <a href="about.html">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="/assets/picture-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Notice Start */}
      <div className="section-title text-center">
        <h1 className="display-5 mt-5">
          Notice Board
        </h1>
      </div>
      <div className="d-flex" id="Notice">
        <div className="container-xxl py-2 my-4">
          <div className="col-4 float-start">
            <div className="ms-xxl-1 me-xxl-1 bg-white p-3 mb-xxl-2" style={{ height: "100px" }}>
              <div className="heading-sect">
                <h3 className="m-0 p-0 fs-6 fw-semibold">Latest New</h3>
              </div>
              <marquee direction="up" className="p-3">
                <ul className="latest-news-ul">
                  <li> 20 batch: CT - 01 of ETE305 in next thursday </li>
                  <li> 19 batch: Last moment direction on attachment </li>
                  <li> 04 March 2024 Incubation Center </li>
                  <li> 31 March 2024 Instituitional Distinctiveness</li>
                  <li> Notice on EID-Ul-Fitr vacation</li>
                </ul>
              </marquee>
            </div>
          </div>

          <div className="col-4 float-start">
            <div className="ms-xxl-1 me-xxl-1 bg-white p-3 mb-xxl-2" style={{ height: "350px" }}>
              <div className="heading-sect">
                <h3 className="m-0 p-0 fs-6 fw-semibold">Upcoming Events</h3>
              </div>
              <ul className="upcoming-event-list">
                <li><span className="event-date">3 <br />
                  Mar</span><span> Admission Test</span> </li>
                <li><span className="event-date">7 <br />
                  Mar</span><span> Bangabandhu's speech</span> </li>
                <li><span className="event-date">13 <br />
                  Mar</span><span> Important birthday</span> </li>
                <li><span className="event-date">17 <br />
                  Mar</span><span> Bangabandhu's birthday</span> </li>
              </ul>
            </div>
          </div>

          <div className="col-4 float-start">
            <div className="ms-xxl-1 me-xxl-1 bg-white p-3 mb-xxl-2" style={{ height: "350px" }}>
              <div className="heading-sect">
                <h3 className="m-0 p-0 fs-6 fw-semibold">Notice Board</h3>
              </div>
              <ul className="notice-board-list">
                <li>Undergraduate admission test</li>
                <li>Masters admission notice</li>
                <li>PhD Registration Form for Selected Candidates </li>
                <li>Notice regarding industrial tour of 20-batch</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Notice End */}



      {/* Faculty Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="display-5 mb-5">
              <a href="Faculties.html">Our Faculties</a>
            </h1>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 wow fadeInUp">
              <div className="team-item">
                <div className="overflow-hidden position-relative">
                  <img className="img-fluid" src="/assets/Azad sir.jpeg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div className="p-4 text-center border border-5 border-light border-top-0">
                  <h4 className="mb-3">Dr. Md. Azad Hossain</h4>
                  <p>Head of the Depertment</p>
                  <a className="fw-medium" href="Faculty/Azadsir.html">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp">
              <div className="team-item">
                <div className="overflow-hidden position-relative">
                  <img className="img-fluid" src="/assets/Jahedsir.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div className="p-4 text-center border border-5 border-light border-top-0">
                  <h4 className="mb-3">Dr. Md. Jahedul Islam</h4>
                  <p>Proffesor</p>
                  <a className="fw-medium" href="Faculty/Jahidsir.html">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp">
              <div className="team-item">
                <div className="overflow-hidden position-relative">
                  <img className="img-fluid" src="/assets/saifulsir.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div className="p-4 text-center border border-5 border-light border-top-0">
                  <h4 className="mb-3">Dr. Md. Saiful Islam</h4>
                  <p>Assistant Proffesor</p>
                  <a className="fw-medium" href="Faculty/Saifulsir.html">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Faculty End */}

      {/* Feature Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn">
              <div className="d-flex align-items-center justify-content-evenly mb-2">
                <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: "60px", height: "60px" }}>
                  <i className="fa fa-chalkboard fa-2x text-primary"></i>
                </div>
                <h1 className="display-2 text-primary mb-0">20</h1>
              </div>
              <h5 className="text-center">Total Teachers</h5>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn">
              <div className="d-flex align-items-center justify-content-evenly mb-2">
                <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: "60px", height: "60px" }}>
                  <i className="fa fa-users fa-2x text-primary"></i>
                </div>
                <h1 className="display-2 text-primary mb-0">300</h1>
              </div>
              <h5 className="text-center">Total Students</h5>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn">
              <div className="d-flex align-items-center justify-content-evenly mb-2">
                <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: "60px", height: "60px" }}>
                  <i className="fa fa-microchip fa-2x text-primary"></i>
                </div>
                <h1 className="display-2 text-primary mb-0">04</h1>
              </div>
              <h5 className="text-center">Total Labs</h5>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn">
              <div className="d-flex align-items-center justify-content-evenly mb-2">
                <div className="d-flex align-items-center justify-content-center bg-light" style={{ width: "60px", height: "60px" }}>
                  <i className="fa fa-laptop fa-2x text-primary"></i>
                </div>
                <h1 className="display-2 text-primary mb-0">60</h1>
              </div>
              <h5 className="text-center">Total Computer</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}

      {/* Carousel Start */}
      <div className="section-title text-center">
        <h1 className="display-5 mt-5 mb-5">
          <a href="photo.html">Photo Gallery</a>
        </h1>
      </div>
      <div className="container-fluid p-0 pb-5">
        <div className="owl-carousel header-carousel position-relative">
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src="/assets/bg16-9.jpg" alt="" /> {/*Img must be 16:9*/}
          </div>
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src="/assets/bg16-9.jpg" alt="" />
          </div>
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src="/assets/bg16-9.jpg" alt="" />
          </div>
        </div>
      </div>
      {/*  Carousel End  */}

      <Footer/>


      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i className="bi bi-arrow-up"></i></a>
      {/* JavaScript Libraries */}
      {/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="lib/wow/wow.min.js"></script>
  <script src="lib/easing/easing.min.js"></script>
  <script src="lib/waypoints/waypoints.min.js"></script>
  <script src="lib/counterup/counterup.min.js"></script>
  <script src="lib/owlcarousel/owl.carousel.min.js"></script>
  <script src="lib/isotope/isotope.pkgd.min.js"></script>
  <script src="lib/lightbox/js/lightbox.min.js"></script>

  {/* Template Javascript */}
      <script src="js/main.js"></script>
    </div >
  )
}

export default Home
