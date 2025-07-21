// @ts-nocheck

import PropTypes from "prop-types";
import clsx from "clsx";
import Head from "next/head";
import SEO from "@components/seo";
import GalleryTab from "@components/product-details/gallery-tab";
import ProductTitle from "@components/product-details/title";
import BidTab from "@components/product-details/bid-tab";
import Catalogue from "@components/catalogue";
import { ProductType } from "@utils/types";
import { Button } from "@mui/material";
import { useContext, useState } from "react";

import CartContext from "../../Context/cart/CartContext";
import styles from "./product-details.module.css";

const data = {
    catalogue: "/pdfs/Accelair31.pdf",
};

const ProductDetailsArea = ({ space, className, product }) => {
    const { addToCart } = useContext(CartContext);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [showAddedToCart, setShowAddedToCart] = useState(false);
    const count = 0;

    // Check if description needs "Show More" button (more than 1 paragraph)
    const isDescriptionLong =
        product?.description && product.description.length > 1;

    // Handle adding product to cart with success message
    const handleAddToCart = () => {
        addToCart({
            quantity: count + 1,
            product,
        });
        setShowAddedToCart(true);
        // Hide message after 3 seconds
        setTimeout(() => {
            setShowAddedToCart(false);
        }, 3000);
    };

    // Generate SEO content
    const generateSEOContent = () => {
        const title = `${product?.title} - CBS Products`;
        const description =
            product?.description?.length > 0
                ? `${product.description[0].paragraph.substring(0, 155)}...`
                : `${product?.title} - Professional cable blowing equipment from CBS Products. High-quality telecommunications tools and machinery.`;
        const keywords = `${
            product?.title
        }, cable blowing, telecommunications, CBS Products${
            product?.category ? `, ${product.category.join(", ")}` : ""
        }`;

        return { title, description, keywords };
    };

    const { title, description, keywords } = generateSEOContent();

    return (
        <>
            {/* SEO Meta Tags */}
            <SEO pageTitle={product?.title || "Product Details"} />
            <Head>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />

                {/* Open Graph tags */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="product" />
                {product?.mainImage && (
                    <meta property="og:image" content={product.mainImage} />
                )}

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                {product?.mainImage && (
                    <meta name="twitter:image" content={product.mainImage} />
                )}
            </Head>

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
                                <GalleryTab images={[product?.mainImage]} />
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

                                {/* <ExtraInfo
                                    data={{ video: product?.videos[0] }}
                                    className={styles.extraInfo}
                                /> */}

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
                                                      1
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
                                        onClick={handleAddToCart}
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

                                    {/* Added to Cart Message */}
                                    {showAddedToCart && (
                                        <div
                                            className={
                                                styles.addedToCartMessage
                                            }
                                        >
                                            ✅ Added to cart
                                        </div>
                                    )}
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
