"use client"
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function ServiceThree() {
  useEffect(() => {
    AOS.init({
      disableMutationObserver: true,
      once: true,
    });
  }, []);
    return (
        <div>

            {/* rts service area start */}
            <div className="rts-service-area rts-section-gap bg-dark-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-main-wrapper-center-three">
                                <span className="pre-title" style={{color: 'var(--color-primary)', fontSize: 16, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase'}}>What We Do</span>
                                <h2 className="title">End-to-End Digital Solutions</h2>
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
                                <h5 className="title">Web Design & Development</h5>
                                <p className="disc">
                                    We craft fast, responsive, and visually compelling websites and web applications - from landing pages to full SaaS platforms. Built on modern frameworks, optimized for performance, and tailored to your brand.
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
                                <h5 className="title">Mobile App Development</h5>
                                <p className="disc">
                                    Native and cross-platform mobile experiences for Android and iOS. Whether it&apos;s a customer-facing app or an internal operations tool, we build apps that work - even on low-bandwidth connections across East Africa.
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
                                <h5 className="title">Database Design & Development</h5>
                                <p className="disc">
                                    Clean, scalable database architecture from the ground up. We design relational schemas, optimize queries, handle migrations, and build the data layer your business can grow on for years.
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
                                <h5 className="title">Data Analysis & Visualisation</h5>
                                <p className="disc">
                                    Turn raw data into decisions. We build interactive dashboards, automate reports, and create visualisations that make complex data immediately understandable to your team and stakeholders.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts service area end */}

        </div>
    )
}

export default ServiceThree
