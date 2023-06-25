import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <>
       
             <br/>
             
        <div className="hero_area my-4">
          
            
      {/* <!-- header section strats --> */}
      {/* <header className="header_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-11 offset-md-1 px-0">
              <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
                <a className="navbar-brand" href="index.html">
                  <span>
                    Adil
                  </span>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div
                    className="d-flex ml-auto flex-column flex-lg-row align-items-center"
                  >
                    <ul className="navbar-nav  ">
                      <li className="nav-item active">
                        <a className="nav-link pl-0" href="index.html"
                          >Home <span className="sr-only">(current)</span></a
                        >
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about.html"> About </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="work.html">MyWork </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="blog.html"> Blog </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header> */}
      {/* <!-- end header section -->

      <!-- slider section --> */}
      <div className="slider_section">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6 offset-lg-1">
                    <div className="detail-box">
                      <div className="heading_box">
                        <h2>i Am Adil My <span><br/>Creative</span></h2>
                        <h1>
                          Portfolio
                        </h1>
                      </div>
                      <div>
                        <a href="">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 px-0">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6 offset-lg-1">
                    <div className="detail-box">
                      <div className="heading_box">
                        <h2>i Am Adil My <span className="navbar-toggler-icon">Creative</span></h2>
                        <h1>
                          Portfolio
                        </h1>
                      </div>
                      <div>
                        <a href="">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 px-3">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6 offset-lg-1">
                    <div className="detail-box">
                      <div className="heading_box">
                        <h2>i Am Adil My <span>Creative</span></h2>
                        <h1>
                          Portfolio
                        </h1>
                      </div>
                      <div>
                        <a href="">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 px-0">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider_btn-container">
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      {/* <!-- end slider section --> */}
    </div>
    
    </>
    
  )
}
