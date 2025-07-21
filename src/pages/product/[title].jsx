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
        const posts = await sanityClient.fetch(`*[_type == "product"]`);

        const paths = posts.map((post) => ({
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
        // Fetch specific product by title from Sanity (more efficient)
        const product = await sanityClient.fetch(
            `*[_type == "product" && title == "${params.title}"][0]{title}`,
            { title: params.title }
        );

        if (product) {
            return {
                props: {
                    className: "template-color-1",
                    product,
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
