"use client"
import React from 'react'
import { ReactSVG } from 'react-svg';
import { productionStudies, developmentStudies } from '@/data/caseStudies';

function CaseCard({ study, index }) {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay={index % 2 === 0 ? '100' : '300'} data-aos-duration="1000">
      <div className="single-case-studies" style={{ height: '100%' }}>
        <a href="/case-studies" className="thumbnail">
          <img src={study.image} alt={study.title} style={{ width: '100%', display: 'block' }} />
        </a>
        <div style={{ padding: '20px 30px 0 30px' }}>
          <span className={`status-badge ${study.statusClass}`} style={{
            display: 'inline-block',
            padding: '4px 14px',
            borderRadius: 20,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 1,
            textTransform: 'uppercase',
            background: study.statusClass === 'production' ? 'rgba(0, 200, 83, 0.15)' : 'rgba(255, 193, 7, 0.15)',
            color: study.statusClass === 'production' ? '#00c853' : '#ffc107',
            marginBottom: 15,
          }}>
            {study.status}
          </span>
        </div>
        <div className="inner-content" style={{ padding: '0 30px 30px 30px' }}>
          <h3 className="title" style={{ fontSize: 24, marginBottom: 4 }}>{study.title}</h3>
          <p style={{ fontSize: 14, color: 'var(--color-primary)', fontWeight: 500, marginBottom: 15 }}>{study.tagline}</p>

          <div style={{ marginBottom: 15 }}>
            <h5 style={{ fontSize: 14, fontWeight: 600, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1, color: '#999' }}>What We Built</h5>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#666' }}>{study.solution}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function CaseStudiesFour() {
    return (
        <div>
            <div className="case-studies-area rts-section-gap position-relative">
                <div className="shape-left-top">
                    <img
                        className="wow move-right"
                        src="assets/images/video/shape/03.png"
                        alt="shape"
                    />
                </div>
                <div className="shape-bottom">
                    <img
                        src="assets/images/video/shape/02.png"
                        alt=""
                        className="wow move-left"
                        data-wow-offset={120}
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center-title-bg-white">
                                <h2 className="title">Case Studies</h2>
                                <p style={{ maxWidth: 700, margin: '0 auto' }}>
                                    We build Africa-ready software for Uganda and East Africa. These case studies document the problems we identified, the solutions we designed, and the outcomes delivered across our products.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt--60">
                        <div className="col-lg-12">
                            <h3 className="section-subtitle" style={{ fontSize: 22, fontWeight: 700, marginBottom: 5 }}>In Production</h3>
                            <p style={{ fontSize: 14, color: '#888', marginBottom: 30 }}>Live systems delivering value today</p>
                        </div>
                    </div>
                    <div className="row g-5">
                        {productionStudies.slice(0, 2).map((study, index) => (
                            <CaseCard key={study.title} study={study} index={index} />
                        ))}
                    </div>

                    <div className="row mt--80">
                        <div className="col-lg-12">
                            <h3 className="section-subtitle" style={{ fontSize: 22, fontWeight: 700, marginBottom: 5 }}>In Development</h3>
                            <p style={{ fontSize: 14, color: '#888', marginBottom: 30 }}>Products actively being built and tested</p>
                        </div>
                    </div>
                    <div className="row g-5">
                        {developmentStudies.slice(0, 2).map((study, index) => (
                            <CaseCard key={study.title} study={study} index={index + 2} />
                        ))}
                    </div>

                    <div className="row mt--60">
                        <div className="col-lg-12">
                            <a
                                href="/case-studies"
                                className="rts-btn btn-border more-project-btn"
                            >
                                View all case studies
                                <ReactSVG
                                    src="assets/images/service/icons/13.svg"
                                    alt="arrow"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudiesFour
