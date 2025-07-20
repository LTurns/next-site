import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-02";
import Product from "@components/product/layout-03";
import { SectionTitleType, ProductType } from "@utils/types";
import Catalogue from "@components/catalogue";

const ProductArea = ({ className, id, space, data }) => (
    <div
        className={clsx("rn-service-area", space === 2 && "pb--70", className)}
        id={id}
    >
        <div className="container">
            {data?.section_title && (
                <>
                    <div className="row">
                        <div className="col-12 mb--50 mt--50">
                            <SectionTitle title={data.section_title} />
                        </div>
                    </div>
                    <Catalogue data={data.catalogue} />
                </>
            )}
            {data?.items && (
                <div className="row g-5">
                    {data.items.map((item) => (
                        <div
                            className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 col-12"
                            key={item.id}
                        >
                            <Product
                                product={item}
                                className="rn-service-one color-shape-7"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
);

ProductArea.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        items: PropTypes.arrayOf(ProductType),
        catalogue: PropTypes.string,
    }),
};
ProductArea.defaultProps = {
    space: 1,
};

export default ProductArea;
