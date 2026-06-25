"use client"
import React from 'react'
import { ReactSVG } from 'react-svg';
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
function BannerThree() {
  useEffect(() => {
    AOS.init({
      disableMutationObserver: true,
      once: true,
    });
  }, []);
  return (
    <div>
      {/* banner area start */}
      <div className="rts-banner-three-area rts-section-gap bg-banner-three">
        <div className="container pb--180 pb_sm--0">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-three-wrapper">
                <h1 className="title" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">We Build Digital Infrastructure for East Africa</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inner-content-wrapper-three">
                <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                  From custom web platforms to mobile apps and data systems - Binary Labs Solutions delivers enterprise-grade technology built for the realities of doing business in Uganda and beyond.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <a
                    href="/free-consultation"
                    className="rts-btn btn-primary" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"
                  >
                    Start Your Project
                    <ReactSVG
                      src="assets/images/service/icons/13.svg"
                      alt="arrow"
                    />
                  </a>
                  <a
                    href="/case-studies"
                    className="rts-btn btn-primary" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"
                    style={{ background: 'transparent', color: '#fff', border: '1px solid #fff' }}
                  >
                    View Our Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="round-shape">
          <img src="assets/images/banner/shape/07.png" alt="banner" />
        </div>
        <div className="right-shape wow move-left">
          <img src="assets/images/banner/04.png" alt="banner" />
        </div>
        <div className="top-shape wow move-right">
          <img src="assets/images/banner/05.png" alt="banner" />
        </div>
      </div>
      {/* banner area end */}
      <div
        className="alrge-video-area rts-section-gapBottom mt-dec-banner-3"
        style={{ zIndex: 2 }}
      >
        <div className="container-large">
          <div className="row">
            <div className="col-lg-12 mt--70">
              <div className="image--large-video jarallax v3">
                <img
                  className="jarallax-img"
                  src="assets/images/banner/hero-bg.jpeg"
                  alt="large"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerThree
