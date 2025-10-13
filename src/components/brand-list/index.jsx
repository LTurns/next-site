import PropTypes from "prop-types";
import Image from "next/image";
import { ItemType } from "@utils/types";

const BrandList = ({ data }) => (
    <div className="footer-top">
        <div className="container">
            <div className="row">
                <ul className="nu-brand-area">
                    {data.items.map(({ id, image }) => (
                        <li key={id}>
                            {image?.src && (
                                <Image
                                    src={image.src}
                                    alt={image?.alt || "nuron-brand_nft"}
                                    sizes="200px"
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

BrandList.propTypes = {
        data: PropTypes.shape({
            items: PropTypes.arrayOf(ItemType),
        }),
};

export default BrandList;