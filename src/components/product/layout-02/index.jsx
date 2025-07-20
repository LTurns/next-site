import { useContext } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import clsx from "clsx";
import Anchor from "@ui/anchor";
import { MdAddShoppingCart } from "react-icons/md";
import { ProductType } from "@utils/types";

import imageUrlBuilder from "@sanity/image-url";
import { Divider, Button } from "@mui/material";
import CartContext from "../../../Context/cart/CartContext";

const builder = imageUrlBuilder({
    projectId: "b6e027vh",
    dataset: "production",
});

const urlFor = (source) => {
    const image = builder.image(source);
    return image;
};

const Product = ({ product }) => {
    const count = 0;

    console.log("heyyyyyyy", product);

    const { addToCart } = useContext(CartContext);
    return (
        <div className={clsx("lg-product-wrapper product-card")}>
            <div style={{ height: 270 }}>
                <Anchor path={`/product/${product.title}`}>
                    <div style={{ background: "white", borderRadius: 8 }}>
                        <Image
                            style={{
                                objectFit: "contain",
                                marginInline: "auto",
                                display: "block",
                            }}
                            src={urlFor(product?.mainImage).url()}
                            width={200}
                            height={200}
                            alt={product.title}
                        />
                    </div>
                </Anchor>
                <div className="read-content">
                    <Anchor
                        className="more-author-text"
                        path={`/product/${product.title}`}
                    />
                    <div
                        className="product-id"
                        style={{ textAlign: "right", marginTop: 10 }}
                    >
                        {product.productId}
                    </div>
                    <Anchor path={`/product/${product.title}`}>
                        <p className="title product-title">{product.title}</p>
                    </Anchor>
                    {/* <span className="product-intro">{product.intro}</span> */}
                </div>
            </div>

            <Divider sx={{ marginTop: 2 }} />

            <Anchor path={`/product/${product.title}`}>
                <Button variant="contained">View Product</Button>
            </Anchor>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 8,
                }}
            >
                <Anchor
                    className="read-more-button"
                    path={`/product/${product.title}`}
                    ariaLabel="read more"
                >
                    <i className="feather-arrow-right" />
                </Anchor>

                <Button
                    className="shopping-cart"
                    aria-label="shopping cart"
                    onClick={() => addToCart({ quantity: count + 1, product })}
                >
                    <MdAddShoppingCart style={{ textAlign: "right" }} />
                </Button>
            </div>
        </div>
    );
};

Product.propTypes = {
    // title: PropTypes.string.isRequired,
    // slug: PropTypes.string.isRequired,
    // intro: PropTypes.string.isRequired,
    // category: [],
    // productId: PropTypes.string,
    // latestBid: PropTypes.string.isRequired,
    // price: PropTypes.shape({
    //     amount: PropTypes.number.isRequired,
    //     currency: PropTypes.string.isRequired,
    // }).isRequired,
    // likeCount: PropTypes.number.isRequired,
    // auction_date: PropTypes.string,
    product: PropTypes.arrayOf(ProductType),
    // authors: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         name: PropTypes.string.isRequired,
    //         slug: PropTypes.string.isRequired,
    //         image: ImageType.isRequired,
    //     })
    // ),
    // bitCount: PropTypes.number,
    // placeBid: PropTypes.bool,
    // disableShareDropdown: PropTypes.bool,
};

export default Product;
