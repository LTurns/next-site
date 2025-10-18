import Anchor from "@ui/anchor";
import { ProductType } from "@utils/types";
import Image from "next/image";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

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
    const [showAddedToCart, setShowAddedToCart] = useState(false);

    // Handle adding product to cart with success message
    const handleAddToCart = () => {
        addToCart({ quantity: 1, product });
        setShowAddedToCart(true);
        // Hide message after 3 seconds
        setTimeout(() => {
            setShowAddedToCart(false);
        }, 3000);
    };

    return (
        <div className={styles.productCard}>
            {/* Product Image */}
            <div className={styles.imageContainer}>
                {product.hasSubCategories ? (
                    <Link href={`/category/${product.title}`}>
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
                    </Link>
                ) : (
                    <Link href={`/product/${product.title}`}>
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
                    </Link>
                )}
            </div>

            {/* Product Title */}
            <h3 className={styles.productTitle}>{product.title}</h3>

            <div className={styles.brandName}>{product.intro}</div>

            {/* Product ID */}
            <div className={styles.productId}>{product.productId}</div>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
                {!product.hasSubCategories && (
                    <a
                        href={
                            isAccessory
                                ? `/product/${product.name}`
                                : `/product/${product.title}`
                        }
                        className={styles.addToCartButton}
                    >
                        View Details
                    </a>
                )}

                {!product.hasSubCategories && (
                    <button
                        type="button"
                        className={styles.viewProductButton}
                        onClick={handleAddToCart}
                    >
                        ENQUIRE
                    </button>
                )}

                {/* Added to Cart Message */}
                {!product.hasSubCategories && showAddedToCart && (
                    <div className={styles.addedToCartMessage}>
                        ✅ Added to cart
                    </div>
                )}

                {product.hasSubCategories && (
                    <>
                        <div className={styles.divider} />
                        <a
                            href={`/category/${product.title}`}
                            className={styles.viewProductButton}
                        >
                            View Products
                        </a>
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
