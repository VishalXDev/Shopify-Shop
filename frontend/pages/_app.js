// frontend/pages/_app.js

import '@shopify/polaris/build/esm/styles.css';
import '../styles/globals.css'; // Your global Tailwind CSS file
import { AppProvider } from '@shopify/polaris';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
