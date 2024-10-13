import PropTypes from "prop-types";
import RepairsForm from "@components/repairs-form";

const RepairsFormArea = ({ space, className }) => (
    <div>
        <div className="container">
            <div className="row g-5">
                <div
                    className="col-lg-12"
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-duration="800"
                >
                    <RepairsForm />
                </div>
            </div>
        </div>
    </div>
);

RepairsFormArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

RepairsFormArea.defaultProps = {
    space: 1,
};

export default RepairsFormArea;
