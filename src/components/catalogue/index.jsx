import PropTypes from "prop-types";
import { FaDownload } from "react-icons/fa6";

const Catalogue = ({ data: { catalogue },}) => (
    <div style={{fontSize: 17, padding: 15, margin: 15, textAlign: 'center'}} data-sal="slide-up"
    data-sal-duration="800">
    <a href={catalogue} style={{color: 'orange', fontWeight: 'bold', textDecoration: 'underline'}}>View</a> or <a className="catalogues" href={catalogue} style={{color: 'orange', fontWeight: 'bold',  textDecoration: 'underline'}} download>Download</a> Catalogue<FaDownload style={{color: 'orange', marginLeft: 10}} size={30} />
    </div>
);

Catalogue.propTypes = {
    catalogue: PropTypes.string.isRequired
};


export default Catalogue;
