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
    catalogue: "/pdfs/CBS-Klein-Tools-Catalogue-web.pdf",
};
export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Product = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.sanity);
    // Local state to store the filtered Klein Tools products
    const [KleinToolsProducts, setKleinToolsProducts] = useState([]);

    // Function to filter Klein Tools products
    const filterKleinToolsProducts = (allPosts) => {
        if (!allPosts || allPosts.length === 0) return [];

        const filtered = allPosts.filter(
            (post) =>
                post.category?.includes("Klein Tools") && post.hasSubCategories
        );

        return filtered;
    };

    // Fetch posts and filter them
    useEffect(() => {
        if (!posts || posts.length === 0) {
            dispatch(fetchPosts());
        } else {
            // Filter and set Klein Tools products
            const filtered = filterKleinToolsProducts(posts);

            setKleinToolsProducts(filtered);
        }
    }, [dispatch, posts]);
    return (
        <Wrapper>
            <SEO pageTitle="Klein Tools Products" />
            <Header />
            <main id="main-content">
                <Breadcrumb
                    pageTitle="Klein Tools Products"
                    currentPage="Klein Tools Products"
                />
                <ExploreProductArea
                    data={{
                        products: KleinToolsProducts,
                        title: "Klein Tools Products",
                        catalogue: data.catalogue,
                    }}
                />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Product;
