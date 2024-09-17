import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import ContactForm from "@components/contact-form";

const ContactFormArea = ({ space, className }) => (
    <div>
        <div className="container">
            <div className="row g-5">
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <div className="connect-thumbnail">
                        <div className="left-image">Office Hours</div>
                    </div>
                </div>
                <div
                    className="col-lg-6"
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-duration="800"
                >
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
);

ContactFormArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

ContactFormArea.defaultProps = {
    space: 1,
};

export default ContactFormArea;
