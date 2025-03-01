import "@shopify/polaris/build/esm/styles.css";
import "../styles/globals.css"; // Ensure styles are properly imported
import { AppProvider } from "@shopify/polaris";
import React from "react";

function MyApp({ Component, pageProps }) {
  if (!Component) {
    console.error("Error: Component is undefined in _app.js");
    return <div>Error loading the page.</div>;
  }

  return (
    <AppProvider i18n={{}}>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
