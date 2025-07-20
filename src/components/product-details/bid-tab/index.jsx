import PropTypes from "prop-types";
import clsx from "clsx";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
import { makeStyles } from "@mui/styles";

import Product from "@components/product/layout-02";
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';

// const features = [
//     {
//        "_key":"5UZfbqAE",
//        "list":[
//           {
//              "listItem":"Product No: D-840-07-ERGO",
//              "_key":"B2mWXTvq"
//           },
//           {
//              "listItem":"Capacity\n(WLL): 750Kg",
//              "_key":"Oy0nmc8I"
//           },
//           {
//              "_key":"06Qxk4L0",
//              "listItem":"Lift: 1500 mm"
//           },
//           {
//              "listItem":"Weight: 6.6kg",
//              "_key":"Dd4XLh5A"
//           }
//        ],
//        "heading":"CHAIN DIMENSIONS 5.6 X 17.1MM:",
//        "id":1
//     },
//     {
//        "id":1,
//        "_key":"nFWJooqP",
//        "list":[
//           {
//              "listItem":"Product No: D-840-15-ERGO",
//              "_key":"5B0MXzRP"
//           },
//           {
//              "_key":"sxdUH8Rc",
//              "listItem":"Capacity\n(WLL): 1500kg"
//           },
//           {
//              "listItem":"Lift: 1500 mm",
//              "_key":"GplVkF2d"
//           },
//           {
//              "listItem":"Weight: 9.5kg",
//              "_key":"GjMu9yik"
//           }
//        ],
//        "heading":"CHAIN DIMENSIONS 7.1 x 21MM:"
//     },
//     {
//        "list":[
//           {
//              "listItem":"Product No: D-840-30-ERGO",
//              "_key":"L2jA2DzB"
//           },
//           {
//              "listItem":"Capacity\n(WLL): 3000kg",
//              "_key":"YrRYG9vI"
//           },
//           {
//              "listItem":"Lift: 1500 mm",
//              "_key":"Io9MSbPz"
//           },
//           {
//              "listItem":"Weight: 16.8kg",
//              "_key":"LFGpXVYe"
//           }
//        ],
//        "heading":"CHAIN DIMENSIONS 10 X 28MM:",
//        "id":1,
//        "_key":"jpqIIlU7"
//     },
//     {
//        "_key":"dG1lYwJo",
//        "list":[
//           {
//              "listItem":"Product No: D-840-60-ERGO",
//              "_key":"b4LngFmZ"
//           },
//           {
//              "listItem":"Capacity\n(WLL): 6000kg",
//              "_key":"rt2agcOi"
//           },
//           {
//              "_key":"usKKpFpi",
//              "listItem":"Lift: 1500 mm"
//           },
//           {
//              "listItem":"Weight: 28.6kg",
//              "_key":"6UVaxYDl"
//           }
//        ],
//        "heading":"CHAIN DIMENSIONS 10 X 28MM AND HIGHER WEIGHT:",
//        "id":1
//     }
//  ]

//  const accessories = [
//     {
//        "subCategory":[

//        ],
//        "category":[

//        ],
//        "_key":"eOMJMHJ8",
//        "intro":"A trolley mounted hydraulic power pack with preset internal system protection relief valve and quick release connectors.",
//        "id":"6197d65deac4122a72465b08",
//        "title":"Hydraulic Power Pack",
//        "_id":{
//           "$oid":"6197d65deac4122a72465b08"
//        },
//        "productId":"C-1203-F",
//        "mainImage":{
//           "_type":"image",
//           "asset":{
//              "_type":"reference",
//              "_ref":"image-f7e7a95e6e46a15e1e5aab86304f243f00a900a1-2131x2403-png"
//           }
//        }
//     },
//     {
//        "id":"6197d906eac4122a72469b56",
//        "mainImage":{
//           "_type":"image",
//           "asset":{
//              "_ref":"image-4de5a1ced732b57dfad803cbf59cfc1ce207c918-350x288-jpg",
//              "_type":"reference"
//           }
//        },
//        "productId":"C-1240-03",
//        "subCategory":[

//        ],
//        "_id":{
//           "$oid":"6197d906eac4122a72469b56"
//        },
//        "title":"Cable Floating Water Pump",
//        "intro":"The CBS C-1240-03 Cable Floating Water Pump has been designed to work in conjunction with the Tornado cable blowing machine to install fibre cables using water instead of air.",
//        "category":[

//        ],
//        "_key":"0fu1WoNm"
//     },
//     {
//        "_id":{
//           "$oid":"61e5618f89b81b3614bc4cef"
//        },
//        "category":[

//           "Fibre Installation"
//        ],
//        "id":"61e5618f89b81b3614bc4cef",
//        "title":"Tube Blowing Conversion Kits",
//        "_key":"2WfAAi6c",
//        "mainImage":{
//           "_type":"image",
//           "asset":{
//              "_type":"reference",
//              "_ref":"image-ccd156e82434339d13b018a98eaae8f1375070cf-500x408-jpg"
//           }
//        },
//        "subCategory":[

//        ],
//        "productId":"C-1250-CON",
//        "intro":"The tube blowing conversion kits are initially used to convert an existing Tornado Cable Blowing Machine into a Tube Blowing Machine for installing micro tubes into ducts."
//     }
// ]

// const tables = [
//     {
//        "items":[
//           {
//              "itemDescription":"Length: 60m, Width: 26kg",
//              "_key":"Alij1XcR",
//              "partNo":"B-103-060-800"
//           },
//           {
//              "_key":"E43STHc3",
//              "partNo":"B-103-080-800",
//              "itemDescription":"Length: 80m, Width: 30kg"
//           },
//           {
//              "itemDescription":"Length: 100m, Width: 33kg",
//              "_key":"G6XuugXb",
//              "partNo":"B-103-100-800"
//           },
//           {
//              "itemDescription":"Length: 120m, Width: 35kg",
//              "_key":"lli5e8zU",
//              "partNo":"B-103-120-800"
//           },
//           {
//              "partNo":"B-103-150-800",
//              "itemDescription":"Length: 150m, Width: 36kg",
//              "_key":"uQUZylvH"
//           }
//        ],
//        "columns":[
//           "itemDescription",
//           "partNo"
//        ],
//        "_key":"fXXytOFi",
//        "title":"ORDERING INFO"
//     }
//  ]

const useStyles = makeStyles({
    accessories: {
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    columns: {
        padding: 20,
    },
    featureSection: {
        padding: "24px",
        marginBottom: "16px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        border: "1px solid rgba(0, 0, 0, 0.08)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        transition: "all 0.2s ease",
        "&:hover": {
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
            transform: "translateY(-1px)",
        },
        // Dark mode
        "[data-theme='dark'] &": {
            backgroundColor: "#2c3e50",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
            "&:hover": {
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
            },
        },
    },
    featureHeading: {
        fontSize: "16px !important",
        fontWeight: "600 !important",
        color: "#2c3e50 !important",
        marginBottom: "16px !important",
        paddingBottom: "8px !important",
        borderBottom: "2px solid #f4d03f !important",
        display: "inline-block !important",
        // Dark mode
        "[data-theme='dark'] &": {
            color: "#f8f9fa !important",
        },
    },
    featureItem: {
        fontSize: "14px !important",
        color: "#495057 !important",
        marginBottom: "8px !important",
        paddingLeft: "16px !important",
        position: "relative !important",
        "&:before": {
            content: "'•'",
            position: "absolute",
            left: "0",
            color: "#f4d03f",
            fontWeight: "bold",
        },
        // Dark mode
        "[data-theme='dark'] &": {
            color: "#ced4da !important",
        },
    },
    tableContainer: {
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
        border: "1px solid rgba(0, 0, 0, 0.08)",
        marginBottom: "24px",
        "&:last-child": {
            marginBottom: "0",
        },
        // Dark mode
        "[data-theme='dark'] &": {
            backgroundColor: "#2c3e50",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
        },
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        margin: "0 !important",
        tableLayout: "fixed",
    },
    tableHeader: {
        background: "linear-gradient(135deg, #f4d03f 0%, #e8b339 100%)",
        color: "#2c3e50",
        fontWeight: "700",
        fontSize: "14px",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        padding: "16px 20px",
        border: "none",
        width: "50%",
        textAlign: "left",
        // Dark mode - keep the same gradient as it provides good contrast
    },
    tableCell: {
        padding: "16px 20px",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
        fontSize: "14px",
        color: "#495057",
        backgroundColor: "#ffffff",
        transition: "background-color 0.2s ease",
        // Dark mode
        "[data-theme='dark'] &": {
            backgroundColor: "#2c3e50",
            color: "#ced4da",
            borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        },
    },
    emptyState: {
        padding: "40px 24px",
        textAlign: "center",
        color: "#6c757d",
        fontSize: "16px",
        backgroundColor: "#f8f9fa",
        borderRadius: "12px",
        border: "1px solid #e9ecef",
        // Dark mode
        "[data-theme='dark'] &": {
            backgroundColor: "#343a40",
            color: "#adb5bd",
            border: "1px solid rgba(255, 255, 255, 0.1)",
        },
    },
});

const BidTab = ({ className, accessories, tables, features }) => {
    const classes = useStyles();

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
                                        className={classes.featureSection}
                                    >
                                        <h4 className={classes.featureHeading}>
                                            {f.heading}
                                        </h4>
                                        {f.list?.map((item) => (
                                            <p
                                                key={item._key}
                                                className={classes.featureItem}
                                            >
                                                {item.listItem}
                                            </p>
                                        ))}
                                    </div>
                                ))
                            ) : (
                                <div className={classes.emptyState}>
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
                                            className={classes.accessories}
                                        >
                                            <Product product={a} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className={classes.emptyState}>
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
                                        className={classes.tableContainer}
                                    >
                                        <table className={classes.table}>
                                            <thead>
                                                <tr>
                                                    {table.columns?.map(
                                                        (column) => (
                                                            <th
                                                                key={column}
                                                                className={
                                                                    classes.tableHeader
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
                                                                            classes.tableCell
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
                                <div className={classes.emptyState}>
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
