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
    const image = builder.image(source);
    return image;
};

const GalleryTab = ({ images, videos }) => (
    <div className="product-tab-wrapper">
        <TabContainer defaultActiveKey="nav-0">
            <div className="pd-tab-inner">
                <Nav className="rn-pd-nav rn-pd-rt-content nav-pills">
                    {images?.map((image, index) => (
                        <Nav.Link
                            key={urlFor(image).width(250).url()}
                            as="button"
                            eventKey={`nav-${index}`}
                        >
                            <span className="rn-pd-sm-thumbnail">
                                <Image
                                    src={urlFor(image).width(250).url()}
                                    alt={"Product"}
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
                                    alt={"Product"}
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
    videos: PropTypes.arrayOf(ImageType)
};
export default GalleryTab;
