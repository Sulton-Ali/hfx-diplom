import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const myTheme: MantineThemeOverride = {
  primaryColor: "indigo",
  globalStyles: (theme) => ({
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    "*": {
      fontFamily: "Roboto, sans-serif",
      fontSize: "14px",
      lineHeight: 1.25,
    },
  }),
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider withNormalizeCSS withGlobalStyles theme={myTheme}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
