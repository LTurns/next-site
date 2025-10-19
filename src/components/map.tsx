import React, { useCallback, useRef, useState } from "react";
import {
    GoogleMap,
    LoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import ExploreProductArea from "@containers/explore-product/layout-12";
import { Divider } from "@mui/material";

const whereToBuy = require("../data/whereToBuy.json");

// Import geocoded locations and contacts
const locations = require("../../geocoded.json");

const containerStyle = {
    width: "80%",
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
        <div className="mb--40">
        <h5>View All Partners</h5>
        <Divider style={{ marginBottom: "20px" }} />
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                onLoad={onLoad}
                onClick={() => setActiveMarkerId(null)}
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
                                    onCloseClick={() => {
                                        setActiveMarkerId(null);
                                        // Recenter map to fit all markers when InfoWindow closes
                                        if (mapRef.current) {
                                            const bounds = new window.google.maps.LatLngBounds();
                                            locations.forEach((l: { lat: number; lng: number }) => {
                                                bounds.extend({ lat: l.lat, lng: l.lng });
                                            });
                                            (mapRef.current as google.maps.Map).fitBounds(bounds);
                                        }
                                    }}
                                >
                                    <div
                                        className="gmap-infowindow"
                                        style={{
                                            width: "100%",
                                            maxWidth: "520px",
                                            minWidth: "340px",
                                            height: "520px",
                                            padding: "0",
                                            background: "transparent",
                                            boxSizing: "border-box",
                                            overflow: "visible",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        {(() => {
                                            const contact = getContactDetails(loc.id);
                                            return contact ? (
                                                <div style={{
                                                    width: "520px",
                                                    minWidth: "340px",
                                                    height: "520px",
                                                    padding: "0.5rem",
                                                    display: "flex",
                                                    // flexDirection: "column",
                                                    // alignItems: "stretch",
                                                }}>
                                                    <ExploreProductArea
                                                        data={{ products: [contact] }}
                                                        className="explore-product-infowindow"
                                                        space={1}
                                                        columns={12}
                                                    />
                                                </div>
                                            ) : null;
                                        })()}
                                    </div>
                                </InfoWindow>
                            )}
                        </Marker>
                    )
                )}
            </GoogleMap>
        </LoadScript>
        </div>
    );
}
