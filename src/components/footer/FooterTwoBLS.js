"use client"
import React from 'react'
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
function FooterTwo() {
    return (
        <div>
            {/* rts call to action area start */}
            <div className="rts-call-to-action-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-two-wrapper">
                                <div className="inner">
                                    <h2 className="title">Let&apos;s Build Something Together</h2>
                                    <p>
                                        Have a project in mind? Let&apos;s discuss how we can help turn your ideas into reality.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="rts-btn btn-primary wow fadeInUp"
                                        data-wow-delay=".5s"
                                    >
                                        Start Your Project
                                        <ReactSVG
                                            src="assets/images/service/icons/13.svg"
                                            alt="arrow"
                                        />
                                    </Link>
                                </div>
                                <div className="shape-area">
                                    <img
                                        src="assets/images/cta/05.png"
                                        alt="cta"
                                        className="one wow toBottomLeft"
                                    />
                                    <img
                                        src="assets/images/cta/06.png"
                                        alt="cta"
                                        className="two wow toTopRight"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts call to action area end */}
            {/* rts footer area start */}
            <div className="rts-footer-area rts-section-gapTop pb--80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="logo-area">
                                <Link href="#" className="logo">
                                    <img src="assets/images/logo/logo.png" style={{ height: 40 }} alt="Binary Labs Solutions" />
                                </Link>
                                <p className="disc" style={{marginTop: 20}}>
                                    Engineering the digital future of East Africa.
                                </p>
                                <div className="contact-details" style={{marginTop: 20}}>
                                    <p style={{marginBottom: 8}}><i className="fa-solid fa-envelope" style={{marginRight: 10, color: 'var(--color-primary)'}}></i> binarylabs01@gmail.com</p>
                                    <p style={{marginBottom: 8}}><i className="fa-solid fa-phone" style={{marginRight: 10, color: 'var(--color-primary)'}}></i> +256 707 265 240</p>
                                    <p><i className="fa-solid fa-location-dot" style={{marginRight: 10, color: 'var(--color-primary)'}}></i> Mpererwe Kawempe, Kampala, Uganda</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row g-5">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Quick Links</p>
                                        <ul>
                                            <li>
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link href="/service">Services</Link>
                                            </li>
                                            <li>
                                                <Link href="/about">About</Link>
                                            </li>
                                            <li>
                                                <Link href="/case-studies">Case Studies</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Services</p>
                                        <ul>
                                            <li>
                                                <Link href="/service">Web Development</Link>
                                            </li>
                                            <li>
                                                <Link href="/service">Mobile Apps</Link>
                                            </li>
                                            <li>
                                                <Link href="/service">Database Design</Link>
                                            </li>
                                            <li>
                                                <Link href="/service">Data Analysis</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Legal</p>
                                        <ul>
                                            <li>
                                                <Link href="/privacy-policy">Privacy Policy</Link>
                                            </li>
                                            <li>
                                                <Link href="/terms-of-use">Terms of Service</Link>
                                            </li>
                                            <li>
                                                <Link href="/faq">FAQ</Link>
                                            </li>
                                            <li>
                                                <Link href="/free-consultation">Free Consultation</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts footer area end */}
            {/* rts copyright area start */}
            <div className="rts-copyright-area-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-wrapper">
                                <p>© 2025 Binary Labs Solutions Ltd. All rights reserved.</p>
                                <div className="social-copyright-area">
                                    <ul>
                                        <li aria-label="Visit our LinkedIn page">
                                            <Link href="https://linkedin.com/company/binarylabssolutions" target="_blank">
                                                <i className="fa-brands fa-linkedin-in" />
                                            </Link>
                                        </li>
                                        <li aria-label="Visit our GitHub page">
                                            <Link href="https://github.com/binarylabssolutions" target="_blank">
                                                <i className="fa-brands fa-github" />
                                            </Link>
                                        </li>
                                        <li aria-label="Visit our Twitter page">
                                            <Link href="https://twitter.com/binarylabsug" target="_blank">
                                                <i className="fa-brands fa-x-twitter" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts copyright area end */}

        </div>
    )
}

export default FooterTwo
