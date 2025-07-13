import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ProductDetailsArea from "@containers/product-details";

// demo data
import productData from "../../data/products-06.json";

const ProductDetails = ({ product }) => (
    <Wrapper>
        <SEO pageTitle={product.title} />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Product Details"
                currentPage="Product Details"
            />
            <ProductDetailsArea
                product={product}
            />
            {/* <ProductArea
                data={{
                    section_title: { title: "Recent View" },
                    products: recentViewProducts,
                }}
            /> */}
            {/* <ProductArea
                data={{
                    section_title: { title: "Related Item" },
                    products: relatedProducts,
                }}
            /> */}
        </main>
        <Footer />
    </Wrapper>
);

export async function getStaticPaths() {
    return {
        paths: productData.map(({ title }) => ({
            params: {
                title,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const product = productData.find(({ title }) => title === params.title);

    // const { category } = product;
    // const recentViewProducts = shuffleArray(productData).slice(0, 5);
    // const relatedProducts = productData
    //     .filter((prod) => prod.categories?.some((r) => categories?.includes(r)))
    //     .slice(0, 5);
    return {
        props: {
            className: "template-color-1",
            product,
            // recentViewProducts,
            // relatedProducts,
        }, // will be passed to the page component as props
    };
}

ProductDetails.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    product: PropTypes.object,
};

export default ProductDetails;
