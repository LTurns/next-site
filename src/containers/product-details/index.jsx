// @ts-nocheck

import PropTypes from "prop-types";
import clsx from "clsx";
import Head from "next/head";
import SEO from "@components/seo";
import GalleryTab from "@components/product-details/gallery-tab";
import ProductTitle from "@components/product-details/title";
import BidTab from "@components/product-details/bid-tab";
import Catalogue from "@components/catalogue";
// import ExtraInfo from "@components/product-details/extra-info";
import { ProductType } from "@utils/types";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import VideoButton from "@ui/video-button";
import dynamic from "next/dynamic";

import CartContext from "../../Context/cart/CartContext";
import styles from "./product-details.module.css";

const data = {
    catalogue: "/pdfs/Accelair31.pdf",
};

const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const ProductDetailsArea = ({ space, className, product }) => {
    const { addToCart } = useContext(CartContext);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [videoModalOpen, setVideoModalOpen] = useState(false);
    const [currentVideoId, setCurrentVideoId] = useState("");
    const count = 0;

    // Check if description is long (more than 3 paragraphs or very long text)
    const isDescriptionLong =
        product?.description &&
        (product.description.length > 3 ||
            product.description.some((p) => p.paragraph.length > 200));

    // Function to extract YouTube video ID from URL
    const getYouTubeVideoId = (url) => {
        const regex =
            /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    // Function to open video modal
    const openVideoModal = (videoUrl) => {
        const videoId = getYouTubeVideoId(videoUrl);
        if (videoId) {
            setCurrentVideoId(videoId);
            setVideoModalOpen(true);
        }
    };

    return (
        <>
            {/* SEO Meta Tags */}
            <SEO pageTitle={product?.title || "Product Details"} />

            {/* Enhanced SEO with product-specific meta data */}
            <Head>
                <meta
                    name="description"
                    content={
                        product?.description?.length > 0
                            ? `${product.description[0].paragraph.substring(
                                  0,
                                  155
                              )}...`
                            : `${product?.title} - Professional cable blowing equipment from CBS Products. High-quality telecommunications tools and machinery.`
                    }
                />
                <meta
                    name="keywords"
                    content={`${
                        product?.title
                    }, cable blowing, telecommunications, CBS Products, ${product?.category?.join(
                        ", "
                    )}`}
                />
                <meta
                    property="og:title"
                    content={`${product?.title} - CBS Products`}
                />
                <meta
                    property="og:description"
                    content={
                        product?.description?.length > 0
                            ? product.description[0].paragraph.substring(0, 155)
                            : `Professional ${product?.title} from CBS Products`
                    }
                />
                {product?.mainImage && (
                    <meta property="og:image" content={product.mainImage} />
                )}
                <meta property="og:type" content="product" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={`${product?.title} - CBS Products`}
                />
                <meta
                    name="twitter:description"
                    content={
                        product?.description?.length > 0
                            ? product.description[0].paragraph.substring(0, 155)
                            : `Professional ${product?.title} from CBS Products`
                    }
                />
                {product?.mainImage && (
                    <meta name="twitter:image" content={product.mainImage} />
                )}
            </Head>

            {/* Video Modal */}
            {videoModalOpen && (
                <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={videoModalOpen}
                    videoId={currentVideoId}
                    onClose={() => setVideoModalOpen(false)}
                />
            )}

            <div
                className={clsx(
                    "product-details-area",
                    styles.productDetailsArea,
                    space === 1 && "rn-section-gapTop",
                    className
                )}
            >
                <div className="container">
                    {/* Main Product Section */}
                    <div className="row g-5 mb-5">
                        {/* Product Image */}
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.imageWrapper}>
                                <GalleryTab
                                    images={[product?.mainImage]}
                                    videos={product?.videos}
                                />
                            </div>
                        </div>

                        {/* Product Information */}
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.productInfo}>
                                <ProductTitle
                                    title={product?.title}
                                    videos={product?.videos}
                                />

                                <div className={styles.productMeta}>
                                    <div className={styles.productId}>
                                        <span className={styles.label}>
                                            Product ID:
                                        </span>
                                        <span className={styles.value}>
                                            {product?.productId}
                                        </span>
                                    </div>
                                    {product?.category && (
                                        <div className={styles.productCategory}>
                                            <span className={styles.label}>
                                                Category:
                                            </span>
                                            <span className={styles.value}>
                                                {product?.category?.join(", ")}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Description */}
                                {product?.description && (
                                    <div className={styles.productDescription}>
                                        <h6 className={styles.sectionTitle}>
                                            Description
                                        </h6>
                                        <div
                                            className={clsx(
                                                styles.descriptionContent,
                                                {
                                                    [styles.descriptionCollapsed]:
                                                        !showFullDescription &&
                                                        isDescriptionLong,
                                                    [styles.descriptionExpanded]:
                                                        showFullDescription &&
                                                        isDescriptionLong,
                                                }
                                            )}
                                        >
                                            {(showFullDescription ||
                                            !isDescriptionLong
                                                ? product.description
                                                : product.description.slice(
                                                      0,
                                                      2
                                                  )
                                            ).map((p) => (
                                                <p
                                                    key={p.id}
                                                    className={
                                                        styles.descriptionText
                                                    }
                                                >
                                                    {p.paragraph}
                                                </p>
                                            ))}
                                        </div>
                                        {isDescriptionLong && (
                                            <button
                                                type="button"
                                                className={styles.showMoreBtn}
                                                onClick={() =>
                                                    setShowFullDescription(
                                                        !showFullDescription
                                                    )
                                                }
                                            >
                                                {showFullDescription
                                                    ? "Show Less ▲"
                                                    : "Show More ▼"}
                                            </button>
                                        )}
                                    </div>
                                )}

                                {/* Call to Action */}
                                <div className={styles.ctaSection}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        fullWidth
                                        onClick={() =>
                                            addToCart({
                                                quantity: count + 1,
                                                product,
                                            })
                                        }
                                        className={styles.enquireButton}
                                        sx={{
                                            backgroundColor: "#f4d03f",
                                            color: "#2c3e50",
                                            fontWeight: 700,
                                            fontSize: "16px",
                                            textTransform: "uppercase",
                                            letterSpacing: "1px",
                                            padding: "18px 32px",
                                            borderRadius: "12px",
                                            boxShadow:
                                                "0 8px 25px rgba(244, 208, 63, 0.3)",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                backgroundColor: "#e8b339",
                                                transform: "translateY(-2px)",
                                                boxShadow:
                                                    "0 12px 35px rgba(244, 208, 63, 0.4)",
                                            },
                                        }}
                                    >
                                        Enquire Now
                                    </Button>
                                </div>

                                {/* Special Notices */}
                                {product.title === "Hurricane" && (
                                    <div className={styles.financeNotice}>
                                        <h6 className={styles.sectionTitle}>
                                            💰 Finance Options Available
                                        </h6>
                                        <p className={styles.noticeText}>
                                            Finance options available through
                                            our recommended partner PMD Business
                                            Finance.
                                        </p>
                                        <div className={styles.contactInfo}>
                                            <div className={styles.contactItem}>
                                                <a
                                                    className={
                                                        styles.contactLink
                                                    }
                                                    href="mailto:robg@pmdbusinessfinance.co.uk"
                                                >
                                                    Email:
                                                    robg@pmdbusinessfinance.co.uk
                                                </a>
                                            </div>
                                            <div className={styles.contactItem}>
                                                <a
                                                    className={
                                                        styles.contactLink
                                                    }
                                                    href="tel:01616277486"
                                                >
                                                    Tel: 0161 627 7486
                                                </a>
                                            </div>
                                            <div className={styles.contactItem}>
                                                <a
                                                    className={
                                                        styles.contactLink
                                                    }
                                                    href="https://www.pmdbusinessfinance.co.uk"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    www.pmdbusinessfinance.co.uk
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {(product.title ===
                                    "Hard Cable Ratchet Cutter 41mm" ||
                                    product.title ===
                                        "750 Mcm Ratcheting Cable Cutter" ||
                                    product.title === "Cable Croppers") && (
                                    <div className={styles.safetyWarning}>
                                        <h6 className={styles.warningTitle}>
                                            ⚠️ Safety Warning
                                        </h6>
                                        <p className={styles.warningText}>
                                            Never use this tool to cut
                                            electrically energised cable. Severe
                                            or fatal injury may result.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="row">
                        <div className="col-12">
                            <div className={styles.detailsSection}>
                                <h3 className={styles.detailsTitle}>
                                    Product Details
                                </h3>
                                <div className={styles.bidDetails}>
                                    <BidTab
                                        features={product.features}
                                        tables={product.tables}
                                        accessories={product.accessories}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Catalogue Section */}
                    {product.title === "Accelair 3" && (
                        <div className="row mt-5">
                            <div className="col-12">
                                <div className={styles.catalogueSection}>
                                    <Catalogue data={data} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Video Section */}
                    {product?.videos && product.videos.length > 0 && (
                        <div className="row mt-5">
                            <div className="col-12">
                                <div className={styles.videoSection}>
                                    <h3 className={styles.detailsTitle}>
                                        Product Videos
                                    </h3>
                                    <div className={styles.videoGrid}>
                                        {product.videos.map((video, index) => (
                                            <div
                                                key={index}
                                                className={styles.videoItem}
                                            >
                                                <VideoButton
                                                    video={video}
                                                    onClick={() =>
                                                        openVideoModal(video)
                                                    }
                                                    className={
                                                        styles.videoButton
                                                    }
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

ProductDetailsArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    product: PropTypes.shape(ProductType),
};

ProductDetailsArea.defaultProps = {
    space: 1,
};

export default ProductDetailsArea;
