import BackToTop from "@/components/common/BackToTop";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderTwo from "@/components/header/HeaderTwo";
import SolutionCounter from "@/components/services/SolutionCounter";
import LargeImage from "@/components/large-video/LargeImage";

const services = [
  {
    title: 'Web Design & Development',
    description: 'We craft fast, responsive, and visually compelling websites and web applications - from landing pages to full SaaS platforms. Built on modern frameworks, optimized for performance, and tailored to your brand.',
    image: 'assets/images/service/icons/31.svg',
    delay: '100',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences for Android and iOS. Whether it\'s a customer-facing app or an internal operations tool, we build apps that work - even on low-bandwidth connections across East Africa.',
    image: 'assets/images/service/icons/32.svg',
    delay: '300',
  },
  {
    title: 'Database Design & Development',
    description: 'Clean, scalable database architecture from the ground up. We design relational schemas, optimize queries, handle migrations, and build the data layer your business can grow on for years.',
    image: 'assets/images/service/icons/33.svg',
    delay: '500',
  },
  {
    title: 'Data Analysis & Visualisation',
    description: 'Turn raw data into decisions. We build interactive dashboards, automate reports, and create visualisations that make complex data immediately understandable to your team and stakeholders.',
    image: 'assets/images/service/icons/34.svg',
    delay: '100',
  },
  {
    title: 'Cyber Security',
    description: 'Protect your digital infrastructure with robust security assessments, threat monitoring, and incident response. We help safeguard your systems, data, and operations against evolving cyber threats.',
    image: 'assets/images/service/icons/35.svg',
    delay: '300',
  },
  {
    title: 'IT Training',
    description: 'Empower your team with practical, hands-on training in modern technologies - from web development and database management to data analysis and cybersecurity best practices.',
    image: 'assets/images/service/icons/36.svg',
    delay: '500',
  },
]

export default function Home() {
    return (
        <div className='#'>
            <HeaderTwo />



            <div className="service-main-wrapper-area-service pb--80">
                <div className="container">
                    <div className="row g-5 mt--0">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="col-lg-4 col-md-6 col-sm-12 mt--0 wow fadeInUp"
                                data-wow-offset={120}
                                data-wow-delay={`.${service.delay}s`}
                            >
                                <div className="single-service-border-top">
                                    <div className="icon">
                                        <img src={service.image} alt={service.title} />
                                    </div>
                                    <h5 className="title" style={{marginBottom: 10, fontSize: 18}}>{service.title}</h5>
                                    <p className="disc">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <LargeImage />
            <SolutionCounter />

            <FooterTwo />
            <BackToTop />
        </div>
    );
}
