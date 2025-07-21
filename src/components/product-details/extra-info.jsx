import PropTypes from "prop-types";
import clsx from "clsx";
import VideoButton from "@ui/video-button";

const ExtraInfo = ({ data: { video } }) => (
    <div className={clsx("rn-section-gapTop")}>
        <div className="container">
            <div className="row">
                <div className="col-12 position-relative">
                    {video && <VideoButton videoId={video} />}
                </div>
            </div>
        </div>
    </div>
);

ExtraInfo.propTypes = {
    data: PropTypes.shape({
        video: PropTypes.string,
    }),
};

export default ExtraInfo;
