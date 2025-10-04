import { useLoaderData } from "react-router";
import Table from "../components/Table/Table";
import {
  getPolymarketLists,
  getPolymarketTags,
  getPolymarketMarkets,
} from "../data/api/loaderData";

export function meta({}) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

// Server-side loader
export async function loader() {
  const tagListData = await getPolymarketMarkets();
  return tagListData; // only runs server-side
}

function getCompany(s) {
  if (s.includes("Broadcom")) return "Broadcom";

  const match = s.match(/Will\s+(.*?)\s*\(/i);
  return match ? match[1] : null;
}

function getClosed(endDateIso) {
  const today = new Date();
  const endDate = new Date(endDateIso);
  return today > endDate ? "✅" : "";
}

function getEndDate(endDate) {
  return new Date(endDate).toLocaleDateString("en-US");
}

function getVolume(volume) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(volume);
}

function getOdds(outcomes) {
  const odds = JSON.parse(outcomes)[0];

  const percent = parseFloat(odds) * 100;
  const formatted = percent.toFixed(2) + "%";
  return formatted;
}

function getLastTradedPrice(lastTradedPrice) {
  const num = Number(lastTradedPrice);
  if (num < 0.01) return 0;

  if (num > 0.99) return 1;

  return num;
}

export default function Home() {
  const tld = useLoaderData();
  const tagListData = tld.filter(
    (item) => !item.question.toLowerCase().includes("MrBeast".toLowerCase())
  );
  console.log(tagListData);
  const columns = [
    { header: "Company", accessor: "question", transformer: getCompany },
    { header: "End Date", accessor: "endDateIso", transformer: getEndDate },
    { header: "Volume", accessor: "volume", transformer: getVolume },
    { header: "Finished", accessor: "endDateIso", transformer: getClosed },
    { header: "Market Odds", accessor: "outcomePrices", transformer: getOdds },
    {
      header: "Outcome",
      accessor: "lastTradePrice",
      transformer: getLastTradedPrice,
    },
  ];

  return (
    <>
      <Table columns={columns} data={tagListData} />
    </>
  );
}
