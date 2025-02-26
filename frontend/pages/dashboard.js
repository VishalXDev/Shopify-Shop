import { Card, DataTable } from "@shopify/polaris";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/survey/responses")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <Card title="Survey Responses">
            <DataTable
                columnContentTypes={["text", "text"]}
                headings={["Source", "Timestamp"]}
                rows={data.map(({ source, timestamp }) => [source, new Date(timestamp).toLocaleString()])}
            />
        </Card>
    );
};

export default Dashboard;
