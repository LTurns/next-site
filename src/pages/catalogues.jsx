import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Catalogue from "@components/catalogue";

const data = {
    catalogue: "/pdfs/Accelair31.pdf",
};

const Catalogues = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Catalogues" />
            <Header />
            <main id="main-content">
                <Catalogue data={data} />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Catalogues;
