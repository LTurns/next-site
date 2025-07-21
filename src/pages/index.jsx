import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import HeroArea from "@containers/hero/layout-01";
import ServiceArea from "@containers/services/layout-01";
import { normalizedData } from "@utils/methods";
import VideoArea from "@containers/video/layout-01";
import ExploreCarouselBothArea from "@containers/explore-product/layout-07";
import ExploreLogos from "@containers/logos";
import ContactTopArea from "@containers/contact-top";
import RatingSection from "@components/rating-section";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Demo data
import homepageData from "../data/homepages/home-04.json";

import { fetchPosts } from "../redux/sanitySlice";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home = () => {
    const content = normalizedData(homepageData?.content || []);
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.sanity);
    // Local state to store the filtered posts
    const [filteredPosts, setFilteredPosts] = useState([]);

    // Dispatch fetchPosts when the component mounts
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    // Once posts are fetched, filter them by a specific name or condition
    useEffect(() => {
        if (posts && posts.length > 0) {
            const filtered = posts.filter(
                (post) =>
                    (post.category?.includes("Telecoms") ||
                        post.category?.includes("Fibre Installation")) &&
                    post.subCategory?.includes("Fibre Blowing Machines")
            );
            setFilteredPosts(filtered);
        }
    }, [posts]);

    //     if (loading) return <div>Loading...</div>
    //   if (error) return <div>Error: {error}</div>

    return (
        <Wrapper>
            <SEO pageTitle="CBS Products" />
            <Header />
            <main id="main-content">
                <HeroArea data={content["hero-section"]} />
                <RatingSection space={4} />
                <ServiceArea data={content["service-section"]} />
                <VideoArea data={content["video-section"]} />
                <ExploreCarouselBothArea
                    space={4}
                    data={{
                        products: filteredPosts,
                    }}
                />
                <ContactTopArea className="mb--50" />
            </main>
            <Footer data={content["brand-section"]} />
        </Wrapper>
    );
};

export default Home;
