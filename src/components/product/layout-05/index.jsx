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

const Product = ({
    name,
    roadOne,
    roadTwo,
    country,
    county,
    image,
    postcode,
    website,
}) => {
    const classes = useStyles();
    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };

    return (
        <>
            <Card
                sx={{
                    height: 450,
                    ":hover": {
                        transition: "500ms ease",
                        transform: "translateY(-10px)",
                        boxShadow: "inset 0px 0px 15px 2px #3b3b3b",
                    },
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        transition: "500ms all ease-in-out",
                    },
                }}
            >
                <Anchor path={website}>
                    <img src={`images/whereToBuy/${image}`} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}{" "}
                        </Typography>
                        <Typography variant="subtitle1" fontSize={14}>
                            {roadOne}
                        </Typography>
                        <Typography variant="subtitle1" fontSize={14}>
                            {roadTwo}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link size="large" fontSize="14" href={website}></Link>
                    </CardActions>
                </Anchor>
            </Card>
        </>
    );
};

Product.propTypes = {
    name: PropTypes.string,
    roadOne: PropTypes.sring,
    roadTwo: PropTypes.string,
    country: PropTypes.string,
    county: PropTypes.string,
    image: PropTypes.string,
    postcode: PropTypes.string,
    website: PropTypes.string,
};
export default Product;
