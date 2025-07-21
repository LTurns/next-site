import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ProductDetailsArea from "@containers/product-details";
import { ProductType } from "@utils/types";
import { sanityClient } from "../../lib/sanity";

// demo data
import productData from "../../data/products-06.json";

const ProductDetails = ({ product }) => (
    <Wrapper>
        <SEO pageTitle={product.title} />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle={product?.title || "Product Details"}
                currentPage={product?.title || "Product Details"}
            />
            <ProductDetailsArea product={product} />
        </main>
        <Footer />
    </Wrapper>
);

export async function getStaticPaths() {
    try {
        // Fetch posts directly from Sanity at build time
        const posts = await sanityClient.fetch("*[_type == 'product']");
        const dataSource = posts && posts.length > 0 ? posts : productData;

        const paths = dataSource.map((post) => ({
            params: {
                title: post.title,
            },
        }));

        return {
            paths,
            fallback: false,
        };
    } catch (error) {
        // Fallback to productData
        return {
            paths: productData.map(({ title }) => ({
                params: {
                    title,
                },
            })),
            fallback: false,
        };
    }
}

export async function getStaticProps({ params }) {
    try {
        // Fetch posts directly from Sanity at build time
        const posts = await sanityClient.fetch("*[_type == 'product']");
        const dataSource = posts && posts.length > 0 ? posts : productData;

        if (dataSource) {
            return {
                props: {
                    className: "template-color-1",
                    product: dataSource.find(
                        ({ title }) => title === params.title
                    ),
                },
            };
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error fetching product from Sanity:", error);
        // Fallback to productData if Sanity fails
    }

    // Fallback to productData
    const product = productData.find(({ title }) => title === params.title);

    return {
        props: {
            className: "template-color-1",
            product,
        },
    };
}

ProductDetails.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    product: PropTypes.shape(ProductType),
};

export default ProductDetails;
