import BackToTop from "@/components/common/BackToTop";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderTwo from "@/components/header/HeaderTwo";
import FeatureOne from "@/components/feature/FeatureOne";
import FeatureTwo from "@/components/feature/FeatureTwo";
import ServiceSix from "@/components/services/ServiceSix";
import PricingFour from "@/components/pricing/PricingFour";
import TestimonialsThree from "@/components/testimonials/TestimonialsThree";
import BrandTwo from "@/components/brand/BrandTwo";
import CtaFour from "@/components/cta/CtaFour";

export default function Home() {
    return (
        <div className='#'>
            <HeaderTwo />

            {/* about banner area start */}
            <div className="about-banner-area-bg jarallax" style={{ backgroundImage: 'url(assets/images/about/01.webp)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-content" style={{ padding: '200px 0', textAlign: 'center', color: '#fff' }}>
                                <h1 className="title" style={{ fontSize: '48px', fontWeight: 700, marginBottom: '20px' }}>Built in Kampala. Built for Africa.</h1>
                                <p className="disc" style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
                                    Binary Labs Solutions is an ICT company headquartered in Mpererwe Kawempe, Kampala, Uganda. We exist to close the gap between world-class technology and the East African businesses that deserve it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about banner area end */}

            {/* mission area start */}
            <div className="what-we-do-area-start rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-center-inner-with-sub" style={{ textAlign: 'center', marginBottom: '60px' }}>
                                <span style={{ color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>Why We Exist</span>
                                <h2 className="title" style={{ fontSize: '36px', fontWeight: 700, marginTop: '10px' }}>Our Mission</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="what-we-do-main-wrapper" style={{ textAlign: 'center', padding: '40px 30px', background: '#fff', borderRadius: '8px', boxShadow: '0 0 30px rgba(0,0,0,0.05)' }}>
                                <h5 className="title" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '15px' }}>Bridge Ideas and Execution</h5>
                                <p className="disc" style={{ color: '#666', lineHeight: 1.7 }}>
                                    We turn ambitious ideas into working technology solutions that drive real business outcomes.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="what-we-do-main-wrapper" style={{ textAlign: 'center', padding: '40px 30px', background: '#fff', borderRadius: '8px', boxShadow: '0 0 30px rgba(0,0,0,0.05)' }}>
                                <h5 className="title" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '15px' }}>Champion Digital Inclusion</h5>
                                <p className="disc" style={{ color: '#666', lineHeight: 1.7 }}>
                                    We democratize access to cutting-edge technology for businesses across East Africa.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="what-we-do-main-wrapper" style={{ textAlign: 'center', padding: '40px 30px', background: '#fff', borderRadius: '8px', boxShadow: '0 0 30px rgba(0,0,0,0.05)' }}>
                                <h5 className="title" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '15px' }}>Build Trust Through Results</h5>
                                <p className="disc" style={{ color: '#666', lineHeight: 1.7 }}>
                                    We deliver measurable impact, not just deliverables, earning trust one project at a time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mission area end */}

            <FeatureOne />
            <FeatureTwo />
            <ServiceSix />
            <PricingFour />
            <BrandTwo />
            <TestimonialsThree />
            <CtaFour />
            <FooterTwo />
            <BackToTop />
        </div>
    );
}
