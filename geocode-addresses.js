const fs = require("fs");
const fetch = require("node-fetch");
require("dotenv").config();

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const { addresses } = require("./addresses");

async function geocodeAddress(address, id) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
    )}&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.status === "OK") {
        const { location } = data.results[0].geometry;
        console.log(
            `✅ Geocoded [${id}]: ${address} => (${location.lat}, ${location.lng})`
        );
        return {
            id, // Add incremental ID
            address,
            lat: location.lat,
            lng: location.lng,
        };
    }
    console.error(`❌ Failed to geocode [${id}]: ${address} (${data.status})`);
    return null;
}

async function run() {
    const results = [];
    await addresses.reduce(
        (promiseChain, address, index) =>
            promiseChain.then(async () => {
                const id = index + 1; // Start IDs at 1
                const result = await geocodeAddress(address, id);
                if (result) results.push(result);
                // Avoid hitting API limits
                return new Promise((resolve) => setTimeout(resolve, 200));
            }),
        Promise.resolve()
    );
    fs.writeFileSync("./geocoded.json", JSON.stringify(results, null, 2));
    console.log("🎉 Geocoding complete. Results saved to geocoded.json");
}

run();
