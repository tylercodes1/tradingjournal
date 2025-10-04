import fs from "fs/promises";
import path from "path";

const TOKEN = "pk_Kt5S3nIfRJS-pN-_1HkCug";
const STOCKS_FILE = "./stocks.json";
const OUTPUT_DIR = "../public"; // relative to script

// helper: delay (optional for rate limiting)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// fetch a logo for a given ticker
async function fetchLogo(ticker) {
  const url = `https://img.logo.dev/ticker/${encodeURIComponent(ticker)}?token=${TOKEN}&retina=true`;
  try {
    const res = await fetch(url);

    // Check if response is an image
    const contentType = res.headers.get("content-type") || "";
    if (!res.ok || !contentType.startsWith("image")) {
      console.warn(`No logo found for ${ticker} (status: ${res.status})`);
      return null;
    }

    const buffer = await res.arrayBuffer();
    return Buffer.from(buffer);
  } catch (err) {
    console.error(`Error fetching logo for ${ticker}: ${err.message}`);
    return null;
  }
}

// save logo buffer to file
async function saveLogo(ticker, buffer) {
  const ext = "png"; // assuming PNG response
  const filePath = path.join(OUTPUT_DIR, `${ticker}.${ext}`);
  await fs.writeFile(filePath, buffer);
  console.log(`✅ Saved logo for ${ticker} to ${filePath}`);
}

// main function
async function main() {
  try {
    // ensure output dir exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // read stocks.json
    const fileData = await fs.readFile(STOCKS_FILE, "utf-8");
    const stocks = JSON.parse(fileData);

    // iterate over each stock object
    for (const stock of stocks) {
      if (!stock.ticker) continue; // skip if no ticker
      const ticker = stock.ticker.toUpperCase();

      const logoBuffer = await fetchLogo(ticker);
      if (logoBuffer) {
        await saveLogo(ticker, logoBuffer);
      }

      // optional delay to avoid overloading API
      //   await delay(500);
    }

    console.log("🎉 All done!");
  } catch (err) {
    console.error("❌ Fatal error:", err.message);
  }
}

main();
