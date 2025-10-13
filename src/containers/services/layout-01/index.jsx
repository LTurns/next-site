import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-02";
import Service from "@components/service";
import { SectionTitleType, ItemType } from "@utils/types";

const ServiceArea = ({ className, id, space, data }) => (
    <div
        className={clsx("rn-service-area", space === 2 && "pb--70", className)}
        id={id}
    >
            {data?.items && (
                <div className="row g-3">
                    {data.items.map((item) => (
                        <div
                            className="col-xxl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                            key={item.id}
                        >
                            <Service
                                title={item.title}
                                image={item.image}
                                // subtitle={item.subtitle}
                                path={item.path}
                                // description={item.description}
                            />
                        </div>
                    ))}
                </div>
            )}
    </div>
);

ServiceArea.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        items: PropTypes.arrayOf(ItemType),
    }),
};
ServiceArea.defaultProps = {
    space: 1,
};

export default ServiceArea;
