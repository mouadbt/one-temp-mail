import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import EmailContextProvider from "./store/context/Providers/EmailContextProvider";

createRoot(document.getElementById("root")).render(
  <EmailContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </EmailContextProvider>,
);
