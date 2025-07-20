import PropTypes from "prop-types";
import { FaDownload } from "react-icons/fa6";

const Catalogue = ({ data }) => (
    <div
        style={{
            fontSize: 17,
            paddingTop: 15,
            marginTop: 15,
            marginBottom: 15,
            paddingBottom: 15,
            textAlign: "left",
        }}
        data-sal="slide-up"
        data-sal-duration="800"
    >
        <a
            href={data}
            style={{
                color: "orange",
                fontWeight: "bold",
                textDecoration: "underline",
            }}
        >
            View
        </a>{" "}
        or{" "}
        <a
            className="catalogues"
            href={data}
            style={{
                color: "orange",
                fontWeight: "bold",
                textDecoration: "underline",
            }}
            download
        >
            Download
        </a>{" "}
        Catalogue
        <FaDownload style={{ color: "orange", marginLeft: 10 }} size={30} />
    </div>
);

Catalogue.propTypes = {
    data: PropTypes.string.isRequired,
};

export default Catalogue;
