import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ExploreProductArea from "@containers/explore-product/layout-12";
import whereToBuy from "../data/whereToBuy.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Product = () => (
    <Wrapper>
        <SEO pageTitle="Where to Buy" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Our Products" currentPage="Our Products" />
            <ExploreProductArea
                data={{
                    products: whereToBuy,
                }}
            />
        </main>
        <Footer />
    </Wrapper>
);

export default Product;
