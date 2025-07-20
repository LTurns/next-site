import { useReducer, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Pagination from "@components/pagination-02";
import { flatDeep } from "@utils/methods";
import { SectionTitleType, ProductType } from "@utils/types";
import ProductArea from "@containers/products-area";

function reducer(state, action) {
    switch (action.type) {
        case "FILTER_TOGGLE":
            return { ...state, filterToggle: !state.filterToggle };
        case "SET_ALL_PRODUCTS":
            return { ...state, allProducts: action.payload };
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
        case "SET_PAGE":
            return { ...state, currentPage: action.payload };
        case "SET_INPUTS":
            return { ...state, inputs: { ...state.inputs, ...action.payload } };
        default:
            return state;
    }
}

const POSTS_PER_PAGE = 12;

const ExploreProductArea = ({
    className,
    data: { products, title, catalogue },
}) => {
    const [state, dispatch] = useReducer(reducer, {
        products: [],
        allProducts: products || [],
        currentPage: 1,
        filterToggle: false,
    });

    /* Pagination logic start */
    const numberOfPages = Math.ceil(state.allProducts.length / POSTS_PER_PAGE);
    const paginationHandler = (page) => {
        dispatch({ type: "SET_PAGE", payload: page });
        const start = (page - 1) * POSTS_PER_PAGE;
        dispatch({
            type: "SET_PRODUCTS",
            payload: state.allProducts.slice(start, start + POSTS_PER_PAGE),
        });
        document
            .getElementById("explore-id")
            .scrollIntoView({ behavior: "smooth" });
    };
    /* Pagination logic end */

    const initialRender = useRef(0);
    useEffect(() => {
        if (initialRender.current < 2) {
            initialRender.current += 1;
        } else {
            document
                .getElementById("explore-id")
                .scrollIntoView({ behavior: "smooth" });
        }
    }, [state.inputs]);

    useEffect(() => {
        dispatch({
            type: "SET_PRODUCTS",
            payload: state.allProducts.slice(0, 0 + POSTS_PER_PAGE),
        });
    }, [state.allProducts]);

    // Update allProducts when products prop changes
    useEffect(() => {
        if (products) {
            dispatch({ type: "SET_ALL_PRODUCTS", payload: products });
        }
    }, [products]);

    /* Filter logic end */

    // Generate data from products data
    const cats = flatDeep(products.map((prod) => prod.subCategory));
    const categories = cats.reduce((obj, b) => {
        const newObj = { ...obj };
        newObj[b] = obj[b] + 1 || 1;
        return newObj;
    }, {});

    delete categories[""];

    return (
        <div className={clsx("explore-area", className)} id="explore-id">
            <ProductArea
                data={{
                    items: state.products,
                    section_title: title,
                    catalogue,
                }}
            />
            {numberOfPages > 1 && (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Pagination
                                className="single-column-blog"
                                currentPage={state.currentPage}
                                numberOfPages={numberOfPages}
                                onClick={paginationHandler}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

ExploreProductArea.propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
        title: SectionTitleType,
        products: PropTypes.arrayOf(ProductType),
        catalogue: PropTypes.string,
    }),
};

export default ExploreProductArea;
