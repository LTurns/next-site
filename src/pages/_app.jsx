import { useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import sal from "sal.js";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../assets/css/bootstrap.min.css";
import "../assets/css/feather.css";
import "../assets/css/modal-video.css";
import "../assets/css/map.css";
import "react-toastify/dist/ReactToastify.css";
import "../assets/scss/style.scss";
import CartState from "../Context/cart/CartState";

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();
    useEffect(() => {
        sal({ threshold: 0.1, once: true });
    }, [router.asPath]);

    // useEffect(() => {
    //     sal();
    //     // The following lines set dark mode and background color immediately on mount.
    //     // This is fine for ensuring dark mode, but setting styles on every render is unnecessary.
    //     // For performance, you can move this logic to a custom _document.js for instant effect,
    //     // or keep it here for simplicity. It does not significantly affect performance.
    //     document.documentElement.classList.add("dark");
    //     document.body.classList.add("dark");
    //     document.body.style.background = "#18181b";
    //     document.documentElement.style.background = "#18181b";
    // }, []);

    return (
        <Provider store={store}>
            {/* ThemeProvider always dark, disables switching */}
            {/* <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}> */}
                <CartState>
                    <Component {...pageProps} />
                </CartState>
            {/* </ThemeProvider> */}
        </Provider>
    );
};

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.shape({
        className: PropTypes.string,
    }),
};

export default MyApp;
