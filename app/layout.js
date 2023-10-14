import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import Layout from '../components/Layout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
