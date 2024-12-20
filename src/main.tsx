import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AppContextProvider from "./context/AppContext.tsx";
import Notify from "./components/ui/Notify.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <Notify />
      <App />
    </AppContextProvider>
  </StrictMode>
);
