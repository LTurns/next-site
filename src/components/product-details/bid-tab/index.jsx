import PropTypes from "prop-types";
import clsx from "clsx";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
import { makeStyles } from "@mui/styles";

import React from "react";
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
});

const BidTab = ({ className, accessories, tables, features }) => {
    const classes = useStyles();

    return (
        <TabContainer defaultActiveKey="nav-home">
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
                            {features.map((f) => (
                                <div className={classes.features}>
                                    <ul>
                                        <span
                                            classNames={classes.title}
                                            key={f.id}
                                        >
                                            {f.heading}
                                        </span>
                                        {f.list.map((item) => (
                                            <li>{item.listItem}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <></>
                    </TabPane>
                    <TabPane eventKey="nav-contact">
                        <div className="box-table table-responsive">
                            {accessories.length ? (
                                <div>
                                    {accessories.map((a) => (
                                        <div className={classes.accessories}>
                                            <Product
                                                product={a}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div>No accessories required.</div>
                            )}
                        </div>
                    </TabPane>
                    <TabPane eventKey="nav-info">
                        <div className="box-table table-responsive">
                            {}
                            {tables.map((table) => (
                                <table className="mt--15 mb--15">
                                    {/* <thead>
                                        <tr>
                                            {table.columns.map((column) => (
                                                <th className={classes.columns}>
                                                    {" "}
                                                    {column.split(" ")}{" "}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead> */}
                                    <tbody>
                                        {table.items.map((item) => (
                                            <tr>
                                                {table.columns.map((column) => (
                                                    <td>{item[column]}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ))}
                        </div>
                    </TabPane>
                </TabContent>
            </div>
        </TabContainer>
    );
};

BidTab.propTypes = {
    accessories: [],
    features: [],
    tables: [],
    product: []
};

export default BidTab;
