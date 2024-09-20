import { useState } from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import Image from "next/image";
import clsx from "clsx";
import Anchor from "@ui/anchor";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({
    projectId: "b6e027vh",
    dataset: "production",
});

const urlFor = (source) => {
    const image = builder.image(source);
    return image;
};

const Product = ({ title, slug, image }) => {
    return (
        <>
            <div className={clsx("product-style-one")}>
                <div className="card-thumbnail">
                    {image?.src && (
                        <Anchor path={`/product/${slug}`}>
                            <Image
                                src={urlFor(image).width(250).url()}
                                alt={image?.alt || title }
                                width={533}
                                height={533}
                            />
                        </Anchor>
                    )}
                </div>
                <div className="product-share-wrapper"></div>
                <Anchor path={`/product/${slug}`}>
                    <span className="product-name">{title}</span>
                </Anchor>
            </div>
        </>
    );
};

Product.propTypes = {
    overlay: PropTypes.bool,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.object,
};

Product.defaultProps = {
    overlay: false,
};

export default Product;
