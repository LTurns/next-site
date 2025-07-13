import SEO from "@components/seo";
import PropTypes from "prop-types";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ExploreProductArea from "@containers/explore-product/layout-10";
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

const Category = ({ products, params }) => {
    return (
        <Wrapper>
        <SEO pageTitle={params.title} />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle={params.title}
                currentPage={params.title}
            />
            <ExploreProductArea
                data={{
                    products: products,
                }}
            />
        </main>
        <Footer />
    </Wrapper>
    )
};

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
    // needs to loop round subcategory array instead of choosing the first = products could have multiple subcategories
    const products = productData.filter(({ subCategory }) => subCategory?.[0]?.toLowerCase().includes(params.title.toLowerCase()));
    // const products = productData;
    // const { category } = product;
    // const recentViewProducts = shuffleArray(productData).slice(0, 5);
    // const relatedProducts = productData
    //     .filter((prod) => prod.categories?.some((r) => categories?.includes(r)))
    //     .slice(0, 5);
    return {
        props: {
            className: "template-color-1",
            products,
            params
            // recentViewProducts,
            // relatedProducts,
        }, // will be passed to the page component as props
    };
}

Category.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    product: PropTypes.object,
};

export default Category;
