import PropTypes from "prop-types";
import StarRating from "@components/ui/star-rating";

// Simple 5-star rating with animation - can be used anywhere
export const InlineStarRating = ({
    rating,
    size,
    animationDelay,
    className,
    showText,
}) => (
    <div className={`d-flex align-items-center gap-2 ${className}`}>
        <StarRating
            rating={rating}
            showAnimation
            animationDelay={animationDelay}
            size={size}
            color="#ffd700"
        />
        {showText && <span className="text-muted small">({rating}.0/5.0)</span>}
    </div>
);

InlineStarRating.propTypes = {
    rating: PropTypes.number,
    size: PropTypes.string,
    animationDelay: PropTypes.number,
    className: PropTypes.string,
    showText: PropTypes.bool,
};

InlineStarRating.defaultProps = {
    rating: 5,
    size: "20px",
    animationDelay: 150,
    className: "",
    showText: true,
};

export default InlineStarRating;
