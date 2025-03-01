import "@shopify/polaris/build/esm/styles.css"; // Shopify Polaris styles
import "../styles/globals.css"; // Tailwind global styles

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
