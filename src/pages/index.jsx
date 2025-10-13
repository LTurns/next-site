import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import BrandList from '@components/brand-list/index'
import Footer from "@layout/footer/footer-01";
import HeroArea from "@containers/hero/layout-01";
import { normalizedData } from "@utils/methods";
import homepageData from "../data/homepages/home-04.json";

const Home = () => {
    const content = normalizedData(homepageData?.content || []);
    // const dispatch = useDispatch();
    // const { posts } = useSelector((state) => state.sanity);

    // // Dispatch fetchPosts when the component mounts
    // useEffect(() => {
    //     dispatch(fetchPosts());
    // }, [dispatch]);


    return (
        <Wrapper>
            <SEO pageTitle="CBS Products" />
            <Header />
            <main id="main-content" className="main-content">
                <HeroArea data={content["hero-section"]} />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home;
