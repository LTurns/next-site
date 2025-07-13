const fs = require("fs");
const fetch = require("node-fetch");
require("dotenv").config();

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const { addresses } = require("./addresses.js");

async function geocodeAddress(address) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.status === "OK") {
    const location = data.results[0].geometry.location;
    console.log(`✅ Geocoded: ${address} => (${location.lat}, ${location.lng})`);
    return { address, lat: location.lat, lng: location.lng };
  } else {
    console.error(`❌ Failed to geocode: ${address} (${data.status})`);
    return null;
  }
}

async function run() {
  const results = [];
  for (const address of addresses) {
    const result = await geocodeAddress(address);
    if (result) results.push(result);
    await new Promise((r) => setTimeout(r, 200)); // avoid hitting API limits
  }
  fs.writeFileSync("./geocoded.json", JSON.stringify(results, null, 2));
  console.log("🎉 Geocoding complete. Results saved to geocoded.json");
}

run();
