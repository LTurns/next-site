import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import clsx from "clsx";
import Anchor from "@ui/anchor";
import ClientAvatar from "@ui/client-avatar";
import Button from "@ui/button";
import ShareDropdown from "@components/share-dropdown";
import PlaceBidModal from "@components/modals/placebid-modal";
import { ImageType } from "@utils/types";
import { MdAddShoppingCart, MdDonutLarge } from "react-icons/md";

import { useContext } from "react";
import CartContext from "../../../Context/cart/CartContext";

import imageUrlBuilder from "@sanity/image-url";
import { CardActionArea, Divider } from "@mui/material";

const builder = imageUrlBuilder({
    projectId: "b6e027vh",
    dataset: "production",
});

const urlFor = (source) => {
    const image = builder.image(source);
    return image;
};

const Product = ({
    // title,
    // slug,
    // intro,
    // productId,
    // category,
    // // latestBid,
    // // price,
    // // likeCount,
    // // auction_date,
    // image,
    product,
}) => {
    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };

    let count = 0;

    const { addToCart } = useContext(CartContext);
    return (
        <>
            <div className={clsx("lg-product-wrapper product-card")}>
                <div style={{ height: 520 }} className="color-shape-7">
                    <Anchor path={`/product/${product.title}`}>
                        <div style={{ background: "white", borderRadius: 8 }}>
                            {/* <img src={urlFor(image).width(250).url()}
                                /> */}
                            <Image
                                style={{
                                    objectFit: "contain",
                                    marginInline: "auto",
                                    display: "block",
                                    width: 300,
                                    height: 300,
                                }}
                                src={urlFor(product.mainImage).url()}
                                width={300}
                                height={300}
                            />
                        </div>
                    </Anchor>
                    <div className="read-content">
                        <div className="product-share-wrapper">
                            <div className="profile-share">
                                <Anchor
                                    className="more-author-text"
                                    path={`/product/${product.title}`}
                                ></Anchor>
                            </div>
                            <div class="product-id" style={{ fontSize: 10 }}>
                                {product.productId}
                            </div>
                        </div>
                        <Anchor path={`/product/${product.title}`}>
                            <p
                                class="title"
                                style={{ fontSize: 15, fontWeight: 500 }}
                            >
                                {product.title}
                            </p>
                        </Anchor>
                        <Divider sx={{ marginBlock: 2 }}></Divider>
                        <span>{product.intro}</span>
                    </div>
                </div>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Anchor
                        className="read-more-button"
                        path={`/product/${product.title}`}
                    >
                        <i className="feather-arrow-right" />
                    </Anchor>

                    <Button
                        class="shopping-cart"
                        onClick={() =>
                            addToCart({ quantity: count + 1, product })
                        }
                    >
                        <MdAddShoppingCart style={{ textAlign: "right" }} />
                    </Button>
                </div>
            </div>
        </>
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
    product: PropTypes.object,
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
