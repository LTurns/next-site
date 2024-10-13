import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ContactTopArea from "@containers/contact-top";
import GoogleMapArea from "@containers/google-map";
import RepairsFormArea from "@containers/repairs-form";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Contact = () => (
    <Wrapper>
        <SEO pageTitle="Repairs" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Repairs"
                currentPage="Repairs"
            />
            <RepairsFormArea />
            <GoogleMapArea />
            <ContactTopArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Contact;
