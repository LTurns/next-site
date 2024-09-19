// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import PropTypes from "prop-types";
import clsx from "clsx";
import Sticky from "@ui/sticky";
import SEO from "@components/seo";
import GalleryTab from "@components/product-details/gallery-tab";
import ProductTitle from "@components/product-details/title";
import ProductCategory from "@components/product-details/category";
import ProductCollection from "@components/product-details/collection";
import BidTab from "@components/product-details/bid-tab";
import PlaceBet from "@components/product-details/place-bet";
import { ImageType } from "@utils/types";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
// const description = [
//     {
//       "_key": "59c33e049930",
//       "paragraph": "Atmos compressors are engineered to deliver exceptional performance and reliability. We manufacture and supply compressors for a wide range of industrial sectors. Our product range includes screw and piston electric compressors, and mobile compressors powered by diesel or gasoline engines."
//     }
//   ]

// const mainImage = {
//     "_type":"image",
//     "asset":{
//        "_ref":"image-00e218a7e8383bce40d31e863d38e9c7bac1dbe9-328x200-jpg",
//        "_type":"reference"
//     }
//  }

// Demo Image

import { useContext } from "react";
import CartContext from "../../Context/cart/CartContext";

const ProductDetailsArea = ({ space, className, product }) => {
    const { addToCart } = useContext(CartContext);
    let count = 0;

    return (
        <div
            className={clsx(
                "product-details-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <Sticky>
                            <GalleryTab images={[product.mainImage]} />
                        </Sticky>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
                        <div className="rn-pd-content-area">
                            <ProductTitle
                                // title={product.title}
                                // likeCount={product.likeCount}
                                title={product.title}
                            />
                            <span className="bid">
                                <span>{product.productId}</span>
                            </span>
                            <h6 className="title-name">
                                {product?.category?.join(", ")}
                            </h6>

                            <div>
                                {product?.description?.map((p) => (
                                    <p style={{ fontSize: 14 }} key={p.id}>
                                        {p.paragraph}
                                    </p>
                                ))}
                            </div>
                            <div className="rn-bid-details">
                                <BidTab
                                    features={product?.features}
                                    tables={product?.tables}
                                    accessories={product?.accessories}
                                />
                                {/* <PlaceBet
                                // highest_bid={product.highest_bid}
                                // auction_date={product?.auction_date}
                            /> */}
                            </div>

                            <Box mt={1}>
                                <Button
                                    sx={{ backgroundColor: "orange" }}
                                    variant="contained"
                                    onClick={() =>
                                        addToCart({
                                            quantity: count + 1,
                                            product,
                                        })
                                    }
                                >
                                    Add to Cart
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
    product:  PropTypes.arrayOf(PropTypes.shape({})),
    // product: PropTypes.shape({
    //     title: PropTypes.string.isRequired,
    //     likeCount: PropTypes.number,
    //     price: PropTypes.shape({
    //         amount: PropTypes.number.isRequired,
    //         currency: PropTypes.string.isRequired,
    //     }).isRequired,
    //     owner: PropTypes.shape({}),
    //     collection: PropTypes.shape({}),
    //     bids: PropTypes.arrayOf(PropTypes.shape({})),
    //     properties: PropTypes.arrayOf(PropTypes.shape({})),
    //     tags: PropTypes.arrayOf(PropTypes.shape({})),
    //     history: PropTypes.arrayOf(PropTypes.shape({})),
    //     highest_bid: PropTypes.shape({}),
    //     auction_date: PropTypes.string,
    //     images: PropTypes.arrayOf(ImageType),
    // }),
};

ProductDetailsArea.defaultProps = {
    space: 1,
};

export default ProductDetailsArea;
