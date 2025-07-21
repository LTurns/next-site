import PropTypes from "prop-types";
import clsx from "clsx";
import Product from "@components/product/layout-03";
import { ProductType } from "@utils/types";

const ProductArea = ({ space, className, data: { products } }) => (
    <div
        className={clsx(
            "product-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5">
                {products.map((product) => (
                    <div
                        key={product.id}
                        data-sal="slide-up"
                        data-sal-delay="150"
                        data-sal-duration="800"
                        className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                    >
                        <Product product={product} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

ProductArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            title: PropTypes.string,
        }),
        products: PropTypes.arrayOf(ProductType),
    }),
};

ProductArea.defaultProps = {
    space: 1,
    data: {
        products: PropTypes.arrayOf(ProductType),
    },
};

export default ProductArea;
