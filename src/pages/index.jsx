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
import Image from "next/image";
import { fetchPosts } from '../redux/sanitySlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

// Demo data
import homepageData from "../data/homepages/home-04.json";
import favouriteProducts from "../data/favourite-products.json"

import imageUrlBuilder from "@sanity/image-url";
import Catalogue from "@components/catalogue";

const builder = imageUrlBuilder({
    projectId: "b6e027vh",
    dataset: "production",
});

const urlFor = (source) => {
    const image = builder.image(source);
    return image;
}

const atmosImage = {
    "_type": "image",
    "asset": {
    "_type": "reference",
    "_ref": "image-868597fa3c5256a0ddd68ff36eca7d0b5a5bc427-4267x3200-png"
    }
}

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home = () => {
    const content = normalizedData(homepageData?.content || []);
      const dispatch = useDispatch()
  const { posts, loading, error } = useSelector((state) => state.sanity)

  
  // Local state to store the filtered posts
  const [filteredPosts, setFilteredPosts] = useState([])

  // Dispatch fetchPosts when the component mounts
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

    // Once posts are fetched, filter them by a specific name or condition
  useEffect(() => {
    if (posts && posts.length > 0) {
      const filtered = posts.filter((post) => post.title === 'Tornado' || post.title === 'Jetstream')
      setFilteredPosts(filtered)
    }
  }, [posts]) 

//     if (loading) return <div>Loading...</div>
//   if (error) return <div>Error: {error}</div>


    return (
        <Wrapper>
            <SEO pageTitle="CBS Products" />
            <Header />
            <main id="main-content">
                <HeroArea data={content["hero-section"]} />
                <VideoArea data={content["video-section"]} />
                <Catalogue data={content["hero-section"]} />
                <ServiceArea data={content["service-section"]} />
                <div className="slider-thumbnail">
                <Image
                style={{display: 'block', marginInline: 'auto', marginTop: 30, height: '100%', maxHeight: '400px', width: 'auto'}}
                                src={urlFor(atmosImage).url()}
                                alt={'atmos compressor'}
                                width={0}
                                height={0}
                            />
                            </div>
                <ExploreCarouselBothArea
                    space={4}
                    data={{
                        products: filteredPosts,
                    }}
                />
                 <ExploreLogos />
                <ContactTopArea className="mb--50" />
            </main>
            <Footer  data={content["brand-section"]}/>
        </Wrapper>
    );
};

export default Home;
