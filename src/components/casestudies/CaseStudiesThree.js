"use client"
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function CaseStudiesThree() {
  useEffect(() => {
    AOS.init({
      disableMutationObserver: true,
      once: true,
    });
  }, []);
    return (
        <div>

            {/* about area start */}
            <div className="rts-about-area rts-section-gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                            <div className="about-content">
                                <span className="pre-title" style={{color: 'var(--color-primary)', fontSize: 16, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase'}}>Who We Are</span>
                                <h2 className="title" style={{fontSize: 40, fontWeight: 700, lineHeight: 1.2, marginTop: 15}}>Built in Kampala.<br />Built for Africa.</h2>
                                <p style={{marginTop: 20, fontSize: 16, lineHeight: 1.8, color: '#555'}}>
                                    Binary Labs Solutions is an ICT company headquartered in Mpererwe Kawempe, Kampala, Uganda. We exist to close the gap between world-class technology and the East African businesses that deserve it.
                                </p>
                                <p style={{marginTop: 15, fontSize: 16, lineHeight: 1.8, color: '#555'}}>
                                    We are developers, designers, and analysts who understand the local market - the infrastructure, the constraints, and the ambitions. Every solution we build is practical, affordable, and engineered to last.
                                </p>
                                <a href="/about" className="rts-btn btn-primary" style={{marginTop: 30}}>
                                    Learn More About Us
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <img src="assets/images/banner/03.webp" alt="About Binary Labs Solutions" style={{width: '100%', borderRadius: 10}} />
                        </div>
                    </div>
                </div>
            </div>
            {/* about area end */}

            {/* why choose us area start */}
            <div className="rts-service-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-main-wrapper-center-three">
                                <h2 className="title">Why Choose Us?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 mt--40">
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                            <div className="single-service-three">
                                <h5 className="title">01 - Proactive Innovation</h5>
                                <p className="disc">
                                    We build ahead of the curve - anticipating what your business will need before you have to ask for it.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <div className="single-service-three bg-light-3">
                                <h5 className="title">02 - Tailored to You</h5>
                                <p className="disc">
                                    No cookie-cutter templates. Every solution is designed around your goals, your industry, and your growth roadmap.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                            <div className="single-service-three">
                                <h5 className="title">03 - Reliable Support</h5>
                                <p className="disc">
                                    From kickoff to deployment and beyond, we&apos;re with you at every stage of the journey.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
                            <div className="single-service-three bg-light-3">
                                <h5 className="title">04 - Expert-Led Execution</h5>
                                <p className="disc">
                                    Seasoned developers, designers, and analysts who take quality personally and deliver with precision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* why choose us area end */}

            {/* mission area start */}
            <div className="rts-section-gapTop bg-dark-1" style={{padding: '80px 0'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-main-wrapper-center-three">
                                <span className="pre-title" style={{color: 'var(--color-primary)', fontSize: 16, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase'}}>Why We Exist</span>
                                <h2 className="title" style={{color: '#fff'}}>Our Mission</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 mt--60">
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                            <div className="single-service-three" style={{background: 'rgba(255,255,255,0.05)', padding: 30, borderRadius: 10, minHeight: 200}}>
                                <h5 className="title" style={{color: '#fff'}}>Bridge Ideas and Execution</h5>
                                <p className="disc" style={{color: 'rgba(255,255,255,0.7)'}}>
                                    We exist to turn great ideas into powerful digital realities through clean code, smart design, and seamless user experiences.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <div className="single-service-three" style={{background: 'rgba(255,255,255,0.05)', padding: 30, borderRadius: 10, minHeight: 200}}>
                                <h5 className="title" style={{color: '#fff'}}>Champion Digital Inclusion</h5>
                                <p className="disc" style={{color: 'rgba(255,255,255,0.7)'}}>
                                    We&apos;re committed to building solutions that are accessible, affordable, and impactful - empowering businesses of all sizes to thrive in the digital age across East Africa.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                            <div className="single-service-three" style={{background: 'rgba(255,255,255,0.05)', padding: 30, borderRadius: 10, minHeight: 200}}>
                                <h5 className="title" style={{color: '#fff'}}>Build Trust Through Results</h5>
                                <p className="disc" style={{color: 'rgba(255,255,255,0.7)'}}>
                                    Our mission is to grow long-term relationships by delivering measurable value with honesty, clarity, and accountability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mission area end */}

        </div>
    )
}

export default CaseStudiesThree
