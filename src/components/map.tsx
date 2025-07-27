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
                                            background: "#222",
                                            color: "#fff",
                                            padding: "12px 16px",
                                            borderRadius: "8px",
                                            boxShadow:
                                                "0 2px 8px rgba(0,0,0,0.5)",
                                            maxWidth: "420px",
                                            minWidth: "320px",
                                            fontSize: "15px",
                                            lineHeight: "1.6",
                                        }}
                                    >
                                        {(() => {
                                            const contact = getContactDetails(
                                                loc.id
                                            );
                                            return (
                                                <>
                                                    <p>
                                                        <strong>
                                                            {loc.address}
                                                        </strong>

                                                        <br></br>

                                                        <p>
                                                            Tel: {contact?.tel}
                                                        </p>
                                                        <p>
                                                            Email:{" "}
                                                            {contact?.email}
                                                        </p>
                                                        <p>
                                                            Website:{" "}
                                                            {contact?.website}
                                                        </p>
                                                    </p>
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
