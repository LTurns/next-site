import {
    useReducer,
    useEffect,
    useState,
    useCallback,
    useRef,
    Conditional,
} from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-02";
import ProductFilter from "@components/product-filter/layout-03";
import WhereToBuy from "@components/where-to-buy";
import Pagination from "@components/pagination-02";
import FilterButtons from "@components/filter-buttons";
import { SectionTitleType, ProductType } from "@utils/types";
import { flatDeep } from "@utils/methods";

function reducer(state, action) {
    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
    }
}

const POSTS_PER_PAGE = 12;

const ExploreProductArea = ({
    className,
    space,
    data: { products },
}) => {
    return (
        <div
            className={clsx(
                space === 1 && "rn-section-gapTop",
                className
            )}
            id="explore-id"
        >
            <div className="container">
                <div className="col-lg-12">
                    <div className="row g-5">
                        {products.map((prod) => (
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <WhereToBuy
                                    name={prod.name}
                                    roadOne={prod.roadOne}
                                    roadTwo={prod.roadTwo}
                                    country={prod.country}
                                    county={prod.county}
                                    image={prod.img}
                                    postcode={prod.postcode}
                                    website={prod.website}
                                    email={prod.email}
                                    tel={prod.tel}
                                    fax={prod.fax}
                                    contact={prod.contact}
                                    mobile={prod.mobile}
                                    continent={prod.continent}
                                    service={prod.service}
                                    industry={prod.industry}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

ExploreProductArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        // products: PropTypes.arrayOf(ProductType),
        products: [],
        placeBid: PropTypes.bool,
    }),
};

ExploreProductArea.defaultProps = {
    space: 1,
};

export default ExploreProductArea;
