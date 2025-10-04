import fs from "fs/promises";

const API_KEY = "JdIdAazRv8tdvuljYdYgrlCESxr_0mn6";
const INITIAL_URL = `https://api.polygon.io/v3/reference/tickers?market=stocks&active=true&order=asc&limit=100&sort=ticker&apiKey=${API_KEY}`;

// simple delay helper
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchAllTickers(url, allResults = []) {
  try {
    console.log(`📡 Fetching: ${url}`);

    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} - ${res.statusText}`);

    const data = await res.json();
    if (Array.isArray(data.results)) {
      allResults.push(...data.results);
      console.log(`✅ Collected ${allResults.length} tickers so far`);
    }

    if (data.next_url) {
      // Append API key if not already present
      const nextUrl = data.next_url.includes("apiKey=")
        ? data.next_url
        : `${data.next_url}&apiKey=${API_KEY}`;

      console.log("⏳ Waiting 12.2 seconds before next call...");
      await delay(12200);

      return fetchAllTickers(nextUrl, allResults);
    }

    return allResults;
  } catch (err) {
    console.error("❌ Error fetching tickers:", err.message);
    return allResults;
  }
}

async function main() {
  const results = await fetchAllTickers(INITIAL_URL);
  await fs.writeFile("stocks.json", JSON.stringify(results, null, 2));
  console.log(`🎉 Done! Saved ${results.length} tickers to stocks.json`);
}

main();
