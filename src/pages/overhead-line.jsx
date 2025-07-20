import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ExploreProductArea from "@containers/explore-product/layout-10";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPosts } from "../redux/sanitySlice";

const data = {
    catalogue: "/pdfs/Overhead-Line-Stringing-web.pdf",
};

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Product = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.sanity);
    // Local state to store the filtered overhead line products
    const [overHeadLineProducts, setOverHeadLineProducts] = useState([]);

    // Function to filter overhead line products
    const filterOverHeadLineProducts = (allPosts) => {
        if (!allPosts || allPosts.length === 0) return [];

        const filtered = allPosts.filter(
            (post) =>
                post.category?.includes("Overhead Line") &&
                post.hasSubCategories
        );

        return filtered;
    };

    // Fetch posts and filter them
    useEffect(() => {
        if (!posts || posts.length === 0) {
            dispatch(fetchPosts());
        } else {
            // Filter and set overhead line products
            const filtered = filterOverHeadLineProducts(posts);
            setOverHeadLineProducts(filtered);
        }
    }, [dispatch, posts]);

    return (
        <Wrapper>
            <SEO pageTitle="Overheadline Products" />
            <Header />
            <main id="main-content">
                <Breadcrumb
                    pageTitle="Overheadline Products"
                    currentPage="Overheadline Products"
                />
                <ExploreProductArea
                    data={{
                        products: overHeadLineProducts,
                        title: "Overheadline Products",
                        catalogue: data.catalogue,
                    }}
                />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Product;
