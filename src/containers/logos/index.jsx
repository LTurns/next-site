import PropTypes from "prop-types";
import clsx from "clsx";
import Slider, { SliderItem } from "@ui/slider";
import { SectionTitleType, ProductType } from "@utils/types";
import Image from "next/image";
import SectionTitle from "@components/section-title/layout-02";
import whereToBuy from "../../data/whereToBuy.json";

const SliderOptions = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 2,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1399,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 4
            },
        },
    ],
};

const ExploreLogos = ({ className, space }) => (
    <div
        className={clsx(
            "en-product-area",
            space === 1 && "rn-section-gapTop",
            space === 2 && "rn-section-gap",
            space === 3 && "rn-section-gapBottom",
            className
        )}
    >
        <div className="container">
        <div className="row">
                    <div className="col-12 mb--50">
                        <SectionTitle title="Our Distributors" />
                    </div>
                </div>
                <div className="row mt--80">
                    <div className="col-lg-12">
                        <Slider
                            options={SliderOptions}
                            className="banner-one-slick slick-arrow-style-one slick-gutter-15"
                        >
                            {whereToBuy.map((dist) => (
                                <SliderItem
                                    key={dist.name}
                                    className="logos-carousel"
                                >
                                                        <Image
                        src={`/images/whereToBuy/${dist.img}`}
                        alt={dist.name}
                        width={0}
                        height={0}
                        style={{ height: '100%', width: 'auto' }}
                    />
                                </SliderItem>
                            ))}
                        </Slider>
                    </div>
                </div>
        </div>
    </div>
);

ExploreLogos.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2, 3, 4]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        products: PropTypes.arrayOf(ProductType).isRequired,
        placeBid: PropTypes.bool,
    }),
};

ExploreLogos.defaultProps = {
    space: 1,
};

export default ExploreLogos;
