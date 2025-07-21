import Anchor from "@ui/anchor";
import { ProductType } from "@utils/types";
import Image from "next/image";
import { useContext } from "react";
import PropTypes from "prop-types";

import imageUrlBuilder from "@sanity/image-url";
import CartContext from "../../../Context/cart/CartContext";
import styles from "./product-animations.module.css";

const builder = imageUrlBuilder({
    projectId: "b6e027vh",
    dataset: "production",
});

const urlFor = (source) => {
    // Return a fallback image if source is undefined or invalid
    if (!source || !source.asset || !source.asset._ref) {
        return { url: () => "/images/icon.png" }; // Fallback to existing icon
    }
    const image = builder.image(source);
    return image;
};

const Product = ({ product, isAccessory }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className={styles.productCard}>
            {/* Product Image */}
            <div className={styles.imageContainer}>
                <Anchor path={`/product/${product.title}`}>
                    <Image
                        className={styles.productImage}
                        src={
                            product?.mainImage
                                ? urlFor(product.mainImage).url()
                                : urlFor(product.mainImg).url()
                        }
                        width={180}
                        height={180}
                        alt={product.title}
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </Anchor>
            </div>

            {/* Product Title */}
            <Anchor path={`/product/${product.title}`}>
                <h3 className={styles.productTitle}>{product.title}</h3>
            </Anchor>

            <div className={styles.brandName}>{product.intro}</div>

            {/* Product ID */}
            <div className={styles.productId}>{product.productId}</div>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
                {!product.hasSubCategories && (
                    <button
                        type="button"
                        className={styles.addToCartButton}
                        onClick={() => addToCart({ quantity: 1, product })}
                    >
                        ENQUIRE
                    </button>
                )}

                {!product.hasSubCategories && (
                    <Anchor
                        path={
                            isAccessory
                                ? `/product/${product.name}`
                                : `/product/${product.title}`
                        }
                    >
                        <button
                            type="button"
                            className={styles.viewProductButton}
                        >
                            View Details
                        </button>
                    </Anchor>
                )}

                {product.hasSubCategories && (
                    <>
                        <div className={styles.divider} />
                        <Anchor path={`/category/${product.title}`}>
                            <button
                                type="button"
                                className={styles.viewProductButton}
                            >
                                View Products
                            </button>
                        </Anchor>
                    </>
                )}
            </div>
        </div>
    );
};

Product.propTypes = {
    product: ProductType,
    isAccessory: PropTypes.bool,
};

export default Product;
