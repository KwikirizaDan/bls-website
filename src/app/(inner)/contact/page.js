
"use client"
import BackToTop from "@/components/common/BackToTop";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderTwo from "@/components/header/HeaderTwo";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ReactSVG } from 'react-svg';
export default function Home() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "your_service_id",
                "your_template_id",
                form.current,
                "your_public_key"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send the message. Please try again later.");
                }
            );
    };
    return (
        <div className='#'>
            <HeaderTwo />

            <>
                {/* contact banner areas start */}
                <div className="contact-page-banner jarallax bg_iamge"></div>
                {/* contact banner areas end */}
                {/* contact area form wrapper start */}
                <div className="contact-area-form-wrapper rts-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center-title-bg-white" style={{ marginBottom: 40 }}>
                                    <h2 className="title">Let&apos;s Build Something Together</h2>
                                    <p>Whether you have a fully scoped project or just an idea &mdash; reach out. We&apos;ll help you figure out the right solution.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <form
                                    ref={form}
                                    onSubmit={sendEmail}
                                    className="contact-form"
                                    id="contact-form"
                                >
                                    <div className="single">
                                        <label htmlFor="full_name">Full Name</label>
                                        <input
                                            type="text"
                                            id="full_name"
                                            name="full_name"
                                            placeholder="Your full name"
                                            required
                                        />
                                    </div>
                                    <div className="single">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="you@company.com"
                                            required
                                        />
                                    </div>
                                    <div className="single">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            placeholder="+256 7XX XXX XXX"
                                        />
                                    </div>
                                    <div className="single">
                                        <label htmlFor="message">Project Description</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us about your project..."
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="rts-btn btn-primary">
                                        Let&apos;s Talk
                                        <ReactSVG
                                            src="assets/images/service/icons/13.svg"
                                            alt="arrow"
                                        />
                                    </button>
                                </form>
                            </div>
                            <div className="col-lg-6">
                                <div className="google-map-wrapper">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.751253441326!2d32.582519!3d0.347596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb3e9f3f3f3f%3A0x9f3f3f3f3f3f3f3f!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1!5m2!1sen!2sug"
                                        width={600}
                                        height={500}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts location area start */}
                <div className="rts-location-contact-area pt--70">
                    <div className="container">
                        <div className="row section-seperator-b pb--90 g-5">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="single-location-area-contact">
                                    <div className="icon">
                                        <i className="fa-sharp fa-regular fa-phone" />
                                    </div>
                                    <p>Phone</p>
                                    <span>+256 707 265 240</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="single-location-area-contact">
                                    <div className="icon">
                                        <i className="fa-sharp fa-regular fa-envelope" />
                                    </div>
                                    <p>Email</p>
                                    <span>binarylabs01@gmail.com</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="single-location-area-contact">
                                    <div className="icon">
                                        <i className="fa-sharp fa-regular fa-globe" />
                                    </div>
                                    <p>Website</p>
                                    <span>www.bls-ug.com</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="single-location-area-contact">
                                    <div className="icon">
                                        <i className="fa-sharp fa-regular fa-location-dot" />
                                    </div>
                                    <p>Location</p>
                                    <span>Mpererwe Kawempe, Kampala, Uganda</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rts location area end */}
            </>


            <FooterTwo />
            <BackToTop />
        </div>
    );
}
