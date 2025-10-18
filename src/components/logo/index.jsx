import Image from "next/image";
import Anchor from "@ui/anchor";
import PropTypes from "prop-types";
import clsx from "clsx";
import headerData from '../../data/homepages/home-04.json';

const Logo = ({ className, logo }) => (
    <div className={clsx("logo-thumbnail logo-custom-css", className)}>
                <Image
                    className="coin-logo"
                    src={'/images/brand/coin.png'} // Add leading slash for absolute path
                    alt={''}
                    width={50}
                    height={70}
                    priority
                />
        {logo?.[0]?.src && (
            <Anchor className="logo-light" path="/">
                <Image
                    src={logo[0].src}
                    alt={logo[0]?.alt || "cbs logo"}
                    className="cbs-logo"
                    width={130}
                    height={50}
                    priority
                />
            </Anchor>
        )}
        {logo?.[1]?.src && (
            <Anchor className="logo-dark" path="/">
                        <Image
                    className="coin-logo"
                    src={'/images/brand/coin.png'} // Add leading slash for absolute path
                    alt={''}
                    width={50}
                    height={70}
                    priority
                />
                <Image
                    src={logo[1].src}
                    alt={logo[1]?.alt || "cbs logo"}
                    width={150}
                    height={30}
                    priority
                />
            </Anchor>
        )}
    </div>
);

Logo.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
        })
    ),
};

export default Logo;
