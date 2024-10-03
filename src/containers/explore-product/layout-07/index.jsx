import PropTypes from "prop-types";
import clsx from "clsx";
import Product from "@components/product/layout-02";
import Slider, { SliderItem } from "@ui/slider";
import { SectionTitleType, ProductType } from "@utils/types";

const SliderOptions = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    dots: false,
    responsive: [
        {
            breakpoint: 1399,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
            },
        },
    ],
};

const ExploreProductArea = ({ data, className, space }) => (
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
            {data?.products && (
                <div className="row mt--80">
                    <div className="col-lg-12">
                        <Slider
                            options={SliderOptions}
                            className="banner-one-slick slick-arrow-style-one slick-gutter-15"
                        >
                            {data.products.map((prod) => (
                                <SliderItem
                                    key={prod._id}
                                    className="single-slide-product"
                                >
                                    <Product
                                        product={prod}
                                        // title={prod.title}
                                        // slug={prod.title}
                                        // intro={prod.intro}
                                        // category={prod.category}
                                        // productId={prod.productId}
                                        // // latestBid={prod.latestBid}
                                        // // price={prod.price}
                                        // // likeCount={prod.likeCount}
                                        // image={prod.mainImage}
                                    />
                                </SliderItem>
                            ))}
                        </Slider>
                    </div>
                </div>
            )}
        </div>
    </div>
);

ExploreProductArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2, 3, 4]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        products: PropTypes.arrayOf(ProductType).isRequired,
        placeBid: PropTypes.bool,
    }),
};

ExploreProductArea.defaultProps = {
    space: 1,
};

export default ExploreProductArea;
