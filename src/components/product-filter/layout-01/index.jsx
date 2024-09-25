import { forwardRef } from "react";
import PropTypes from "prop-types";
import NiceSelect from "@ui/nice-select";
import CategoryFilter from "../layout-03/category-filter";

const ProductFilter = forwardRef(
    ({ filterHandler, categories }, ref) => (
        <div className="default-exp-wrapper default-exp-expand" ref={ref}>
            {/* <div className="inner">
                <div className="filter-select-option">
                    <h6 className="filter-leble">Product Type</h6>
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
            </div> */}
                    <CategoryFilter categories={categories} onChange={filterHandler} />
        </div>
    )
);

ProductFilter.displayName = "ProductFilter";

ProductFilter.propTypes = {
    filterHandler: PropTypes.func,
    categories: PropTypes.shape({}),
};

export default ProductFilter;
