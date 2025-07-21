import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import Button from "@ui/button";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Product = () => (
    <Wrapper>
        <SEO pageTitle="Thank you" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Thank you" currentPage="Thank you" />
            <div
                style={{ textAlign: "center", fontSize: 16, paddingBlock: 30 }}
            >
                <p>
                    Thanks for your enquiry. We will get back to you as soon as
                </p>

                <Button path="/" data-sal="slide-up" data-sal-duration="800">
                    Back To Home
                </Button>
            </div>
        </main>
        <Footer />
    </Wrapper>
);

export default Product;
