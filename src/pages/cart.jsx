import Breadcrumb from "@components/breadcrumb";

// const ShoppingCart = () => {
//   return (
//     <>
//       <CartView />
//     </>
//   );
// };

// export default ShoppingCart;

import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import { CartView } from "../components/cart-view";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const ShoppingCart = () => (
    <Wrapper>
        <SEO pageTitle="Enquiry Cart" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Enquiry Cart" currentPage="Enquiry Cart" />
            <CartView />
        </main>
        <Footer />
    </Wrapper>
);

export default ShoppingCart;
