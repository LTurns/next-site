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
import Catalogue from "@components/catalogue";
// import ExtraInfo from "@components/product-details/extra-info";
import { ImageType } from "@utils/types";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useContext } from "react";
import CartContext from "../../Context/cart/CartContext";
import VideoButton from "@ui/video-button";
import { useState } from "react";
import dynamic from "next/dynamic";

const data = {
    "catalogue": "/pdfs/Accelair31.pdf",
}


import { Portal } from "react-portal";

const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const ProductDetailsArea = ({ space, className, product }) => {
    const { addToCart } = useContext(CartContext);
    const [isOpen, setOpen] = useState(false);
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
                            <GalleryTab images={[product.mainImage]} videos={product.videos} />
                        </Sticky>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
                        <div className="rn-pd-content-area">
                            <ProductTitle
                                // title={product.title}
                                // likeCount={product.likeCount}
                                title={product?.title}
                                videos={product?.videos}
                            />
                            <span className="bid">
                                <span>{product?.productId}</span>
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
                                { product.title === 'Hurricane' ?  
                                <><p style={{ fontSize: 14, marginTop: 10 }}>
                                        Finance options available through our recommended partner PMD Business
                                        Finance. Please contact either Rob Greenhalgh or Lauren O’Connor using
                                        these details:
                                    </p>
                                    <p style={{ fontSize: 14 }}>
                                            <a
                                                class="green--text my-2"
                                                href="email:robg@pmdbusinessfinance.co.uk"
                                            >Email:robg@pmdbusinessfinance.co.uk</a><br></br><a
                                                class="green--text my-2"
                                                href="email:lauren@pmdbusinessfinance.co.uk"
                                            >Email:lauren@pmdbusinessfinance.co.uk</a><br></br><a
                                                class="green--text my-2"
                                                href="tel:01616277486"
                                            >Tel: 0161 627 7486</a><br></br>
                                            <a href="www.pmdbusinessfinance.co.uk">Web: www.pmdbusinessfinance.co.uk</a>
                                    </p></> : "" }

                                    { product.title === 'Hard Cable Ratchet Cutter 41mm' ||
                                    product.title === '750 Mcm Ratcheting Cable Cutter' ||
                                    product.title ===  'Cable Croppers' ? <>
      <p
        style={{fontSize: 14, color: 'red', marginTop: 10}}
      >
        Never use this tool to cut electrically energised cable. Severe or fatal
        injury may result.
      </p></> : ""}

      { product.title === 'Accelair 3' ?
      <><Catalogue data={data}></Catalogue></> : ""}

                                                <div className="rn-bid-details">
                                                    <BidTab
                                                        features={product.features}
                                                        tables={product.tables}
                                                        accessories={product.accessories} />
                                                    {/* <ExtraInfo /> */}
                                                </div>

                                                <Box mt={1}>
                                                    <Button
                                                        variant="contained"
                                                        onClick={() => addToCart({
                                                            quantity: count + 1,
                                                            product,
                                                        })}
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
