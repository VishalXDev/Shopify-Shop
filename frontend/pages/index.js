import React from "react";
import { Page, Card, Layout, TextContainer } from "@shopify/polaris"; // Ensure Polaris components are correctly imported

const Home = () => {
  return (
    <Page title="Welcome to Shop Sense">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <TextContainer>
              <h1>Shop Sense - AI-Powered Recommendations</h1>
              <p>Discover personalized products using AI.</p>
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Home; // Ensure the component is properly exported
