import React from 'react'

function ContactOne() {
    return (
        <div>
            <div className="contact-area-start rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center-title-bg-white">
                                <span className="pre-title" style={{color: 'var(--color-primary)', fontSize: 16, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase'}}>Get In Touch</span>
                                <h2 className="title" style={{fontSize: 40}}>Let&apos;s Build Something Together</h2>
                                <p style={{maxWidth: 600, margin: '15px auto 0', fontSize: 16, color: '#666'}}>
                                    Whether you have a fully scoped project or just an idea &mdash; reach out. We&apos;ll help you figure out the right solution.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--80">
                        <div className="col-lg-5">
                            <div className="contact-info-area">
                                <div className="single-contact-info" style={{display: 'flex', gap: 20, marginBottom: 30, alignItems: 'flex-start'}}>
                                    <div className="icon" style={{width: 50, height: 50, background: 'var(--color-primary)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                                        <i className="fa-solid fa-phone" style={{color: '#fff', fontSize: 20}}></i>
                                    </div>
                                    <div>
                                        <h5 style={{fontSize: 18, fontWeight: 600, marginBottom: 5}}>Phone</h5>
                                        <a href="tel:+256707265240" style={{color: '#555', textDecoration: 'none'}}>+256 707 265 240</a>
                                    </div>
                                </div>
                                <div className="single-contact-info" style={{display: 'flex', gap: 20, marginBottom: 30, alignItems: 'flex-start'}}>
                                    <div className="icon" style={{width: 50, height: 50, background: 'var(--color-primary)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                                        <i className="fa-solid fa-envelope" style={{color: '#fff', fontSize: 20}}></i>
                                    </div>
                                    <div>
                                        <h5 style={{fontSize: 18, fontWeight: 600, marginBottom: 5}}>Email</h5>
                                        <a href="mailto:binarylabs01@gmail.com" style={{color: '#555', textDecoration: 'none'}}>binarylabs01@gmail.com</a>
                                    </div>
                                </div>
                                <div className="single-contact-info" style={{display: 'flex', gap: 20, marginBottom: 30, alignItems: 'flex-start'}}>
                                    <div className="icon" style={{width: 50, height: 50, background: 'var(--color-primary)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                                        <i className="fa-solid fa-globe" style={{color: '#fff', fontSize: 20}}></i>
                                    </div>
                                    <div>
                                        <h5 style={{fontSize: 18, fontWeight: 600, marginBottom: 5}}>Website</h5>
                                        <a href="https://www.bls-ug.com" style={{color: '#555', textDecoration: 'none'}}>www.bls-ug.com</a>
                                    </div>
                                </div>
                                <div className="single-contact-info" style={{display: 'flex', gap: 20, alignItems: 'flex-start'}}>
                                    <div className="icon" style={{width: 50, height: 50, background: 'var(--color-primary)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                                        <i className="fa-solid fa-location-dot" style={{color: '#fff', fontSize: 20}}></i>
                                    </div>
                                    <div>
                                        <h5 style={{fontSize: 18, fontWeight: 600, marginBottom: 5}}>Location</h5>
                                        <p style={{color: '#555', margin: 0}}>Mpererwe Kawempe, Kampala, Uganda</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contact-form-wrapper" style={{background: '#f8f9fa', padding: 40, borderRadius: 10}}>
                                <form>
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <input type="text" className="form-control" placeholder="Full Name *" required style={{padding: '12px 15px', borderRadius: 8, border: '1px solid #ddd'}} />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="email" className="form-control" placeholder="Email Address *" required style={{padding: '12px 15px', borderRadius: 8, border: '1px solid #ddd'}} />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="tel" className="form-control" placeholder="Phone Number" style={{padding: '12px 15px', borderRadius: 8, border: '1px solid #ddd'}} />
                                        </div>
                                        <div className="col-lg-6">
                                            <select className="form-control" style={{padding: '12px 15px', borderRadius: 8, border: '1px solid #ddd', width: '100%'}}>
                                                <option value="">Service Needed</option>
                                                <option value="web-development">Web Development</option>
                                                <option value="mobile-app">Mobile App</option>
                                                <option value="database">Database</option>
                                                <option value="data-analysis">Data Analysis</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea className="form-control" rows={5} placeholder="Project Description *" required style={{padding: '12px 15px', borderRadius: 8, border: '1px solid #ddd'}}></textarea>
                                        </div>
                                        <div className="col-lg-6">
                                            <select className="form-control" style={{padding: '12px 15px', borderRadius: 8, border: '1px solid #ddd', width: '100%'}}>
                                                <option value="">Budget Range</option>
                                                <option value="<1m">&lt; UGX 1M</option>
                                                <option value="1m-5m">UGX 1M - 5M</option>
                                                <option value="5m-20m">UGX 5M - 20M</option>
                                                <option value="20m+">UGX 20M+</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12">
                                            <button type="submit" className="rts-btn btn-primary" style={{border: 'none', cursor: 'pointer'}}>
                                                Let&apos;s Talk
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactOne