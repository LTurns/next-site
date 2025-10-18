import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import clsx from "clsx";
import Anchor from "@ui/anchor";
import { makeStyles } from "@mui/styles";
import { Divider } from "@mui/material";
import { FaLocationPin } from "react-icons/fa6";


const WhereToBuy = ({
    name,
    roadOne,
    roadTwo,
    county,
    postcode,
    country,
    contact,
    mobile,
    fax,
    tel,
    email,
    website,
    image,
    continent,
    service,
    industry
}) => {
    return (
        <>
            <div>
                <div>
                    <div className="where-to-buy-content">
                        <div style={{
                            width: "100%",
                            height: "33%",
                            minHeight: "160px",
                            marginBottom: "2rem",
                            position: "relative",
                            background: 'white',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Image
                                style={{
                                    objectFit: "contain",
                                    width: "80%",
                                    height: "100%",
                                    borderTopLeftRadius: "16px",
                                    borderTopRightRadius: "16px",
                                }}
                                src={`/images/whereToBuy/${image}`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                alt={name}
                            />
                        </div>
                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                            <Anchor path={website} className="where-to-buy-title">
                               <FaLocationPin /> {name}
                            </Anchor>
                        </div>
                        <div className="where-to-buy-address">
                            {roadOne && <span>{roadOne}</span>}
                            {roadTwo && <span>{roadTwo}</span>}
                            {county && <span>{county}</span>}
                            {country && <span>{country}</span>}
                            {postcode && <span>{postcode}</span>}
                        </div>
                        <div className="where-to-buy-details" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                            {contact && <span><strong>Contact:</strong> {contact}</span>}
                            {tel && <span><a href={`tel:${tel}`}>Tel: {tel}</a></span>}
                            {mobile && <span><a href={`tel:${mobile}`}>Mobile: {mobile}</a></span>}
                            {email && <span><a href={`mailto:${email}`}>Email: {email}</a></span>}
                            {fax && <span><a href={`tel:${fax}`}>Fax: {fax}</a></span>}
                        </div>

                        <p>
                            <Anchor path={website} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", color: "#fcee29ff", fontSize: "14px" }}>
                                Head to Website&nbsp;
                                <span style={{ display: "inline-block", verticalAlign: "middle" }}>
                                    {/* Right arrow SVG */}
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4163b9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"/>
                                        <polyline points="12 5 19 12 12 19"/>
                                    </svg>
                                </span>
                            </Anchor>
                        </p>
                        <div className="chip-group" style={{ marginTop: "0.5rem" }}>
                            {service.map((srv, idx) => (
                                <span key={`service-${idx}`} className="chip-service">{srv}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

WhereToBuy.propTypes = {
    name: PropTypes.string,
    website: PropTypes.string,
    roadOne: PropTypes.string,
    roadTwo: PropTypes.string,
    county: PropTypes.string,
    postcode: PropTypes.string,
    country: PropTypes.string,
    contact: PropTypes.string,
    mobile: PropTypes.string,
    fax: PropTypes.string,
    tel: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
    image: PropTypes.object,
    industry: PropTypes.array,
    service: PropTypes.array,
    continent: PropTypes.string,
};

WhereToBuy.defaultProps = {
    overlay: false,
};

export default WhereToBuy;
