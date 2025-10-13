import PropTypes from "prop-types";
import Image from "next/image";
import Button from "@ui/button";
import Slider from "@ui/slider";
import Catalogue from "@components/catalogue";
import BrandList from "@components/brand-list";
import { HeadingType, TextType, ButtonType, ImageType } from "@utils/types";
import ServiceArea from "@containers/services/layout-01";
import homepageData from "../../../data/homepages/home-04.json";
import { normalizedData } from "@utils/methods";

const content = normalizedData(homepageData?.content || []);

const HeroArea = ({ data }) => (
    <div className="slider-one rn-section-gapTop">
        <div className="container">
            <div className="hero-header row align-items-center">
                <div className="col-lg-7 col-12 order-1 d-flex flex-column justify-content-center" style={{ minHeight: 340 }}>
                    <Slider>
                        {data?.headings?.map((title, idx) => (
                            <div key={idx}>
                                <h1 className="title">{title}</h1>
                                <p className="lead" style={{ fontSize: 22, marginBottom: 32, maxWidth: 480 }}>Discover the best tools and solutions for your industry. Trusted by professionals worldwide.</p>
                            </div>
                        ))}
                    </Slider>
                                                    <Button size="small" path="/locate-a-partner">
                                    Locate A Partner
                                </Button>
                </div>
                <div className="service-area col-lg-5 col-12 order-2 d-flex flex-column align-items-center justify-content-start">
                    <ServiceArea data={content["service-section"]} />
                </div>
            </div>

            <BrandList data={content["brand-section"]} />
        </div>
    </div>
);

HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(HeadingType),
        texts: PropTypes.arrayOf(TextType),
        buttons: PropTypes.arrayOf(ButtonType),
        images: PropTypes.arrayOf(ImageType),
        catalogue: PropTypes.string,
    }),
};

export default HeroArea;
