import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import LogoWidget from "@widgets/logo-widget";
import QuicklinkWidget from "@widgets/quicklink-widget";
import InformationWidget from "@widgets/information-widget";
import FooterLinkWidget from "@widgets/footer-link-widget";
import SocialWidget from "@widgets/social-widget";
import { ItemType } from "@utils/types";
import { Divider } from "@mui/material";

// Demo data
import footerData from "../../../data/general/footer-01.json";
import contactData from "../../../data/general/contact.json";

const Footer = ({ space, className, data }) => (
    <>
        <div
            className={clsx(
                "rn-footer-one bg-color--1",
                space === 1 && "rn-section-gap mt--100 mt_md--80 mt_sm--80",
                space === 2 && "rn-section-gap",
                space === 3 && "mt--100 mt_md--80 mt_sm--80",
                className
            )}
        >
            {data?.items && (
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <ul className="nu-brand-area">
                                {data.items.map(({ id, image }) => (
                                    <li key={id}>
                                        {image?.src && (
                                            <Image
                                                src={image.src}
                                                alt={
                                                    image?.alt ||
                                                    "nuron-brand_nft"
                                                }
                                                sizes="200px"
                                                fill
                                                style={{
                                                    objectFit: "contain",
                                                }}
                                            />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="widget-content-wrapper">
                            <LogoWidget data={footerData["logo-widget"]} />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--40">
                        <QuicklinkWidget
                            data={footerData["quicklink-widget"]}
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                        <InformationWidget
                            data={footerData["information-widget"]}
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                        <h5>Contact Details</h5>

                        <div style={{ margin: 5 }}>
                            <span style={{ fontSize: 16 }}>Address</span>
                            <Divider style={{ marginBlock: 10 }}></Divider>
                            CBS Products (KT), Pillings Road Oakham Rutland LE15
                            6QF UK
                        </div>

                        <br></br>

                        <div style={{ margin: 5 }}>
                            <span style={{ fontSize: 16 }}>Email</span>
                            <Divider style={{ marginBlock: 10 }}></Divider>
                            <a
                                class="email black--text"
                                href="mailto: sales@cbsproducts.com"
                            >
                                sales@cbsproducts.com
                            </a>
                        </div>
                        <div style={{ margin: 5 }}>
                            <span style={{ fontSize: 16 }}>Phone</span>
                            <Divider style={{ marginBlock: 10 }}></Divider>
                            <a class="email black--text" href="tel:01572723665">
                                +44 (0) 1572 723 665
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy-right-one ptb--20 bg-color--1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="copyright-left">
                            <span>{footerData.copyright_text}</span>
                            <FooterLinkWidget
                                data={footerData["footer-link-widget"]}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="copyright-right">
                            <SocialWidget socials={contactData.socials} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

Footer.propTypes = {
    space: PropTypes.oneOf([1, 2, 3]),
    className: PropTypes.string,
    data: PropTypes.shape({
        items: PropTypes.arrayOf(ItemType),
    }),
};

Footer.defaultProps = {
    space: 1,
};

export default Footer;
