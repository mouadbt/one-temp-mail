import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import EmailContextProvider from "./store/context/Providers/EmailContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <EmailContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </EmailContextProvider>
  </QueryClientProvider>,
);
