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
    catalogue: "/pdfs/Underground-cable-laying-web.pdf",
};
export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Product = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.sanity);
    // Local state to store the filtered telecoms products
    const [UndergroundCableLaying, setUndergroundCableLaying] = useState([]);

    // Function to filter underground cable laying products
    const filterUndergroundCableLaying = (allPosts) => {
        if (!allPosts || allPosts.length === 0) return [];

        const filtered = allPosts.filter(
            (post) =>
                post.category?.includes("Underground Cable Laying") &&
                post.hasSubCategories
        );

        return filtered;
    };

    // Fetch posts and filter them
    useEffect(() => {
        if (!posts || posts.length === 0) {
            dispatch(fetchPosts());
        } else {
            // Filter and set underground cable laying products
            const filtered = filterUndergroundCableLaying(posts);
            setUndergroundCableLaying(filtered);
        }
    }, [dispatch, posts]);

    return (
        <Wrapper>
            <SEO pageTitle="Underground Cable Laying Products" />
            <Header />
            <main id="main-content">
                <Breadcrumb
                    pageTitle="Underground Cable Laying Products"
                    currentPage="Underground Cable Laying Products"
                />
                <ExploreProductArea
                    data={{
                        products: UndergroundCableLaying,
                        title: "Underground Cable Laying Products",
                        catalogue: data.catalogue,
                    }}
                />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Product;
