import PropTypes from "prop-types";
import clsx from "clsx";
import Anchor from "@ui/anchor";
import Image from "next/image";

const CategoryCard = ({ className, src, title, path }) => (
    <Anchor className={clsx("category-style-one", className)} path={path}>
                                                    <Image
                                                src={src}
                                                alt={
                                                    "nuron-brand_nft"
                                                }
                                                sizes="200px"
                                                fill
                                                style={{
                                                    objectFit: "contain",
                                                }}
                                            />
        <span className="category-label">{title}</span>
    </Anchor>
);

CategoryCard.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default CategoryCard;
