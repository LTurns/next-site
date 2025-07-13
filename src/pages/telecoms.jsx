import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ExploreProductArea from "@containers/explore-product/layout-10";
import Catalogue from "@components/catalogue";
import productData from "../data/products-06.json";

const data = {
    "catalogue": "/pdfs/Accelair31.pdf",
}


export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const products = [];

// const FibreInstallationProducts = productData.map((product) => {
//     if (product.category?.includes("Fibre Installation")) {
//         products.push(product)
//     }

//     return products;
// });

// console.log(FibreInstallationProducts);

const Product = () => {
    const FibreInstallationProducts = productData.filter((product) => 
    product.category?.includes('Fibre Installation') && product.hasSubCategories);

    return(

    <Wrapper>
        <SEO pageTitle="Telecoms Products" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Telecoms Products"
                currentPage="Telecoms Products"
            />
            <ExploreProductArea
                data={{
                    products: FibreInstallationProducts,
                }}
            />
        </main>
        <Footer />
    </Wrapper>
)};

export default Product;
