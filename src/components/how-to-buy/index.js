import React, { useState } from "react";
import countryCoordinates from '../../../country_coordinates.json';
import geocodeAddresses from '../../../geocoded.json';
import whereToBuy from '../../data/whereToBuy.json';
import ExploreProductArea from "@containers/explore-product/layout-12";
import Map from "@components/map.tsx";
import { Divider } from "@mui/material";
// Haversine formula
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) ** 2 +
    Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) *
    Math.sin(dLon/2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Find closest distributor
function findClosestDistributor(country, geocodes = geocodeAddresses) {
  const user = countryCoordinates[country];
  if (!user) return null;
  return geocodes.reduce((closest, dist) => {
    const distance = haversine(user.lat, user.lon, dist.lat, dist.lng);
    return (!closest || distance < closest.distance)
      ? { ...dist, distance }
      : closest;
  }, null);
}

// Get distributors by continent
const europeDistributors = whereToBuy.filter(item => item.continent === "Europe");
const asiaDistributors = whereToBuy.filter(item => item.continent === "Asia");
const africaDistributors = whereToBuy.filter(item => item.continent === "Africa");
const northAmericaDistributors = whereToBuy.filter(item => item.continent === "North America");
const southAmericaDistributors = whereToBuy.filter(item => item.continent === "South America");
const oceaniaDistributors = whereToBuy.filter(item => item.continent === "Oceania");

export default function HowToBuy() {
  const [selectedCountry, setSelectedCountry] = useState("United Kingdom");
  const [closestCountry, setClosestCountry] = useState({});
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [closest, setClosest] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // Add state for continent dropdowns
  const [openContinents, setOpenContinents] = useState({
    Europe: false,
    Asia: false,
    Africa: false,
    "North America": false,
    "South America": false,
    Oceania: false,
  });

  const locations = [
    { lat: 37.7749, lng: -122.4194, label: "A" },
    { lat: 37.7849, lng: -122.4094, label: "B" },
    { lat: 37.7649, lng: -122.4294, label: "C" },
];


  // Add state for open Europe countries
  const [openEuropeCountries, setOpenEuropeCountries] = useState({});

  const industries = [
    "power",
    "telecoms",
    "overhead lines",
    "aboriculture"
  ];

  const services = [
    'repair',
    'distributor',
    'warranty repair',
    'light servicing',
    'demonstration'
  ]

  const handleChangeCountry = (e) => {
    setSelectedCountry(e.target.value);
    setSubmitted(false);
  };

  const handleChangeIndustry = (e) => {
    setSelectedIndustry(e.target.value);
    setSubmitted(false);
  };

  const handleChangeService = (e) => {
    setSelectedService(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let filtered = whereToBuy;
    if (selectedIndustry) {
      filtered = whereToBuy.filter(item =>
        Array.isArray(item.industry) && item.industry.includes(selectedIndustry)
      );
    }

    if (selectedService) {
      filtered = filtered.filter(item =>
        Array.isArray(item.service) && item.service.includes(selectedService)
      );
    }

    // If United Kingdom is selected, show all UK distributors, CBS first
    if (selectedCountry === "United Kingdom") {
      let ukDistributors = filtered.filter(item => item.country === "United Kingdom");
      const cbsIndex = ukDistributors.findIndex(item => item.name && item.name.toLowerCase().includes("cbs"));
      if (cbsIndex > -1) {
        const [cbs] = ukDistributors.splice(cbsIndex, 1);
        ukDistributors = [cbs, ...ukDistributors];
      }
      setClosest(ukDistributors);
    } else if (selectedCountry) {
      // If a country is selected, find the closest from the filtered list
      // Get geocoded addresses for filtered whereToBuy
      const filteredGeocodes = geocodeAddresses.filter(g =>
        filtered.some(item => item.id === g.id)
      );
      const closestDist = findClosestDistributor(selectedCountry, filteredGeocodes);
      if (closestDist) {
        const match = filtered.find(item => item.id === closestDist.id);
        setClosest(match ? [{ ...match, address: closestDist.address, distance: closestDist.distance }] : []);
      } else {
        setClosest([]);
      }
    } else if (filtered.length > 0) {
      // No country selected, show all filtered (no distance sorting)
      setClosest(filtered);
    } else {
      setClosest([]);
    }
    setSubmitted(true);
  };

  const toggleContinent = (continent) => {
    setOpenContinents((prev) => ({
      ...prev,
      [continent]: !prev[continent],
    }));
  };

  // Get unique countries from Europe distributors, United Kingdom first
  const europeCountries = Array.from(
    new Set(europeDistributors.map(item => item.country).filter(Boolean))
  )
    .sort((a, b) => {
      if (a === "United Kingdom") return -1;
      if (b === "United Kingdom") return 1;
      return a.localeCompare(b);
    });

  const toggleEuropeCountry = (country) => {
    setOpenEuropeCountries((prev) => ({
      ...prev,
      [country]: !prev[country],
    }));
  };

  return (
    <div className="container">
      <div className="p-4 max-w-lg mx-auto">
        <h5>How to Buy</h5>
        <Divider style={{ marginBottom: "20px" }} />
        <form onSubmit={handleSubmit}>
          <div className="how-to-buy-form mt--20 mb--40 col-12 gap-4 mb-4 items-center justify-center">
            <select
              value={selectedCountry}
              onChange={handleChangeCountry}
            >
              <option value="">Select a country</option>
              {Object.keys(countryCoordinates).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select
              value={selectedIndustry}
              onChange={handleChangeIndustry}
            >
              <option value="">Select an industry</option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
            <select
              value={selectedService}
              onChange={handleChangeService}
            >
              <option value="">Select a service</option>
              {services.map((srv) => (
                <option key={srv} value={srv}>{srv}</option>
              ))}
            </select>
            <button
              type="submit"
              disabled={!selectedCountry && !selectedIndustry}
            >
              Submit
            </button>
          </div>
        </form>

        {submitted && closest && Array.isArray(closest) && closest.length > 0 && (
          <div className="mt-4 p-4 border-2 border-yellow-400 rounded-xl bg-yellow-50 shadow-lg flex flex-col items-start">
            <h6 className="font-bold text-lg text-yellow-700 mb-1 flex items-center gap-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
              Closest {selectedService} to {selectedCountry || 'All Countries'}
            </h6>
                     <ExploreProductArea
              data={{
                products: closest,
              }}
              columns={4}
            />
          </div>
        )}

         <Map locations={locations} />

        {/**
         * Continent Sections
         */}
        {/* Europe */}
        <div key="Europe" className="mb-4">
          <button
            type="button"
            className="toggle-continent-view"
            onClick={() => toggleContinent("Europe")}
          >
            {openContinents["Europe"] ? "▼" : "►"} Europe
          </button>
          {openContinents["Europe"] && (
            <div>
              {europeCountries.map((country) => {
                const countryDistributors = europeDistributors.filter(
                  (item) => item.country === country
                );
                return (
                  <div key={country} className="mb-2">
                    <button
                      type="button"
                      className="toggle-continent-view country"
                      onClick={() => toggleEuropeCountry(country)}
                    >
                      {openEuropeCountries[country] ? "▼" : "►"} {country}
                    </button>
                    {openEuropeCountries[country] && (
                      <ExploreProductArea
                        data={{
                          products: countryDistributors,
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Asia */}
        <div key="Asia" className="mb-4">
          <button
            type="button"
            className="toggle-continent-view"
            onClick={() => toggleContinent("Asia")}
          >
            {openContinents["Asia"] ? "▼" : "►"} Asia
          </button>
          {openContinents["Asia"] && (
            <ExploreProductArea
              data={{
                products: asiaDistributors,
              }}
            />
          )}
        </div>

        {/* Africa */}
        <div key="Africa" className="mb-4">
          <button
            type="button"
            className="toggle-continent-view"
            onClick={() => toggleContinent("Africa")}
          >
            {openContinents["Africa"] ? "▼" : "►"} Africa
          </button>
          {openContinents["Africa"] && (
            <ExploreProductArea
              data={{
                products: africaDistributors,
              }}
            />
          )}
        </div>

        {/* North America */}
        <div key="North America" className="mb-4">
          <button
            type="button"
            className="toggle-continent-view"
            onClick={() => toggleContinent("North America")}
          >
            {openContinents["North America"] ? "▼" : "►"} North America
          </button>
          {openContinents["North America"] && (
            <ExploreProductArea
              data={{
                products: northAmericaDistributors,
              }}
            />
          )}
        </div>

        {/* South America */}
        <div key="South America" className="mb-4">
          <button
            type="button"
            className="toggle-continent-view"
            onClick={() => toggleContinent("South America")}
          >
            {openContinents["South America"] ? "▼" : "►"} South America
          </button>
          {openContinents["South America"] && (
            <ExploreProductArea
              data={{
                products: southAmericaDistributors,
              }}
            />
          )}
        </div>

        {/* Oceania */}
        <div key="Oceania" className="mb-4">
          <button
            type="button"
            className="toggle-continent-view"
            onClick={() => toggleContinent("Oceania")}
          >
            {openContinents["Oceania"] ? "▼" : "►"} Oceania
          </button>
          {openContinents["Oceania"] && (
            <ExploreProductArea
              data={{
                products: oceaniaDistributors,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
