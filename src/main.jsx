import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./store.js";
import "./styles.css";

document.title = `${store.name} | ${store.nameLatin}`;
document.documentElement.lang = store.lang;
document.querySelector('meta[name="description"]')?.setAttribute("content", store.tagline);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
