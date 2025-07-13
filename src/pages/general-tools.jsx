import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ExploreProductArea from "@containers/explore-product/layout-10";
import productData from "../data/products-06.json";
import Catalogue from "@components/catalogue";

const data = {
    "catalogue": "/pdfs/General-Tools-web.pdf",
}

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const GeneralToolsProducts = productData.filter((product) =>
    product.category.includes("General Tools")
);

const Product = () => (
    <Wrapper>
        <SEO pageTitle="General Tools Products" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="General Tools Products"
                currentPage="General Tools Products"
            />
            <Catalogue data={data} />
            <ExploreProductArea
                data={{
                    products: GeneralToolsProducts,
                }}
            />
        </main>
        <Footer />
    </Wrapper>
);

export default Product;
