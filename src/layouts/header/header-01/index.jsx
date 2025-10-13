/* eslint-disable no-console */
import PropTypes from "prop-types";
import { useContext } from "react";
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
import Autocomplete from "@components/autocomplete";
import CartContext from "../../../Context/cart/CartContext";
import headerData from "../../../data/general/header-01.json";
import menuData from "../../../data/general/menu-01.json";
import productData from "../../../data/products-06.json";

const Header = ({ className }) => {
    const { offcanvas, offcanvasHandler } = useOffcanvas();

    const { cartItems } = useContext(CartContext);
    let total = 0;

    for (const item in cartItems) {
        total += cartItems[item].quantity;
    }

    return (
    <div>
            {/* Top Thin Nav */}
            <div className="header-top-nav">
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginRight: 24 }}>
                    {/* LinkedIn */}
                    <a className="linkedIn-button" href="https://www.linkedin.com/company/cbs-products-ltd/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: 4 }}>
                        <svg width="18" height="18" fill="var(--color-primary, #FFD600)" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                        <span style={{ fontWeight: 500 }}>LinkedIn</span>
                    </a>
                    {/* Contact Details */}
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--header-top-text, #222)' }}>
                        <svg width="16" height="16" fill="none" stroke="var(--color-primary, #FFD600)" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.28 1.61.46 2.39a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.78.18 1.58.33 2.39.46A2 2 0 0 1 21 16.92z"/></svg>
                        <a href="tel:+4401572723665">+44 (0) 1572 723 665</a>
                        <svg width="16" height="16" fill="none" stroke="var(--color-primary, #FFD600)" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16"/><polyline points="22,6 12,13 2,6"/></svg>
                        <a href="mailto:sales@cbsproducts.com
">sales@cbsproducts.com
</a>
                    </span>
                </div>
            </div>
            <header
                className={clsx(
                    "rn-header header-default black-logo-version header--fixed",
                    className
                )}
            >
                <div className="header-inner">
                    <div className="header-left">
                          <Logo logo={headerData.logo}/>
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
                        <div className="searches">
                            <Autocomplete data={productData} isOpen />
                        </div>
                        {/* <div className="rn-icon-list setting-option d-block d-lg-none">
                            <Autocomplete data={productData} isOpen />
                        </div> */}
                        <div className="nav__right-cart">
                            <Box
                                sx={{ flexGrow: 0 }}
                                onClick={() => {
                                    router.push("/cart");
                                }}
                            >
                                <FaShoppingCart size={25} />
                                <span
                                    style={{
                                        fontSize: 14,
                                        paddingInline: 5,
                                        fontWeight: "bold",
                                    }}
                                >
                                    {total !== 0 ? total : ""}
                                </span>
                            </Box>
                        </div>
                                                                                            <div className="setting-option mobile-menu-bar d-block d-xl-none">
                            <div className="hamberger">
                                <BurgerButton onClick={offcanvasHandler} />
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
    </div>
    );
};

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
