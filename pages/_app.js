import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mehmet Akif Duba</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
