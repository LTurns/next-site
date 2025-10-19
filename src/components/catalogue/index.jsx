import PropTypes from "prop-types";
import { FaDownload, FaBookOpen } from "react-icons/fa6";

const Catalogue = ({ data, title }) => (
    <div
        style={{
            fontSize: 17,
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            gap: "18px",
            padding: "18px 0",
        }}
        data-sal="slide-up"
        data-sal-duration="800"
    >
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 60,
                minHeight: 60,
                background: "#fff8e1",
                borderRadius: 12,
                boxShadow: "0 2px 8px rgba(255,213,0,0.08)",
            }}
        >
            <FaBookOpen size={38} style={{ color: "#ffd500" }} />
        </div>
        <div>
            <a
                href={data}
                style={{
                    color: "orange",
                    fontWeight: "bold",
                    textDecoration: "underline",
                }}
                target="_blank"
                rel="noopener noreferrer"
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
            {title} Catalogue
            <FaDownload style={{ color: "orange", marginLeft: 10 }} size={30} />
        </div>
    </div>
);

Catalogue.propTypes = {
    data: PropTypes.string.isRequired,
    title: PropTypes.string,
};

export default Catalogue;
