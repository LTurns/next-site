import { useState } from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import Anchor from "@ui/anchor";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import imageUrlBuilder from "@sanity/image-url";

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

const useStyles = makeStyles({
    category: {
        textAlign: "right",
    },
});

const Product = ({
    title,
    slug,
    intro,
    category,
    // latestBid,
    // price,
    // likeCount,
    // auction_date,
    image,
    // bitCount,
    // authors,
    // placeBid,
    // disableShareDropdown,
}) => {
    const classes = useStyles();
    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };

    return (
        <>
            <Card
                borderColor="primary.main"
                sx={{
                    bgcolor: "#24243557",
                    color: "white",
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
                <Anchor path={"/product/" + title}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={urlFor(image).url()}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography
                            variant="subtitle1"
                            color="yellow"
                            className={classes.category}
                        >
                            {category.join(", ")}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}{" "}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="#D3D3D3"
                            fontSize={14}
                        >
                            {intro}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link
                            size="large"
                            fontSize="14"
                            href={"/product/" + title}
                        ></Link>
                    </CardActions>
                </Anchor>
            </Card>
        </>
    );
};

Product.propTypes = {
    overlay: PropTypes.bool,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    category: [],
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

Product.defaultProps = {
    overlay: false,
};

export default Product;
