import PropTypes from "prop-types";
import clsx from "clsx";
import WhereToBuy from "@components/where-to-buy";
import { SectionTitleType, ProductType } from "@utils/types";


const ExploreProductArea = ({
    className,
    space,
    columns,
    data: { products },
}) => {
    return (
            <div className="container">
                    <div className="row">
                        {products.map((prod) => (
                            <div className={`col-lg-${columns} col-md-6 col-sm-12`}>
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
    );
};

ExploreProductArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    columns: PropTypes.number,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        // products: PropTypes.arrayOf(ProductType),
        products: [],
        placeBid: PropTypes.bool,
    }),
};

ExploreProductArea.defaultProps = {
    space: 1,
    columns: 4
};

export default ExploreProductArea;
