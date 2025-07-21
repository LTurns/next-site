import PropTypes from "prop-types";
import Image from "next/image";
import TabContent from "react-bootstrap/TabContent";
import TabContainer from "react-bootstrap/TabContainer";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
import VideoButton from "@ui/video-button";
import { ImageType } from "@utils/types";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({
    projectId: "b6e027vh",
    dataset: "production",
});

const urlFor = (source) => {
    // Return a fallback image if source is undefined or invalid
    if (!source || !source.asset || !source.asset._ref) {
        return {
            url: () => "/images/icon.png",
            width: (_w) => ({ url: () => "/images/icon.png" }),
        };
    }
    const image = builder.image(source);
    return image;
};

const GalleryTab = ({ images }) => (
    <div className="product-tab-wrapper">
        <TabContainer defaultActiveKey="nav-0">
            <div className="pd-tab-inner">
                <Nav className="rn-pd-nav rn-pd-rt-content nav-pills">
                    {images?.map((image, index) => (
                        <Nav.Link
                            key={urlFor(image).url()}
                            as="button"
                            eventKey={`nav-${index}`}
                        >
                            <span className="rn-pd-sm-thumbnail">
                                <Image
                                    src={urlFor(image).url()}
                                    alt="Product Image"
                                    width={167}
                                    height={167}
                                />
                            </span>
                        </Nav.Link>
                    ))}
                </Nav>
                <TabContent className="rn-pd-content">
                    {images?.map((image, index) => (
                        <TabPane
                            key={urlFor(image).url()}
                            eventKey={`nav-${index}`}
                        >
                            <div className="rn-pd-thumbnail">
                                <Image
                                    src={urlFor(image).url()}
                                    alt="Product"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </TabPane>
                    ))}
                </TabContent>
            </div>
        </TabContainer>
    </div>
);

GalleryTab.propTypes = {
    images: PropTypes.arrayOf(ImageType),
    // videos: PropTypes.arrayOf(ImageType),
};
export default GalleryTab;
