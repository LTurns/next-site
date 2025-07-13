import React, { useCallback, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const locations = require("../../geocoded.json");

const containerStyle = {
  width: "100%",
  height: "600px",
};

export default function Map() {
  const mapRef = useRef(null);

  // This function is called when the map instance is loaded
  const onLoad = useCallback((map) => {
    mapRef.current = map;

    const bounds = new window.google.maps.LatLngBounds();

    locations.forEach((loc) => {
      bounds.extend({ lat: loc.lat, lng: loc.lng });
    });

    // Fit map to bounds (all markers visible)
    map.fitBounds(bounds);
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        // center and zoom can be omitted since we use fitBounds on load
        onLoad={onLoad}
      >
        {locations.map((loc, i) => (
          <Marker
            key={i}
            position={{ lat: loc.lat, lng: loc.lng }}
            label={`${i + 1}`}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
