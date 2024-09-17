import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ExploreCarouselBothArea from "@containers/explore-product/layout-07";

// Demo data
import productData from "../data/products.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home02 = () => (
    <Wrapper>
        <SEO pageTitle="Explore Carousel" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Explore Carousel"
                currentPage="Explore With Carousel"
            />
            <ExploreCarouselBothArea
                space={4}
                data={{
                    section_title: {
                        title: "Explore Carousel Both",
                    },
                    products: productData.slice(0, 8),
                }}
            />
        </main>
        <Footer />
    </Wrapper>
);

export default Home02;
