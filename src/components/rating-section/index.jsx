import PropTypes from "prop-types";
import clsx from "clsx";
import StarRating from "@components/ui/star-rating";
import SectionTitle from "@components/section-title/layout-02";

const RatingSection = ({ className, id, space }) => (
    <div
        className={clsx(
            "rn-rating-area",
            space === 1 && "rn-section-gap",
            space === 2 && "pb--70",
            space === 3 && "pt--70",
            space === 4 && "py--70",
            className
        )}
        id={id}
    >
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    {/* <SectionTitle
                        title="Trusted by Industry Leaders"
                        subtitle="Customer Satisfaction"
                        description="Our commitment to quality and service excellence has earned us a 5-star rating from our valued customers across the globe."
                    /> */}
                    <div className="rating-display mt--20">
                        <div className="d-flex justify-content-center align-items-center gap-3 mb--20">
                            <StarRating
                                rating={5}
                                showAnimation
                                animationDelay={100}
                                size="32px"
                                color="#ffd700"
                            />
                        </div>
                        <p className="text-muted">
                            Based on Google reviews and testimonials
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

RatingSection.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    space: PropTypes.oneOf([1, 2, 3, 4]),
};

RatingSection.defaultProps = {
    space: 1,
};

export default RatingSection;
