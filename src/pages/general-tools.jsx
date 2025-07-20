import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ExploreProductArea from "@containers/explore-product/layout-10";
import { fetchPosts } from "src/redux/sanitySlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const data = {
    catalogue: "/pdfs/General-Tools-web.pdf",
};

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Product = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.sanity);
    // Local state to store the filtered telecoms products
    const [GeneralToolsProducts, setGeneralToolsProducts] = useState([]);

    // Function to filter general tools products
    const filterGeneralToolsProducts = (allPosts) => {
        if (!allPosts || allPosts.length === 0) return [];

        const filtered = allPosts.filter(
            (post) =>
                post.category?.includes("General Tools") &&
                post.hasSubCategories
        );

        return filtered;
    };

    // Fetch posts and filter them
    useEffect(() => {
        if (!posts || posts.length === 0) {
            // eslint-disable-next-line no-console
            dispatch(fetchPosts());
        } else {
            // Filter and set general tools products
            const filtered = filterGeneralToolsProducts(posts);
            setGeneralToolsProducts(filtered);
        }
    }, [dispatch, posts]);

    return (
        <Wrapper>
            <SEO pageTitle="General Tools Products" />
            <Header />
            <main id="main-content">
                <Breadcrumb
                    pageTitle="General Tools Products"
                    currentPage="General Tools Products"
                />
                <ExploreProductArea
                    data={{
                        products: GeneralToolsProducts,
                        title: "General Tools Products",
                        catalogue: data.catalogue,
                    }}
                />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Product;
