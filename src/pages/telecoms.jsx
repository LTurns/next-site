import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ExploreProductArea from "@containers/explore-product/layout-10";
import Catalogue from "@components/catalogue";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPosts } from "../redux/sanitySlice";
// import productData from "../data/products-06.json";

const data = {
    catalogue: "/pdfs/Accelair31.pdf",
};

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Product = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.sanity);
    // Local state to store the filtered telecoms products
    const [telecomsProducts, setTelecomsProducts] = useState([]);

    // Function to filter telecoms products
    const filterTelecomsProducts = (allPosts) => {
        if (!allPosts || allPosts.length === 0) return [];

        const filtered = allPosts.filter(
            (post) =>
                (post.category?.includes("Fibre Installation") ||
                    post.category?.includes("Telecoms")) &&
                post.hasSubCategories
        );

        return filtered;
    };

    // Fetch posts and filter them
    useEffect(() => {
        if (!posts || posts.length === 0) {
            // eslint-disable-next-line no-console
            console.log("Dispatching fetchPosts...");
            dispatch(fetchPosts());
        } else {
            // Filter and set telecoms products
            const filtered = filterTelecomsProducts(posts);

            const categoriesOrder = [
                "Fibre Blowing Machines",
                "Compressors",
                "Drum Handling and Drum Trailers",
                "Cable Fleeting Devices",
                "Fibre Blowing Accessories",
                "Desilter",
                "Telecom Winches",
                "Rod Pusher and Duct Rods",
                "Duct Rodders",
                "Duct Rod Accessories",
                "Cable Pulling Grips",
                "Cable Avoidance",
            ];

            const filteredList = filtered.sort(
                (a, b) =>
                    categoriesOrder.indexOf(a.title) -
                    categoriesOrder.indexOf(b.title)
            );
            setTelecomsProducts(filteredList);
        }
    }, [dispatch, posts]);

    return (
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
                        products: telecomsProducts || [],
                        title: "Telecoms Products",
                        catalogue: data.catalogue,
                    }}
                />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Product;
