import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./layout/MainLayout.jsx";
import { BrowserRouter } from "react-router";
import { RoutingPages } from "./RoutingPages.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RoutingPages />
  </BrowserRouter>
);
