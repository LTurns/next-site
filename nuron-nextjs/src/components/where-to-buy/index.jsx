import { useState } from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import Image from "next/image";
import clsx from "clsx";
import Anchor from "@ui/anchor";
import ClientAvatar from "@ui/client-avatar";
import ProductBid from "@components/product-bid";
// import Button from "@ui/button";
import { ImageType } from "@utils/types";
import PlaceBidModal from "@components/modals/placebid-modal";

import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Divider } from "@mui/material";
import { FaLocationPin } from "react-icons/fa6";

import imageUrlBuilder from "@sanity/image-url";
import { CardActionArea } from "@mui/material";

const builder = imageUrlBuilder({
    projectId: "b6e027vh",
    dataset: "production",
});

const CountdownTimer = dynamic(() => import("@ui/countdown/layout-01"), {
    ssr: false,
});

const ShareDropdown = dynamic(() => import("@components/share-dropdown"), {
    ssr: false,
});

const urlFor = (source) => {
    const image = builder.image(source);
    return image;
};

const useStyles = makeStyles({
    category: {
        textAlign: "right",
    },
});

const WhereToBuy = ({
    name,
    roadOne,
    roadTwo,
    county,
    postcode,
    country,
    contact,
    mobile,
    fax,
    tel,
    email,
    website,
    image,
}) => {
    const classes = useStyles();
    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };

    return (
        <>
            <div className={clsx("lg-product-wrapper")}>
                <div style={{ height: 625 }} className="color-shape-7">
                    <div className="where-to-buy-content">
                        <Anchor path={website}>
                            <div
                                style={{ background: "white", borderRadius: 8 }}
                            >
                                <Image
                                    style={{ objectFit: "contain" }}
                                    src={`/images/whereToBuy/${image}`}
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </Anchor>
                        <Divider sx={{ marginBlock: 2 }}></Divider>
                        <FaLocationPin />

                        <Anchor path={website}>
                            <p
                                class="title"
                                style={{ fontSize: 15, fontWeight: 500 }}
                            >
                                {name}
                            </p>
                        </Anchor>

                        <Divider sx={{ marginBlock: 2 }}></Divider>
                        {roadOne}
                        <br></br>
                        {roadTwo}
                        <br></br>
                        {county}
                        <br></br>
                        {country}
                        <br></br>
                        {postcode}
                        <Divider sx={{ marginBlock: 2 }}></Divider>
                        {contact ? <div>Contact: {contact}</div> : ""}
                        <br></br>
                        {tel ? <a href={`tel:${tel}`}>tel: {tel}</a> : ""}
                        <br></br>
                        {mobile ? (
                            <a href={`mobile:${mobile}`}>mobile: {mobile}</a>
                        ) : (
                            ""
                        )}
                        <br></br>
                        {email ? (
                            <a href={`mailto:${email}`}>email: {email}</a>
                        ) : (
                            ""
                        )}
                        <br></br>
                        {fax ? <a href={`tel:${fax}`}>fax: {fax}</a> : ""}
                        <br></br>
                    </div>
                </div>
            </div>
        </>
    );
};

WhereToBuy.propTypes = {
    name: PropTypes.string,
    website: PropTypes.string,
    roadOne: PropTypes.string,
    roadTwo: PropTypes.string,
    county: PropTypes.string,
    postcode: PropTypes.string,
    country: PropTypes.string,
    contact: PropTypes.string,
    mobile: PropTypes.string,
    fax: PropTypes.string,
    tel: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
    // latestBid: PropTypes.string.isRequired,
    // price: PropTypes.shape({
    //     amount: PropTypes.number.isRequired,
    //     currency: PropTypes.string.isRequired,
    // }).isRequired,
    // likeCount: PropTypes.number.isRequired,
    // auction_date: PropTypes.string,
    image: PropTypes.object,
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

WhereToBuy.defaultProps = {
    overlay: false,
};

export default WhereToBuy;
