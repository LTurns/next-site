import PropTypes from "prop-types";
import clsx from "clsx";
import VideoButton from "@ui/video-button";
import { ImageType } from "@utils/types";

const ExtraInfo = ({
    data: { videoId },
}) => (
    <div
        className={clsx("rn-section-gapTop")}
    >
        <div className="container">
            <div className="row">
                <div className="col-12 position-relative">
                    {video?.videoId && <VideoButton videoId={videoId} />}
                    {images?.[0]?.src && (
                        <div className="vedio-wrapper mb--30 mt--50"></div>
                    )}
                </div>
            </div>
        </div>
    </div>
);

ExtraInfo.propTypes = {
    className: PropTypes.string,
    videoId: PropTypes.string
};


export default ExtraInfo;
