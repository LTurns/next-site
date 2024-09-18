import PropTypes from "prop-types";
import NiceSelect from "@ui/nice-select";
import InputRange from "@ui/input-range";

const ProductFilter = ({ slectHandler, priceHandler, inputs }) => (
    <div className="default-exp-wrapper">
        <div className="inner">
            <div className="filter-select-option">
                <h6 className="filter-leble">Category</h6>
                <NiceSelect
                    options={[
                        { value: "all", text: "All Category" },
                        { value: "art", text: "Fibre Installation" },
                        { value: "music", text: "Winches" },
                        { value: "video", text: "Compressors" },
                        { value: "Collectionable", text: "Collectionable" },
                    ]}
                    placeholder="Category"
                    onChange={slectHandler}
                    name="category"
                />
            </div>

            <div className="filter-select-option">
                <h6 className="filter-leble">Price Range</h6>
                <div className="price_filter s-filter clear">
                    <form action="#" method="GET">
                        <InputRange
                            values={inputs.price}
                            onChange={priceHandler}
                        />
                    </form>
                </div>
            </div>
        </div>
    </div>
);

ProductFilter.displayName = "ProductFilter";

ProductFilter.propTypes = {
    slectHandler: PropTypes.func,
    sortHandler: PropTypes.func,
    priceHandler: PropTypes.func,
    inputs: PropTypes.shape({
        price: PropTypes.arrayOf(PropTypes.number),
    }),
};
export default ProductFilter;
