import Link from 'next/link';
import { Page, Card, Button } from "@shopify/polaris";

export default function Home() {
    return (
        <Page title="Shopify Survey App">
            <Card sectioned>
                <p>Welcome to the Shopify Survey App</p>
                <Link href="/dashboard">
                    <Button primary>Go to Dashboard</Button>
                </Link>
            </Card>
        </Page>
    );
}
