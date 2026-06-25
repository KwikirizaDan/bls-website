"use client"
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function FeaturesGrid() {
  useEffect(() => {
    AOS.init({
      disableMutationObserver: true,
      once: true,
    });
  }, []);
    return (
        <div>
            <div className="rts-service-area rts-section-gap bg-dark-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-main-wrapper-center-three">
                                <span className="pre-title" style={{color: 'var(--color-primary)', fontSize: 16, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase'}}>Why Choose Us</span>
                                <h2 className="title">Built for East Africa. Built to Last.</h2>
                                <p style={{marginTop: 15, fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', maxWidth: 700, margin: '0 auto'}}>
                                    We understand the local market - the infrastructure, the constraints, and the ambitions. Every solution we build is practical, affordable, and engineered to last.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 mt--80">
                        <div
                            className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
                        >
                            <div className="single-service-three">
                                <div className="icon">
                                    <img
                                        src="assets/images/service/icons/14.svg"
                                        alt="service-icon"
                                    />
                                </div>
                                <h5 className="title">Proactive Innovation</h5>
                                <p className="disc">
                                    We build ahead of the curve - anticipating what your business will need before you have to ask for it.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"
                        >
                            <div className="single-service-three bg-light-3">
                                <div className="icon">
                                    <img
                                        src="assets/images/service/icons/15.svg"
                                        alt="service-icon"
                                    />
                                </div>
                                <h5 className="title">Tailored to You</h5>
                                <p className="disc">
                                    No cookie-cutter templates. Every solution is designed around your goals, your industry, and your growth roadmap.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000"
                        >
                            <div className="single-service-three">
                                <div className="icon">
                                    <img
                                        src="assets/images/service/icons/16.svg"
                                        alt="service-icon"
                                    />
                                </div>
                                <h5 className="title">Reliable Support</h5>
                                <p className="disc">
                                    From kickoff to deployment and beyond, we&apos;re with you at every stage of the journey.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000"
                        >
                            <div className="single-service-three bg-light-3">
                                <div className="icon">
                                    <img
                                        src="assets/images/service/icons/17.svg"
                                        alt="service-icon"
                                    />
                                </div>
                                <h5 className="title">Expert-Led Execution</h5>
                                <p className="disc">
                                    Seasoned developers, designers, and analysts who take quality personally and deliver with precision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesGrid
