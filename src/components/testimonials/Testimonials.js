import React from 'react'

function Testimonials() {
    return (
        <div>
            {/* quote area start */}
            <div className="testimonials-area-start rts-section-gapTop bg-primary position-relative">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="quote-block">
                                <i className="fa-solid fa-quote-left" style={{fontSize: 48, color: 'var(--color-primary)', marginBottom: 30, opacity: 0.5}}></i>
                                <blockquote style={{fontSize: 28, fontWeight: 600, lineHeight: 1.4, color: '#fff', marginBottom: 30}}>
                                    &ldquo;At Binary Labs, we innovate ahead of the curve &mdash; crafting smart solutions before you even know you need them.&rdquo;
                                </blockquote>
                                <p style={{fontSize: 18, color: 'rgba(255,255,255,0.7)'}}>- Binary Labs Solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* quote area end */}
        </div>
    )
}

export default Testimonials