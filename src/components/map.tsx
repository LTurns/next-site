import React, { useCallback, useRef, useState } from "react";
import {
    GoogleMap,
    LoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
const whereToBuy = require("../data/whereToBuy.json");

// Import geocoded locations and contacts
const locations = require("../../geocoded.json");

const containerStyle = {
    width: "100%",
    height: "600px",
    display: "block",
    margin: "0 auto",
};

export default function Map() {
    const mapRef = useRef(null);
    const [activeMarkerId, setActiveMarkerId] = useState<number | null>(null); // Tracks which marker is active

    // Adjust map bounds to include all markers
    const onLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
        const bounds = new window.google.maps.LatLngBounds();

        locations.forEach((loc: { lat: number; lng: number }) => {
            bounds.extend({ lat: loc.lat, lng: loc.lng });
        });

        map.fitBounds(bounds);
    }, []);

    // Find contact details for a given location ID
    const getContactDetails = (id: number) =>
        whereToBuy.find((contact: { id: number }) => contact.id === id);

    return (
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                onLoad={onLoad}
                onClick={() => setActiveMarkerId(null)} // Close InfoWindow when clicking elsewhere
            >
                {locations.map(
                    (loc: {
                        id: number;
                        lat: number;
                        lng: number;
                        address: string;
                    }) => (
                        <Marker
                            key={loc.id}
                            position={{ lat: loc.lat, lng: loc.lng }}
                            label={`${loc.id}`}
                            onClick={() =>
                                setActiveMarkerId(
                                    activeMarkerId === loc.id ? null : loc.id
                                )
                            }
                        >
                            {activeMarkerId === loc.id && (
                                <InfoWindow
                                    position={{ lat: loc.lat, lng: loc.lng }}
                                    onCloseClick={() => setActiveMarkerId(null)}
                                >
                                    <div className="gmap-infowindow">
                                        {(() => {
                                            const contact = getContactDetails(
                                                loc.id
                                            );
                                            return (
                                                <>
                                                    <p>
                                                        <strong>
                                                            {contact?.name}
                                                        </strong>
                                                    </p>

                                                    <div
                                                        style={{
                                                            marginBottom:
                                                                "12px",
                                                        }}
                                                    >
                                                        <p
                                                            style={{
                                                                margin: "4px 0",
                                                                fontWeight:
                                                                    "500",
                                                                color: "#2c3e50",
                                                            }}
                                                        >
                                                            Address:
                                                        </p>
                                                        <p
                                                            style={{
                                                                margin: "2px 0",
                                                            }}
                                                        >
                                                            {contact?.county}
                                                        </p>
                                                        <p
                                                            style={{
                                                                margin: "2px 0",
                                                            }}
                                                        >
                                                            {contact?.postcode}
                                                        </p>
                                                        <p
                                                            style={{
                                                                margin: "2px 0",
                                                            }}
                                                        >
                                                            {contact?.country}
                                                        </p>
                                                    </div>

                                                    <div
                                                        style={{
                                                            marginBottom:
                                                                "12px",
                                                        }}
                                                    >
                                                        <p
                                                            style={{
                                                                margin: "4px 0",
                                                                fontWeight:
                                                                    "500",
                                                                color: "#2c3e50",
                                                            }}
                                                        >
                                                            Contact Details:
                                                        </p>
                                                        {contact?.contact && (
                                                            <p
                                                                style={{
                                                                    margin: "2px 0",
                                                                }}
                                                            >
                                                                {
                                                                    contact.contact
                                                                }
                                                            </p>
                                                        )}
                                                        {contact?.tel && (
                                                            <p
                                                                style={{
                                                                    margin: "2px 0",
                                                                }}
                                                            >
                                                                Tel:{" "}
                                                                {contact.tel}
                                                            </p>
                                                        )}
                                                        {contact?.mobile && (
                                                            <p
                                                                style={{
                                                                    margin: "2px 0",
                                                                }}
                                                            >
                                                                Mobile:{" "}
                                                                {contact.mobile}
                                                            </p>
                                                        )}
                                                        {contact?.email && (
                                                            <p
                                                                style={{
                                                                    margin: "2px 0",
                                                                }}
                                                            >
                                                                Email:{" "}
                                                                {contact.email}
                                                            </p>
                                                        )}
                                                        {contact?.website && (
                                                            <p
                                                                style={{
                                                                    margin: "2px 0",
                                                                }}
                                                            >
                                                                <a
                                                                    href={
                                                                        contact.website
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    Visit
                                                                    Website
                                                                </a>
                                                            </p>
                                                        )}
                                                    </div>

                                                    {/* {contact?.img && (
                            <img
                              src={`/images/whereToBuy/${contact.img}`}
                              alt={contact.name}
                              style={{ 
                                maxWidth: "100%", 
                                height: "auto",
                                marginTop: "8px",
                                borderRadius: "8px",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                              }}
                            />
                          )} */}
                                                </>
                                            );
                                        })()}
                                    </div>
                                </InfoWindow>
                            )}
                        </Marker>
                    )
                )}
            </GoogleMap>
        </LoadScript>
    );
}
