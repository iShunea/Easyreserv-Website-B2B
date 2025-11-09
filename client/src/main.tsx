import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { configReady } from "./config/runtime-config";

// Wait for runtime config to load before rendering the app
configReady.then(() => {
  createRoot(document.getElementById("root")!).render(<App />);
});
