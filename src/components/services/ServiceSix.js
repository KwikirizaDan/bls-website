"use client"
import React from 'react';

const services = [
  {
    title: 'Web Design & Development',
    description: 'We craft fast, responsive, and visually compelling websites and web applications - from landing pages to full SaaS platforms. Built on modern frameworks, optimized for performance, and tailored to your brand.',
    image: 'assets/images/case-studies/05.webp',
    delay: '100',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences for Android and iOS. Whether it\'s a customer-facing app or an internal operations tool, we build apps that work - even on low-bandwidth connections across East Africa.',
    image: 'assets/images/case-studies/06.webp',
    delay: '300',
  },
  {
    title: 'Database Design & Development',
    description: 'Clean, scalable database architecture from the ground up. We design relational schemas, optimize queries, handle migrations, and build the data layer your business can grow on for years.',
    image: 'assets/images/case-studies/07.webp',
    delay: '500',
  },
  {
    title: 'Data Analysis & Visualisation',
    description: 'Turn raw data into decisions. We build interactive dashboards, automate reports, and create visualisations that make complex data immediately understandable to your team and stakeholders.',
    image: 'assets/images/case-studies/08.webp',
    delay: '100',
  },
  {
    title: 'Cyber Security',
    description: 'Protect your digital infrastructure with robust security assessments, threat monitoring, and incident response. We help safeguard your systems, data, and operations against evolving cyber threats.',
    image: 'assets/images/case-studies/09.webp',
    delay: '300',
  },
  {
    title: 'IT Training',
    description: 'Empower your team with practical, hands-on training in modern technologies - from web development and database management to data analysis and cybersecurity best practices.',
    image: 'assets/images/case-studies/10.webp',
    delay: '500',
  },
]

function ServiceSix() {
    return (
        <>
            <div className="gap-service-area rts-section-gap bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-center-inner-with-sub">
                                <span>Our services</span>
                                <h2 className="title">Cutting-edge IT Solutions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--50">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="col-lg-4 col-md-6 col-sm-12"
                            >
                                <div className="single-service-area-4 in-about-page">
                                    <div className="icon">
                                        <img src={service.image} alt={service.title} />
                                    </div>
                                    <div className="title-area">
                                        <a href="/service">
                                            <h3 className="title animated fadeIn">{service.title}</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSix
