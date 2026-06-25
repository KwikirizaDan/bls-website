import BackToTop from "@/components/common/BackToTop";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderTwo from "@/components/header/HeaderTwo";
import ServiceList from "@/components/services/ServiceList";
import SolutionCounter from "@/components/services/SolutionCounter";
import LargeImage from "@/components/large-video/LargeImage";
import FeatureTwo from "@/components/feature/FeatureTwo";

export default function Home() {
    return (
        <div className='#'>
            <HeaderTwo />

            <div className="rts-service-banner-area ptb--80 position-relative">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-7 mb_md--30 mb_sm--30">
                            <div className="service-banner-content-wrapper">
                                <div
                                    className="bread-plug wow fadeInUp"
                                    data-wow-offset={120}
                                    data-wow-delay=".2s"
                                >
                                    <a href="#">Home</a>
                                    <i className="fa-regular fa-chevron-right" />
                                    <a className="current" href="#">
                                        Services
                                    </a>
                                </div>
                                <h1
                                    className="title wow fadeInUp"
                                    data-wow-offset={120}
                                    data-wow-delay=".4s"
                                >
                                    End-to-End Digital Solutions
                                </h1>
                                <p
                                    className="disc wow fadeInUp"
                                    data-wow-offset={120}
                                    data-wow-delay=".6s"
                                >
                                    From custom web platforms to mobile apps and data systems - Binary Labs Solutions delivers enterprise-grade technology built for the realities of doing business in Uganda and beyond.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="thumbnail-bannr-service-right jarallax">
                                <img
                                    className="jarallax-img"
                                    src="assets/images/service/04.webp"
                                    alt="serivce-area"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-area-start">
                    <img
                        src="assets/images/banner/06.png"
                        alt="service-banner-shape"
                        className="one wow move-right"
                    />
                    <img
                        src="assets/images/banner/07.png"
                        alt="service-banner-shape"
                        className="two wow move-left"
                    />
                </div>
            </div>

            <div className="service-main-wrapper-area-service pb--80">
                <div className="container">
                    <div className="row">
                        <div className="row g-5 mt--0">
                            <div
                                className="col-lg-3 mt--0 wow fadeInUp"
                                data-wow-offset={120}
                                data-wow-delay=".2s"
                            >
                                <div className="single-service-border-top">
                                    <div className="icon">
                                        <img src="assets/images/service/icons/31.svg" alt="Web Design & Development" />
                                    </div>
                                    <h5 className="title" style={{marginBottom: 10, fontSize: 18}}>Web Design & Development</h5>
                                    <p className="disc">
                                        We craft fast, responsive, and visually compelling websites and web applications - from landing pages to full SaaS platforms. Built on modern frameworks, optimized for performance, and tailored to your brand.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 mt--0 wow fadeInUp"
                                data-wow-offset={120}
                                data-wow-delay=".4s"
                            >
                                <div className="single-service-border-top">
                                    <div className="icon">
                                        <img src="assets/images/service/icons/32.svg" alt="Mobile App Development" />
                                    </div>
                                    <h5 className="title" style={{marginBottom: 10, fontSize: 18}}>Mobile App Development</h5>
                                    <p className="disc">
                                        Native and cross-platform mobile experiences for Android and iOS. Whether it&apos;s a customer-facing app or an internal operations tool, we build apps that work even on low-bandwidth connections across East Africa.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 mt--0 wow fadeInUp"
                                data-wow-offset={120}
                                data-wow-delay=".6s"
                            >
                                <div className="single-service-border-top">
                                    <div className="icon">
                                        <img src="assets/images/service/icons/33.svg" alt="Database Design & Development" />
                                    </div>
                                    <h5 className="title" style={{marginBottom: 10, fontSize: 18}}>Database Design & Development</h5>
                                    <p className="disc">
                                        Clean, scalable database architecture from the ground up. We design relational schemas, optimize queries, handle migrations, and build the data layer your business can grow on for years.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 mt--0 wow fadeInUp"
                                data-wow-offset={120}
                                data-wow-delay=".8s"
                            >
                                <div className="single-service-border-top">
                                    <div className="icon">
                                        <img src="assets/images/service/icons/34.svg" alt="Data Analysis & Visualisation" />
                                    </div>
                                    <h5 className="title" style={{marginBottom: 10, fontSize: 18}}>Data Analysis & Visualisation</h5>
                                    <p className="disc">
                                        Turn raw data into decisions. We build interactive dashboards, automate reports, and create visualisations that make complex data immediately understandable to your team and stakeholders.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ServiceList />
            <LargeImage />
            <SolutionCounter />
            <FeatureTwo />

            <div className="rts-call-to-action-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-two-wrapper">
                                <div className="inner">
                                    <h2 className="title">Let&apos;s Build Something Together</h2>
                                    <p>
                                        Have a project in mind? Let&apos;s discuss how we can help turn your ideas into reality.
                                    </p>
                                    <a
                                        href="/contact"
                                        className="rts-btn btn-primary wow fadeInUp"
                                        data-wow-delay=".5s"
                                    >
                                        Start Your Project
                                        <img
                                            className="injectable"
                                            src="assets/images/service/icons/13.svg"
                                            alt="arrow"
                                        />
                                    </a>
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

            <FooterTwo />
            <BackToTop />
        </div>
    );
}
