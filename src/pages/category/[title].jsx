import SEO from "@components/seo";
import PropTypes from "prop-types";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ExploreProductArea from "@containers/explore-product/layout-10";
import { ProductType } from "@utils/types";
import { sanityClient } from "../../lib/sanity";
import productData from "../../data/products-06.json";
// import Catalogue from "@components/catalogue";

// const data = {
//     "catalogue": "/pdfs/CBS-Klein-Tools-Catalogue-web.pdf",
// }
// export async function getStaticProps() {
//     return { props: { className: "template-color-1" } };
// }

// const Categories = productData.filter((product) =>
//     product.subCategory.includes(params.title)
// );
// product.subCategory.forEach((category) => {
//     if (category.toLowerCase() === this.newRealName.toLowerCase()) {
//       this.productCategory.push(product);
//     }
// );

const Category = ({ products, params }) => (
    <Wrapper>
        <SEO pageTitle={params.title} />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Product Categories"
                currentPage={
                    params.title.charAt(0).toUpperCase() +
                    params.title.slice(1).replace("-", " ")
                }
            />
            <ExploreProductArea
                data={{
                    products,
                }}
            />
        </main>
        <Footer />
    </Wrapper>
);

export async function getStaticPaths() {
    try {
        // Fetch posts directly from Sanity at build time
        const posts = await sanityClient.fetch("*[_type == 'product']");
        const dataSource = posts && posts.length > 0 ? posts : productData;

        return {
            paths: dataSource.map(({ title }) => ({
                params: {
                    title,
                },
            })),
            fallback: false,
        };
    } catch (error) {
        // Fallback to productData if Sanity fetch fails
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

        const products = dataSource.filter(({ subCategory }) =>
            subCategory?.[0]?.toLowerCase().includes(params.title.toLowerCase())
        );

        return {
            props: {
                className: "template-color-1",
                products,
                params,
            },
        };
    } catch (error) {
        // Fallback to productData if Sanity fetch fails
        const products = productData.filter(({ subCategory }) =>
            subCategory?.[0]?.toLowerCase().includes(params.title.toLowerCase())
        );

        return {
            props: {
                className: "template-color-1",
                products,
                params,
            },
        };
    }
}

Category.propTypes = {
    products: PropTypes.arrayOf(ProductType).isRequired,
    params: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default Category;
