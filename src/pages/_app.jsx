import { useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import sal from "sal.js";
import { ThemeProvider } from "next-themes";
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import "../assets/css/bootstrap.min.css";
import "../assets/css/feather.css";
import "../assets/css/modal-video.css";
import "../assets/css/map.css"
import "react-toastify/dist/ReactToastify.css";
import "../assets/scss/style.scss";
import CartState from "../Context/cart/CartState";

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();
    useEffect(() => {
        sal({ threshold: 0.1, once: true });
    }, [router.asPath]);

    useEffect(() => {
        sal();
    }, []);
    useEffect(() => {
        document.body.className = `${pageProps.className}`;
    });
    return (
         <Provider store={store}>
        <ThemeProvider defaultTheme="dark">
            <CartState>
                <Component {...pageProps} />
            </CartState>
        </ThemeProvider>
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
