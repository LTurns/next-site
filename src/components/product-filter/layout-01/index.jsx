import { forwardRef } from "react";
import PropTypes from "prop-types";
import NiceSelect from "@ui/nice-select";

const ProductFilter = forwardRef(
    ({ slectHandler, sortHandler, priceHandler, inputs }, ref) => (
        <div className="default-exp-wrapper default-exp-expand" ref={ref}>
            <div className="inner">
                <div className="filter-select-option">
                    <h6 className="filter-leble">Category</h6>
                    <NiceSelect
                        options={[
                            { value: "all", text: "All Category" },
                            {
                                value: "Fibre Installation",
                                text: "Fibre Installation",
                            },
                            { value: "music", text: "Music" },
                            { value: "video", text: "Video" },
                            { value: "Collectionable", text: "Collectionable" },
                        ]}
                        placeholder="Category"
                        onChange={slectHandler}
                        name="category"
                    />
                </div>
            </div>
        </div>
    )
);

ProductFilter.displayName = "ProductFilter";

ProductFilter.propTypes = {
    slectHandler: PropTypes.func,
    sortHandler: PropTypes.func,
};

export default ProductFilter;
