import { Card, DataTable, Page, Layout, Text } from "@shopify/polaris";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/survey/responses")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Page title="Survey Responses">
      <Layout>
        <Layout.Section>
          <Card>
            <Text variant="headingMd">Survey Responses</Text>
            <DataTable
              columnContentTypes={["text", "text"]}
              headings={["Source", "Timestamp"]}
              rows={data.map(({ source, timestamp }) => [
                source,
                new Date(timestamp).toLocaleString(),
              ])}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Dashboard;
