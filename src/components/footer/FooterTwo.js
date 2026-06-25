"use client"
import React from 'react'
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
function FooterTwo() {
    return (
        <div>
            <div className="rts-call-to-action-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-two-wrapper">
                                <div className="inner">
                                    <h2 className="title">Let&apos;s schedule a Free consultation</h2>
                                    <p>
                                        Tell us about your project and we&apos;ll help you build the right solution - no obligation, just valuable guidance.
                                    </p>
                                    <Link
                                        href="/free-consultation"
                                        className="rts-btn btn-primary wow fadeInUp"
                                        data-wow-delay=".5s"
                                    >
                                        Schedule Now
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
            <div className="rts-footer-area rts-section-gapTop pb--80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="logo-area">
                                <Link href="/" className="logo">
                                    <img src="assets/images/logo/logo.png" style={{ height: 40 }} alt="Binary Labs Solutions" />
                                </Link>
                                <p className="disc">
                                    Binary Labs Solutions is an ICT company headquartered in Kampala, Uganda. We deliver enterprise-grade web, mobile, database, and data analysis solutions built for the East African market.
                                </p>
                                <div className="contact-info" style={{marginTop: 20}}>
                                    <p style={{margin: 0, fontSize: 14, color: 'rgba(10, 9, 9, 0.7)'}}>
                                        <i className="fa-solid fa-envelope" style={{marginRight: 8, color: 'var(--color-primary)'}}></i>
                                        binarylabs01@gmail.com
                                    </p>
                                    <p style={{margin: '8px 0 0 0', fontSize: 14, color: 'rgba(10, 9, 9, 0.7)'}}>
                                        <i className="fa-solid fa-phone" style={{marginRight: 8, color: 'var(--color-primary)'}}></i>
                                        +256 707 265 240
                                    </p>
                                    <p style={{margin: '8px 0 0 0', fontSize: 14, color: 'rgba(10, 9, 9, 0.7)'}}>
                                        <i className="fa-solid fa-location-dot" style={{marginRight: 8, color: 'var(--color-primary)'}}></i>
                                        Mpererwe, Kawempe, Kampala, Uganda
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row g-5">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Services</p>
                                        <ul>
                                            <li><Link href="/service">Web Design & Development</Link></li>
                                            <li><Link href="/service">Mobile App Development</Link></li>
                                            <li><Link href="/service">Database Design & Development</Link></li>
                                            <li><Link href="/service">Data Analysis & Visualisation</Link></li>
                                            <li><Link href="/service">Cyber Security</Link></li>
                                            <li><Link href="/service">IT Training</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Quick Links</p>
                                        <ul>
                                            <li><Link href="/about">About Us</Link></li>
                                            <li><Link href="/team">Our Team</Link></li>
                                            <li><Link href="/case-studies">Case Studies</Link></li>
                                            <li><Link href="/blog-grid">Blog</Link></li>
                                            <li><Link href="/faq">FAQ</Link></li>
                                            <li><Link href="/contact">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Legal</p>
                                        <ul>
                                            <li><Link href="/terms-of-use">Terms of Use</Link></li>
                                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                            <li><Link href="/cookies-policy">Cookies Policy</Link></li>
                                            <li><Link href="/free-consultation">Free Consultation</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rts-copyright-area-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-wrapper">
                                <p>&copy; {new Date().getFullYear()} Binary Labs Solutions. All rights reserved.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTwo
