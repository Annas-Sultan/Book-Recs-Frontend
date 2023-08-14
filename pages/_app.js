import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { Analytics } from '@vercel/analytics/react';
import client from '../apollo-client';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Analytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
