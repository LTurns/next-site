import PropTypes from "prop-types";
import VideoButton from "@ui/video-button";
import clsx from "clsx";
import { useState } from "react";
import dynamic from "next/dynamic";
import { FaPlay } from "react-icons/fa";

import { Portal } from "react-portal";

const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const ProductTitle = ({ className, title, videos }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={clsx("pd-title-area", className)}>
            <h4 className="title">{title}</h4>
            {videos?.length !== 0 ? (
                <span>
                    <button
                        type="button"
                        style={{ border: "none" }}
                        // className="vedio-wrapper"
                        onClick={() => setOpen(true)}
                    >
                        {/* Play Video   */}
                        <FaPlay size={40} className="play-button" />
                    </button>
                    {videos?.map(
                        (video) =>
                            isOpen && (
                                <Portal>
                                    <ModalVideo
                                        isOpen={isOpen}
                                        videoId={video}
                                        channel="youtube"
                                        onClose={() => setOpen(false)}
                                    />
                                </Portal>
                            )
                    )}
                </span>
            ) : (
                " "
            )}
        </div>
    );
};

ProductTitle.propTypes = {
    className: PropTypes.string,
    videos: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
};

export default ProductTitle;
