import { Card, IndexTable, Page, Layout, Text, useIndexResourceState } from "@shopify/polaris";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/survey/responses")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const resourceName = { singular: "response", plural: "responses" };
  const { selectedResources, allResourcesSelected, handleSelectionChange } = useIndexResourceState(data);

  return (
    <Page title="Survey Responses">
      <Layout>
        <Layout.Section>
          <Card>
            <Text variant="headingMd">Survey Responses</Text>
            <IndexTable
              resourceName={resourceName}
              itemCount={data.length}
              selectedItemsCount={allResourcesSelected ? "All" : selectedResources.length}
              onSelectionChange={handleSelectionChange}
              headings={[
                { title: "Source" },
                { title: "Timestamp" }
              ]}
            >
              {data.map(({ source, timestamp }, index) => (
                <IndexTable.Row id={index.toString()} key={index} selected={selectedResources.includes(index.toString())}>
                  <IndexTable.Cell>{source}</IndexTable.Cell>
                  <IndexTable.Cell>{new Date(timestamp).toLocaleString()}</IndexTable.Cell>
                </IndexTable.Row>
              ))}
            </IndexTable>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Dashboard;
