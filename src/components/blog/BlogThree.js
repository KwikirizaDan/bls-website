"use client"
import React from 'react'
import Link from 'next/link';
function BlogThree() {
    return (
        <div>
            <div className="rts-blog-area rts-section-gap section-seperator-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                <div className="title-blog-center">
                    <h2 className="title">Blog, News & Updates</h2>
                    <p style={{marginTop: 15, color: '#666'}}>Insights and stories from Binary Labs Solutions.</p>
                </div>
                        </div>
                    </div>
                    <div
                        className="row mt--80 g-0 wow fadeInUp"
                    >
                        <div className="col-lg-6">
                            <div className="single-blog-list-area-lef-timage">
                                <Link href="/blog-grid/building-digital-east-africa" className="thumbnail">
                                    <img src="assets/images/blog/04.webp" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-blog-list-area-right-content">
                                <span className="tag">Digital Transformation</span>
                                <div className="title-area">
                                    <Link href="/blog-grid/building-digital-east-africa">
                                        <h3 className="title">Building Digital in East Africa</h3>
                                        <img src="assets/images/blog/07.webp" alt="" />
                                    </Link>
                                </div>
                                <p className="disc">
                                    How businesses in Uganda and across East Africa are leveraging custom software to overcome infrastructure challenges and reach new markets.
                                </p>
                                <div className="bottom-author-area">
                                    <img src="assets/images/testimonials/01.png" alt="author" />
                                    <div className="author-area-info">
                                        <h6 className="title">Binary Labs Team</h6>
                                        <span>15 Mar 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--0">
                        <div
                            className="col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-offset={120}
                            data-wow-delay=".4s"
                        >
                            <div className="single-blog-style-three">
                                <Link href="/blog-grid/why-custom-software" className="thumbnail">
                                    <img src="assets/images/blog/05.webp" alt="blog" />
                                </Link>
                                <div className="inner">
                                    <span className="tag">Web Development</span>
                                    <div className="title-wrapper">
                                        <Link href="/blog-grid/why-custom-software">
                                            <h3 className="title">Why Custom Software Beats Off-the-Shelf</h3>
                                        </Link>
                                        <img src="assets/images/blog/07.webp" alt="blog" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-offset={120}
                            data-wow-delay=".6s"
                        >
                            <div className="single-blog-style-three">
                                <Link href="/blog-grid/securing-your-data" className="thumbnail">
                                    <img src="assets/images/blog/06.webp" alt="blog" />
                                </Link>
                                <div className="inner">
                                    <span className="tag">Cyber Security</span>
                                    <div className="title-wrapper">
                                        <Link href="/blog-grid/securing-your-data">
                                            <h3 className="title">Securing Your Business Data in 2025</h3>
                                        </Link>
                                        <img src="assets/images/blog/07.webp" alt="blog" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogThree
