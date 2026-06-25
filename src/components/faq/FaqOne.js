"use client"
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function FaqOne() {
    return (
        <div>
            <>
                <div className="professional-faq-area rts-section-gap position-relative">
                    <div className="shape-top">
                        <img
                            loading="lazy"
                            rel="preload"
                            src="assets/images/video/shape/01.png"
                            alt=""
                            className="wow move-right"
                            data-wow-offset={120}
                        />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center-title-bg-white">
                                    <h2 className="title" style={{ fontSize: 40 }}>
                                        Common questions
                                    </h2>
                                    <p>
                                        Everything you need to know about working with Binary Labs Solutions. Can&apos;t find what you&apos;re looking for? Reach out to us.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--80">
                            <div className="col-lg-12">
                                <div className="accordion-container-one">

                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>What does Binary Labs Solutions do?</Accordion.Header>
                                            <Accordion.Body>
                                                Binary Labs Solutions is an ICT company based in Kampala, Uganda. We specialize in web development, mobile app development, database design, and data analysis - delivering enterprise-grade technology built for the East African market.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>What services do you offer?</Accordion.Header>
                                            <Accordion.Body>
                                                We offer end-to-end digital solutions including web design & development, mobile app development (Android & iOS), database design & development, and data analysis & visualisation. Each service is tailored to your specific business needs.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Do you work with small businesses?</Accordion.Header>
                                            <Accordion.Body>
                                                Absolutely. We work with businesses of all sizes - from startups to established enterprises. Every solution we build is practical, affordable, and engineered to last, regardless of your company size.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>What technologies do you use?</Accordion.Header>
                                            <Accordion.Body>
                                                We use modern frameworks and tools including Next.js, React Native, PostgreSQL, Supabase, and more. We choose the right technology stack for each project based on your requirements, scalability needs, and budget.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>Do you work with clients outside Uganda?</Accordion.Header>
                                            <Accordion.Body>
                                                Yes! While we&apos;re headquartered in Kampala, Uganda, we work with clients across East Africa and beyond. Our solutions are designed with low-bandwidth environments in mind, making them accessible anywhere.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>How do I get started?</Accordion.Header>
                                            <Accordion.Body>
                                                Simply reach out through our contact form, email us at binarylabs01@gmail.com, or call +256 707 265 240. We&apos;ll discuss your project, understand your needs, and provide a tailored proposal.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--80">
                            <div className="col-lg-12 text-center">
                                <p>
                                    Still have a question?{" "}
                                    <a
                                        href="/free-consultation"
                                        style={{ color: "var(--color-primary)" }}
                                    >
                                        Feel free to ask
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default FaqOne
