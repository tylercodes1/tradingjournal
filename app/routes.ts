import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  // About page → "/about"
  route("/test", "routes/test.jsx"),
] satisfies RouteConfig;
