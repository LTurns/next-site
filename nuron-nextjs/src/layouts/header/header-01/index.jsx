/* eslint-disable no-console */
import PropTypes from "prop-types";
import { React, useContext } from "react";
import clsx from "clsx";
import Logo from "@components/logo";
import MainMenu from "@components/menu/main-menu";
import MobileMenu from "@components/menu/mobile-menu";
import SearchBar from "@components/searchbar";
import ColorSwitcher from "@components/color-switcher";
import BurgerButton from "@ui/burger-button";
import { useOffcanvas, useSticky, useFlyoutSearch } from "@hooks";
import router from "next/router";
import { FaShoppingCart } from "react-icons/fa";
import Box from "@mui/material/Box";
import CartContext from "../../../Context/cart/CartContext";
import headerData from "../../../data/general/header-01.json";
import menuData from "../../../data/general/menu-01.json";

const Header = ({ className }) => {
    // const router = useRouter();
    const sticky = useSticky();
    const { offcanvas, offcanvasHandler } = useOffcanvas();
    const { search, searchHandler } = useFlyoutSearch();

    const { cartItems } = useContext(CartContext);
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    let total = 0;

    // eslint-disable-next-line
    for (const item in cartItems) {
        total += cartItems[item].quantity;
    }
    // const detectCurrentProvider = () => {
    //     let provider;
    //     if (window.ethereum) {
    //         provider = window.ethereum;
    //     } else if (window.web3) {
    //         provider = window.web3.currentProvider;
    //     } else {
    //         console.log(
    //             "Non-ethereum browser detected. You should install Metamask"
    //         );
    //     }
    //     return provider;
    // };

    // const onConnect = async () => {
    //     try {
    //         const currentProvider = detectCurrentProvider();
    //         if (currentProvider) {
    //             await currentProvider.request({
    //                 method: "eth_requestAccounts",
    //             });
    //             const web3 = new Web3(currentProvider);
    //             const userAccount = await web3.eth.getAccounts();
    //             const account = userAccount[0];
    //             const getEthBalance = await web3.eth.getBalance(account);
    //             setEthBalance(getEthBalance);
    //             setIsAuthenticated(true);
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // const onDisconnect = () => {
    //     setIsAuthenticated(false);
    // };

    return (
        <>
            <header
                className={clsx(
                    "rn-header haeder-default black-logo-version header--fixed header--sticky",
                    sticky && "sticky",
                    className
                )}
            >
                <div className="container">
                    <div className="header-inner">
                        <div className="header-left">
                            <Logo logo={headerData.logo} />
                            <div className="mainmenu-wrapper">
                                <nav
                                    id="sideNav"
                                    className="mainmenu-nav d-none d-xl-block"
                                >
                                    <MainMenu menu={menuData} />
                                </nav>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="searches setting-option d-none d-lg-block">
                                <SearchBar isOpen={true} />
                            </div>

                            <div className="rn-icon-list setting-option d-block d-lg-none">
                                <div className="icon-box search-mobile-icon">
                                    <button
                                        type="button"
                                        aria-label="Click here to open search form"
                                        onClick={searchHandler}
                                    >
                                        <i className="feather-search" />
                                    </button>
                                </div>
                                <SearchBar isOpen={search} />
                            </div>
                            {/* <div className="setting-option rn-icon-list notification-badge">
                                <div className="icon-box">
                                    <Anchor path={headerData.activity_link}>
                                        <i className="feather-bell" />
                                        <span className="badge">6</span>
                                    </Anchor>
                                </div>
                            </div> */}
                            <div>
                                {/* <Box
                        sx={{ flexGrow: 0 }}
                        onClick={() => {
                        router.push("/cart");
                        }}
                    >
                        <Tooltip title="Shopping Cart">
                        <button sx={{ p: 0 }}>
                            <Badge badgeContent={cartItems.length} color="error">
                            <ShoppingBagOutlinedIcon style={{ color: "white" }} />
                            </Badge>
                        </button>
                        </Tooltip>
                    </Box> */}
                            </div>
                            <div className="setting-option mobile-menu-bar d-block d-xl-none">
                                <div className="hamberger">
                                    <BurgerButton onClick={offcanvasHandler} />
                                </div>
                            </div>
                            <div
                                id="my_switcher"
                                className="setting-option my_switcher"
                            >
                                <ColorSwitcher />
                            </div>
                            <div className="nav__right-cart">
                                <Box
                                    sx={{ flexGrow: 0 }}
                                    onClick={() => {
                                        router.push("/cart");
                                    }}
                                >
                                    <FaShoppingCart />
                                    <span
                                        style={{
                                            fontSize: 9,
                                            paddingInline: 5,
                                        }}
                                    >
                                        {total}
                                    </span>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu
                isOpen={offcanvas}
                onClick={offcanvasHandler}
                menu={menuData}
                logo={headerData.logo}
            />
        </>
    );
};

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
