import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import HeroArea from "@containers/hero/layout-01";
import ServiceArea from "@containers/services/layout-01";
import { normalizedData } from "@utils/methods";
import VideoArea from "@containers/video/layout-01";
import ExploreCarouselBothArea from "@containers/explore-product/layout-07";

// Demo data
import homepageData from "../data/homepages/home-04.json";
import productData from "../data/products-03.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home = () => {
    const content = normalizedData(homepageData?.content || []);
    return (
        <Wrapper>
            <SEO pageTitle="CBS Products" />
            <Header />
            <main id="main-content">
                <HeroArea data={content["hero-section"]} />
                <ServiceArea data={content["service-section"]} />
                <VideoArea data={content["video-section"]} />
                <ExploreCarouselBothArea
                    space={4}
                    data={{
                        products: productData.slice(0, 9),
                    }}
                />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home;
