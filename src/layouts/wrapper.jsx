import PropTypes from "prop-types";
import ScrollToTop from "@ui/scroll-to-top";

const Wrapper = ({ children }) => (
    <div className="app-wrapper">
        {children}
        <ScrollToTop />
    </div>
);

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;
