
import BannerThree from "@/components/banner/BannerThree";
import BackToTop from "@/components/common/BackToTop";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderTwo from "@/components/header/HeaderTwo";
import ServicesGrid from "@/components/casestudies/ServicesGrid";
import FeaturesGrid from "@/components/services/FeaturesGrid";
import CaseStudiesFour from "@/components/casestudies/CaseStudiesFour";
import FaqOne from "@/components/faq/FaqOne";
import BlogThree from "@/components/blog/BlogThree";

export default function Home() {
    return (
        <div className='#'>

            <HeaderTwo />
            <BannerThree />
            <ServicesGrid />
            <FeaturesGrid />
            <CaseStudiesFour />
            <FaqOne />
            <BlogThree />


            <FooterTwo />
            <BackToTop />
        </div>
    );
}
