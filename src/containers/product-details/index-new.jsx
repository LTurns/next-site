// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import PropTypes from "prop-types";
import clsx from "clsx";
import Sticky from "@ui/sticky";
import GalleryTab from "@components/product-details/gallery-tab";
import ProductTitle from "@components/product-details/title";
import BidTab from "@components/product-details/bid-tab";
import Catalogue from "@components/catalogue";
import { ProductType } from "@utils/types";
import { Box, Button } from "@mui/material";
import { useContext } from "react";
import CartContext from "../../Context/cart/CartContext";
import styles from "./product-details.module.css";

const data = {
    catalogue: "/pdfs/Accelair31.pdf",
};

const ProductDetailsArea = ({ space, className, product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div
            className={clsx(
                "product-details-area",
                styles.productDetailsArea,
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <Sticky>
                            <GalleryTab
                                images={[product.mainImage]}
                                videos={product.videos}
                            />
                        </Sticky>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
                        <div
                            className={clsx(
                                "rn-pd-content-area",
                                styles.contentArea
                            )}
                        >
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

                            {product?.description && (
                                <div className={styles.productDescription}>
                                    <h6 className={styles.sectionTitle}>
                                        Description
                                    </h6>
                                    {product.description.map((p) => (
                                        <p
                                            key={p.id}
                                            className={styles.descriptionText}
                                        >
                                            {p.paragraph}
                                        </p>
                                    ))}
                                </div>
                            )}

                            {/* Special Conditions and Notices */}
                            {product.title === "Hurricane" && (
                                <div className={styles.financeNotice}>
                                    <h6 className={styles.sectionTitle}>
                                        Finance Options Available
                                    </h6>
                                    <p className={styles.noticeText}>
                                        Finance options available through our
                                        recommended partner PMD Business
                                        Finance. Please contact either Rob
                                        Greenhalgh or Lauren O&apos;Connor using
                                        these details:
                                    </p>
                                    <div className={styles.contactInfo}>
                                        <div className={styles.contactItem}>
                                            <a
                                                className={styles.contactLink}
                                                href="mailto:robg@pmdbusinessfinance.co.uk"
                                            >
                                                Email:
                                                robg@pmdbusinessfinance.co.uk
                                            </a>
                                        </div>
                                        <div className={styles.contactItem}>
                                            <a
                                                className={styles.contactLink}
                                                href="mailto:lauren@pmdbusinessfinance.co.uk"
                                            >
                                                Email:
                                                lauren@pmdbusinessfinance.co.uk
                                            </a>
                                        </div>
                                        <div className={styles.contactItem}>
                                            <a
                                                className={styles.contactLink}
                                                href="tel:01616277486"
                                            >
                                                Tel: 0161 627 7486
                                            </a>
                                        </div>
                                        <div className={styles.contactItem}>
                                            <a
                                                className={styles.contactLink}
                                                href="https://www.pmdbusinessfinance.co.uk"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Web:
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
                                        Never use this tool to cut electrically
                                        energised cable. Severe or fatal injury
                                        may result.
                                    </p>
                                </div>
                            )}

                            {product.title === "Accelair 3" && (
                                <div className={styles.catalogueSection}>
                                    <Catalogue data={data} />
                                </div>
                            )}

                            <div
                                className={clsx(
                                    "rn-bid-details",
                                    styles.bidDetails
                                )}
                            >
                                <BidTab
                                    features={product.features}
                                    tables={product.tables}
                                    accessories={product.accessories}
                                />
                            </div>

                            <Box className={styles.addToCartSection}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    onClick={() =>
                                        addToCart({
                                            quantity: 1,
                                            product,
                                        })
                                    }
                                    sx={{
                                        backgroundColor: "#f4d03f",
                                        color: "#2c3e50",
                                        fontWeight: 700,
                                        fontSize: "14px",
                                        textTransform: "uppercase",
                                        letterSpacing: "1px",
                                        padding: "16px 24px",
                                        borderRadius: "12px",
                                        boxShadow:
                                            "0 8px 25px rgba(244, 208, 63, 0.2)",
                                        "&:hover": {
                                            backgroundColor: "#e8b339",
                                            transform: "translateY(-2px)",
                                            boxShadow:
                                                "0 12px 35px rgba(232, 179, 57, 0.3)",
                                        },
                                    }}
                                >
                                    ENQUIRE NOW
                                </Button>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductDetailsArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    product: PropTypes.arrayOf(ProductType),
};

ProductDetailsArea.defaultProps = {
    space: 1,
};

export default ProductDetailsArea;
