import React from 'react'
import Header from './Header'
import Breadcrumb from './Breadcrumb'
import Footer from './Footer'

function Contact() {
  return (
    <div>
      <Header/>
      <Breadcrumb/>
      <div className="container-fluid bg-light overflow-hidden px-lg-0" style={{ margin: '6rem 0' }}>
      <div className="container contact px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
            <div className="p-lg-5 ps-lg-0">
              <div className="section-title text-start">
                <h1 className="display-5 mb-4">Contact Us</h1>
              </div>
              {/* Uncomment the below paragraph if you want to include it */}
              {/* <p className="mb-4">
                The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes.
                Just copy and paste the files, add a little code and you're done.
                <a href="https://htmlcodex.com/contact-form">Download Now</a>.
              </p> */}
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '100px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 pe-lg-0" style={{ minHeight: '400px' }}>
            <div className="position-relative h-100">
              <iframe
                className="position-absolute w-100 h-100"
                style={{ objectFit: 'cover', border: '0' }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.0775383494147!2d91.97144487480836!3d22.463720336953084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2fcca555dc4d%3A0x9476f7bf1bbeddb3!2sDepartment%20of%20Electronics%20%26%20Telecommunication%20Engineering!5e0!3m2!1sen!2sbd!4v1719126116350!5m2!1sen!2sbd" 
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-hidden="false"
                tabIndex="0"
                title="Google Map"
              ></iframe>              
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Contact
