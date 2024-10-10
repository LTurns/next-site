import PropTypes from "prop-types";
import VideoButton from "@ui/video-button";
import clsx from "clsx";

const ProductTitle = ({ className, title, videos }) => (
    <div className={clsx("pd-title-area", className)}>
        <h4 className="title">{title}</h4>
        <div className="pd-react-area">
            {/* <div className="heart-count">
                <i className="feather-heart" />
                <span>{likeCount}</span>
            </div> */}
            {/* <div className="count">
                <ShareDropdown />
            </div> */}
        </div>
    </div>
);

ProductTitle.propTypes = {
    className: PropTypes.string,
    videos: PropTypes.array
};

ProductTitle.defaultProps = {
    likeCount: 0,
};

export default ProductTitle;
