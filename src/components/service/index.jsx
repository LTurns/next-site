import Anchor from "@ui/anchor";
import PropTypes from "prop-types";
import Image from "next/image";

const Service = ({ title, path, image }) => (
    <div
        data-sal="slide-up"
        data-sal-delay="150"
        data-sal-duration="800"
        className="rn-service-one color-shape-7"
    >
        <div className="inner">
            <div className="icon">
                {image?.src && (
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={70}
                        height={70}
                        style={{ objectFit: 'contain', width: '70px', height: '70px' }}
                        priority={false}
                        loading="lazy"
                    />
                )}
            </div>
            <div className="content">
                <h4 className="title">{title}</h4>
            </div>
        </div>
        <Anchor className="over-link" path={path}>
            <span className="visually-hidden">Click here to read more</span>
        </Anchor>
    </div>
);

Service.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    image: PropTypes.string,
};

export default Service;
