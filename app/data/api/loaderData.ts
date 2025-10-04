import { getHost } from "./hostData";

const host = getHost();

export async function getPolymarketLists() {
  return fetch(`https://gamma-api.polymarket.com/events`, {
    method: "GET",
  });
}

export async function getPolymarketTags() {
  return fetch(`https://gamma-api.polymarket.com/tags`, {
    method: "GET",
  });
}

export async function getPolymarketMarkets() {
  const params = new URLSearchParams({
    limit: "100",
    tag_id: "1013",
    order: "eventStartTime",
  });
  return fetch(
    `https://gamma-api.polymarket.com/markets?${params.toString()}`,
    {
      method: "GET",
    }
  );
}
