import PropTypes from "prop-types";
import CategoryFilter from "./category-filter";
// import RatingFilter from "./rating-filter";
import PriceRangeFilter from "./price-range-filter";

const ProductFilter = ({
    filterHandler,
    // priceHandler,
    // inputs,
    categories,
}) => (
    <div className="nu-course-sidebar">
        <CategoryFilter categories={categories} onChange={filterHandler} />
        {/* <RatingFilter onChange={filterHandler} /> */}
        {/* <PriceRangeFilter values={inputs.price} onChange={priceHandler} /> */}
    </div>
);

ProductFilter.propTypes = {
    sortHandler: PropTypes.func,
    filterHandler: PropTypes.func,
    // priceHandler: PropTypes.func,
    // inputs: PropTypes.shape({
    //     price: PropTypes.arrayOf(PropTypes.number),
    // }),
    sort: PropTypes.string,
    categories: PropTypes.shape({}),
    levels: PropTypes.arrayOf(PropTypes.string),
    languages: PropTypes.arrayOf(PropTypes.string),
};

export default ProductFilter;
