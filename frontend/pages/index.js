import Link from 'next/link';
import { Page, Card, Button, Stack, Text } from "@shopify/polaris";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
    return (
        <Page title="Shopify Survey App">
            <Card sectioned>
                <Text variant="headingMd">Welcome to the Shopify Survey App</Text>
                <p>Gather insights from your users with ease.</p>

                <Link href="/dashboard" passHref>
                    <Button primary>Go to Dashboard</Button>
                </Link>
            </Card>

            {/* Social Media Section */}
            <Card sectioned>
                <Text variant="headingMd">Connect with Me</Text>
                <Stack spacing="loose">
                    <a href="https://github.com/VishalXDev" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} /> GitHub
                    </a>
                    <a href="https://linkedin.com/in/vishal-dwivedy" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} /> LinkedIn
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={24} /> Twitter
                    </a>
                </Stack>
            </Card>

            {/* Footer */}
            <Card sectioned>
                <Text alignment="center" variant="bodyMd">
                    Created by <strong>Vishal Dwivedy</strong> © {new Date().getFullYear()}
                </Text>
            </Card>
        </Page>
    );
}
