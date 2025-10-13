import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import clsx from "clsx";
import Anchor from "@ui/anchor";
import { makeStyles } from "@mui/styles";
import { Divider } from "@mui/material";
import { FaLocationPin } from "react-icons/fa6";

const useStyles = makeStyles({
    category: {
        textAlign: "right",
    },
});

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
                        <div className="chip-group">
                            <span className="chip-title"> Industry: </span>
                            {industry.map((ind, idx) => (
                                <span key={`industry-${idx}`} className="chip">{ind}</span>
                            ))}
                        </div>
                        <div className="chip-group" style={{ marginTop: "0.5rem" }}>
                            <span className="chip-title"> Service: </span>
                            {service.map((srv, idx) => (
                                <span key={`service-${idx}`} className="chip-service">{srv}</span>
                            ))}
                        </div>
                        <Divider sx={{ marginBlock: 2 }}></Divider>
                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                            <Anchor path={website} className="where-to-buy-title">
                               <FaLocationPin /> {name}
                            </Anchor>
                            <Image
                                style={{
                                    objectFit: "contain",
                                    borderRadius: "10px",
                                    boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                                    background: "#ffffffff",
                                    border: "1px solid #41485a",
                                }}
                                src={`/images/whereToBuy/${image}`}
                                width={80}
                                height={80}
                                alt={name}
                            />
                        </div>

                        <Divider sx={{ marginBlock: 2 }}></Divider>
                        <div className="where-to-buy-address">
                            {roadOne && <span>{roadOne}</span>}
                            {roadTwo && <span>{roadTwo}</span>}
                            {county && <span>{county}</span>}
                            {country && <span>{country}</span>}
                            {postcode && <span>{postcode}</span>}
                        </div>
                        <Divider sx={{ marginBlock: 2 }}></Divider>
                        <div className="where-to-buy-details" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                            {contact && <span><strong>Contact:</strong> {contact}</span>}
                            {tel && <span><a href={`tel:${tel}`}>Tel: {tel}</a></span>}
                            {mobile && <span><a href={`tel:${mobile}`}>Mobile: {mobile}</a></span>}
                            {email && <span><a href={`mailto:${email}`}>Email: {email}</a></span>}
                            {fax && <span><a href={`tel:${fax}`}>Fax: {fax}</a></span>}
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
