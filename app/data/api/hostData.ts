const localhost = "http://localhost:8000";
const remoteHost = "https://backendsandbox.onrender.com";
const localClienthost = "http://localhost:5173";
const remoteClientHost = "https://chongobongo.vercel.app";
const redirectPath = "/login/callback";

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = process.env.NODE_ENV === "development";

export function getHost(): string {
  if (isProduction) return remoteHost;
  if (isDevelopment) return localhost;

  return localhost; // test or unknown
}

export function getClientHost(): string {
  if (isProduction) return remoteClientHost;
  if (isDevelopment) return localClienthost;

  return localClienthost; // test or unknown
}

export function getLoginRedirectURI() {
  const redirectBase = isProduction ? remoteClientHost : localClienthost;
  return redirectBase + redirectPath;
}
