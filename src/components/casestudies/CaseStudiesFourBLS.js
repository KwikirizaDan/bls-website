"use client"
import React from 'react'
import { ReactSVG } from 'react-svg';
function CaseStudiesFour() {
    return (
        <div>

            {/* products area start */}
            <div className="case-studies-area rts-section-gap position-relative bg-dark-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center-title-bg-white">
                                <span className="pre-title" style={{color: 'var(--color-primary)', fontSize: 16, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase'}}>What We&apos;ve Built</span>
                                <h2 className="title" style={{color: '#fff'}}>Our Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-0 g-80">
                        <div
                            className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
                        >
                            <div className="single-case-studies">
                                <div className="thumbnail">
                                    <img src="assets/images/case-studies/01.webp" alt="SaccoOS" />
                                </div>
                                <div className="inner-content">
                                    <span>Next.js · Supabase · PostgreSQL</span>
                                    <h3 className="title">SaccoOS</h3>
                                    <p style={{color: '#999', marginBottom: 15}}>Multi-tenant SACCO management platform for savings and credit cooperatives across Uganda.</p>
                                    <p style={{color: '#777', fontSize: 14}}>Member management, loan processing, repayment tracking, multi-tenant architecture</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-6 col-sm-12 pt--80 pt_md--0 pt_sm--0" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"
                        >
                            <div className="single-case-studies">
                                <div className="thumbnail">
                                    <img src="assets/images/case-studies/02.webp" alt="DukaPOS" />
                                </div>
                                <div className="inner-content">
                                    <span>Next.js · Drizzle ORM · PWA</span>
                                    <h3 className="title">DukaPOS</h3>
                                    <p style={{color: '#999', marginBottom: 15}}>Point-of-sale system built for Ugandan shops &mdash; works offline, prints thermal receipts, and tracks inventory in real time.</p>
                                    <p style={{color: '#777', fontSize: 14}}>Offline-first, thermal receipt printing, inventory management, EgoSMS integration</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000"
                        >
                            <div className="single-case-studies">
                                <div className="thumbnail">
                                    <img src="assets/images/case-studies/03.webp" alt="Skolia" />
                                </div>
                                <div className="inner-content">
                                    <span>Next.js · Supabase · Green API</span>
                                    <h3 className="title">Skolia</h3>
                                    <p style={{color: '#999', marginBottom: 15}}>School management system for Ugandan schools with QR attendance, WhatsApp report cards, and MoMo fee payments.</p>
                                    <p style={{color: '#777', fontSize: 14}}>QR-based attendance, dynamically generated report cards, WhatsApp PDF delivery, MTN MoMo payments</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-6 col-sm-12 pt--80 pt_md--0 pt_sm--0" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000"
                        >
                            <div className="single-case-studies">
                                <div className="thumbnail">
                                    <img src="assets/images/case-studies/04.webp" alt="VerifyLink" />
                                </div>
                                <div className="inner-content">
                                    <span>FastAPI · Next.js · EgoSMS · Supabase</span>
                                    <h3 className="title">VerifyLink</h3>
                                    <p style={{color: '#999', marginBottom: 15}}>SMS OTP authentication SaaS for developers and businesses operating in Uganda and East Africa.</p>
                                    <p style={{color: '#777', fontSize: 14}}>SMS OTP, developer SDK, real-time logs, usage dashboard</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--20">
                        <div className="col-lg-12 text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <div className="single-case-studies" style={{maxWidth: 600, margin: '0 auto'}}>
                                <div className="thumbnail">
                                    <img src="assets/images/case-studies/05.webp" alt="OpenDeliver" />
                                </div>
                                <div className="inner-content">
                                    <span>Next.js · Capacitor.js · Supabase · OSRM</span>
                                    <h3 className="title">OpenDeliver</h3>
                                    <p style={{color: '#999', marginBottom: 15}}>Last-mile delivery orchestration platform designed for the East African logistics market.</p>
                                    <p style={{color: '#777', fontSize: 14}}>Multi-tenant, route optimization, mobile money payouts, real-time driver tracking</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* products area end */}

        </div>
    )
}

export default CaseStudiesFour
