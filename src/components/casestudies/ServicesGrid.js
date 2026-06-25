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

function ServicesGrid() {
    return (
        <div>
            <div className="rts-case-studies-area rts-section-gapBottom mt_sm--30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-main-wrapper-center-three">
                                <span className="pre-title">What We Do</span>
                                <h2 className="title">End-to-End Digital Solutions</h2>
                                <p>From web platforms to data systems - we deliver enterprise-grade technology built for the realities of doing business in Uganda and beyond.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-80 mt--0">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay={service.delay} data-aos-duration="1000"
                            >
                                <div className="single-case-studies-three">
                                    <a href="/service" className="thumbnail">
                                        <img src={service.image} alt={service.title} />
                                    </a>
                                    <div className="inner-content">
                                        <a href="/service">
                                            <h4 className="title">{service.title}</h4>
                                        </a>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesGrid
