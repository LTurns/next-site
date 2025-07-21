import PropTypes from "prop-types";
import clsx from "clsx";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
import Product from "@components/product/layout-03";
import styles from "./bid-tab.module.css";

const BidTab = ({ className, accessories, tables, features }) => {
    const getColumnLabel = (column) => {
        if (column === "itemDescription") return "Description";
        if (column === "partNo") return "Part Number";
        return column
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase());
    };

    return (
        <TabContainer defaultActiveKey="nav-profile">
            <div className={clsx("tab-wrapper-one", className)}>
                <nav className="tab-button-one">
                    <Nav as="div" className="nav-tabs">
                        {features?.length ? (
                            <Nav.Link as="button" eventKey="nav-profile">
                                Features
                            </Nav.Link>
                        ) : (
                            ""
                        )}
                        {accessories?.length ? (
                            <Nav.Link as="button" eventKey="nav-contact">
                                Accessories
                            </Nav.Link>
                        ) : (
                            ""
                        )}
                        {tables?.length ? (
                            <Nav.Link as="button" eventKey="nav-info">
                                Ordering Information
                            </Nav.Link>
                        ) : (
                            ""
                        )}
                    </Nav>
                </nav>
                <TabContent className="rn-bid-content">
                    <TabPane eventKey="nav-profile">
                        <div className="box-table table-responsive">
                            {features?.length ? (
                                features.map((f) => (
                                    <div
                                        key={f._key || f.id}
                                        className={styles.featureSection}
                                    >
                                        <h4 className={styles.featureHeading}>
                                            {f.heading}
                                        </h4>
                                        {f.list?.map((item) => (
                                            <p
                                                key={item._key}
                                                className={styles.featureItem}
                                            >
                                                {item.listItem}
                                            </p>
                                        ))}
                                    </div>
                                ))
                            ) : (
                                <div className={styles.emptyState}>
                                    No features available for this product.
                                </div>
                            )}
                        </div>
                    </TabPane>
                    <TabPane eventKey="nav-contact">
                        <div className="box-table table-responsive">
                            {accessories?.length ? (
                                <div>
                                    {accessories.map((a) => (
                                        <div
                                            key={a._key || a.id}
                                            className={styles.accessories}
                                        >
                                            <Product product={a} isAccessory />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className={styles.emptyState}>
                                    No accessories required for this product.
                                </div>
                            )}
                        </div>
                    </TabPane>
                    <TabPane eventKey="nav-info">
                        <div className="box-table table-responsive">
                            {tables?.length ? (
                                tables.map((table) => (
                                    <div
                                        key={table._key}
                                        className={styles.tableContainer}
                                    >
                                        <table className={styles.table}>
                                            <thead>
                                                <tr>
                                                    {table.columns?.map(
                                                        (column) => (
                                                            <th
                                                                key={column}
                                                                className={
                                                                    styles.tableHeader
                                                                }
                                                            >
                                                                {getColumnLabel(
                                                                    column
                                                                )}
                                                            </th>
                                                        )
                                                    )}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {table.items?.map(
                                                    (item, index) => (
                                                        <tr
                                                            key={
                                                                item._key ||
                                                                item.id ||
                                                                `row-${index}`
                                                            }
                                                        >
                                                            {table.columns?.map(
                                                                (column) => (
                                                                    <td
                                                                        key={
                                                                            column
                                                                        }
                                                                        className={
                                                                            styles.tableCell
                                                                        }
                                                                    >
                                                                        {
                                                                            item[
                                                                                column
                                                                            ]
                                                                        }
                                                                    </td>
                                                                )
                                                            )}
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                ))
                            ) : (
                                <div className={styles.emptyState}>
                                    No ordering information available for this
                                    product.
                                </div>
                            )}
                        </div>
                    </TabPane>
                </TabContent>
            </div>
        </TabContainer>
    );
};

BidTab.propTypes = {
    accessories: PropTypes.arrayOf(PropTypes.shape({})),
    features: PropTypes.arrayOf(PropTypes.shape({})),
    tables: PropTypes.arrayOf(PropTypes.shape({})),
    className: PropTypes.string,
};

export default BidTab;
