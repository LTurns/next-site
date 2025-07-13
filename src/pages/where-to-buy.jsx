import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ExploreProductArea from "@containers/explore-product/layout-12";
import whereToBuy from "../data/whereToBuy.json";
import Map from "@components/map";

const locations = [
  { lat: 37.7749, lng: -122.4194, label: "A" },
  { lat: 37.7849, lng: -122.4094, label: "B" },
  { lat: 37.7649, lng: -122.4294, label: "C" },
];

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Product = () => (
    <Wrapper>
        <SEO pageTitle="Where to Buy" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Our Products" currentPage="Our Products" />
                <div>
      <Map locations={locations} />
    </div>
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
