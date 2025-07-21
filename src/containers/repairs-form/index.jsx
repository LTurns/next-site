import RepairsForm from "@components/repairs-form";

const RepairsFormArea = () => (
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

RepairsFormArea.defaultProps = {
    space: 1,
};

export default RepairsFormArea;
