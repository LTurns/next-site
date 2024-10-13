import PropTypes from "prop-types";
import clsx from "clsx";
import { FaClock } from "react-icons/fa";

const GoogleMapArea = ({ space, className }) => (
    <div
        className={clsx(
            "rn-contact-map-area position-relative",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5">
                <div
                    className="col-8"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <div className="connect-thumbnail">
                    <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.8700203174435!2d-0.7338425846941268!3d52.68038493208387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487780f4ac1c42a7%3A0xa65da3dcfdd6588d!2sC%20B%20S%20Products%20(KT)%20Ltd!5e0!3m2!1sen!2suk!4v1626176078725!5m2!1sen!2suk"
            width="100%"
            height="600"
            frameborder="0"
            allowfullscreen="true"
            aria-hidden="false"
            tabindex="0"
          />
                    </div>
                </div>
                <div
                    className="col-4"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <div className="connect-thumbnail">
                        <h4><FaClock  style={{color: 'var(--color-primary)', marginRight: 10}}/>
                        Business Hours</h4>

                        <ul>
                            <li>MONDAY to THURDAY<br></br>
                            8.30am to 5pm</li>
                            <li>FRIDAY<br></br>
                            8.30am to 3.45pm</li>
                            <li>SATURDAY & SUNDAY<br></br>
                            Closed</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

GoogleMapArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

GoogleMapArea.defaultProps = {
    space: 1,
};

export default GoogleMapArea;
