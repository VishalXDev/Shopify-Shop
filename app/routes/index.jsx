import { useEffect } from 'react';
import { useAppBridge } from '@shopify/app-bridge-react';
import { getSessionToken } from '@shopify/app-bridge-utils';

export default function Index() {
  const app = useAppBridge();

  useEffect(() => {
    const injectScript = async () => {
      const token = await getSessionToken(app);
      const scriptTag = {
        event: 'onload',
        src: 'https://your-app-url.com/survey-form.js', // Replace with your JS file URL
      };
      await fetch('/api/scripttag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(scriptTag),
      });
    };
    injectScript();
  }, [app]);

  return <div>Welcome to ShopSense!</div>;
}