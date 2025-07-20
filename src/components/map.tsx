import React, { useCallback, useRef, useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
const whereToBuy = require("../data/whereToBuy.json");

// Import geocoded locations and contacts
const locations = require("../../geocoded.json");

const containerStyle = {
  width: "100%",
  height: "600px",
  display: 'block',
  margin: '0 auto',
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
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        onLoad={onLoad}
        onClick={() => setActiveMarkerId(null)} // Close InfoWindow when clicking elsewhere
      >
        {locations.map(
          (loc: { id: number; lat: number; lng: number; address: string }) => (
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
                  <div>
                    {(() => {
                      const contact = getContactDetails(loc.id);
                      return (
                        <>
                        <div className="gmap-infowindow">
                        <p>Address</p>
                        <p>{contact?.name}</p>
                        <p>{contact?.county}</p>
                        <p>{contact?.postcode}</p>
                        <p>{contact?.country}</p>

                        <p>Contact Details:</p>
                          <p>{contact?.contact}</p>
                          <p>{contact?.tel}</p>
                          <p>{contact?.mobile}</p>
                          <p>{contact?.email}</p>
                          <a href={contact?.website} target="_blank" rel="noopener noreferrer">{contact.website}</a>
                                <img
                                src={`/images/whereToBuy/${contact.img}`}
                                alt={contact.name}
                                style={{ maxWidth: "50%", height: "auto" }}
                                />
                                </div>
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
