import { useReducer, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { motion } from "framer-motion";
import SectionTitle from "@components/section-title/layout-02";
import Product from "@components/product/layout-02";
import FilterButtons from "@components/filter-buttons";
import { SectionTitleType, ProductType } from "@utils/types";
const ExploreProductArea = ({ className, space, data }) => {
    const filters = [
        // ...new Set(
        //     flatDeep(data?.products.map((item) => item.category && item.subCategory) || [])
        // ),
        "Fibre Installation",
        "Overhead Line",
        "Underground Cable Laying",
        "WINCHES",
        "Compressors",
        "DUCT RODDERS",
        "DUCT ROD EQUIPMENT",
        "Tornado",
        "Hurricane",
        "Accelair 3",
    ];

    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(data?.products);
    }, [data?.products]);

    /* Pagination logic start */
    //   const numberOfPages = Math.ceil(state.products.length / POSTS_PER_PAGE);
    //   const paginationHandler = (page) => {
    //       dispatch({ type: "SET_PAGE", payload: page });
    //       const start = (page - 1) * POSTS_PER_PAGE;
    //       dispatch({
    //           type: "SET_PRODUCTS",
    //           payload: state.products.slice(start, start + POSTS_PER_PAGE),
    //       });
    //       document
    //           .getElementById("explore-id")
    //           .scrollIntoView({ behavior: "smooth" });
    //   };
    /* Pagination logic end */

    const filterHandler = (filterKey) => {
        const prods = data?.products ? [...data.products] : [];
        if (filterKey === "all") {
            setProducts(data?.products);
            return;
        }
        const filterProds = prods.filter(
            (prod) =>
                prod.category.includes(filterKey) ||
                prod.subCategory.includes(filterKey) ||
                prod.title === filterKey
        );
        setProducts(filterProds);
    };

    // useEffect(() => {
    //     dispatch({
    //         type: "SET_PRODUCTS",
    //         payload: state.allProducts.slice(0, 0 + POSTS_PER_PAGE),
    //     });
    // }, [state.allProducts]);

    return (
        <div
            className={clsx(
                "rn-product-area masonary-wrapper-activation",
                space === 1 && "rn-section-gapTop",
                className
            )}
            id="explore-id"
        >
            <div className="container">
                <div className="row align-items-center mb--60">
                    <div className="col-lg-2">
                        {data?.section_title && (
                            <SectionTitle
                                className="mb--0"
                                disableAnimation
                                {...data.section_title}
                            />
                        )}
                    </div>
                    <div className="col-lg-10">
                        <FilterButtons
                            buttons={filters}
                            filterHandler={filterHandler}
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <motion.div layout className="isotope-list item-4">
                        {products?.map((prod) => {
                            return (
                                !prod.hasSubCategories && (
                                    <motion.div
                                        key={prod._id}
                                        className={clsx("grid-item")}
                                        layout
                                    >
                                        <Product
                                            product={prod}
                                            // title={prod.title}
                                            // slug={prod.title}
                                            // intro={prod.intro}
                                            // category={prod.category}
                                            // productId={prod.productId}
                                            // // latestBid={prod.latestBid}
                                            // // price={prod.price}
                                            // // likeCount={prod.likeCount}
                                            // image={prod.mainImage}
                                        />
                                    </motion.div>
                                )
                            );
                        })}
                    </motion.div>
                    {/* {numberOfPages > 1 ? (
                                <Pagination
                                    className="single-column-blog"
                                    currentPage={state.currentPage}
                                    numberOfPages={numberOfPages}
                                    onClick={paginationHandler}
                                />
                            ) : null} */}
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
        products: PropTypes.arrayOf(ProductType),
        placeBid: PropTypes.bool,
    }),
};

ExploreProductArea.defaultProps = {
    space: 1,
};

export default ExploreProductArea;
