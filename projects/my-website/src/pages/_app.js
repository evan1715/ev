/**
 * Custom Next.js App component. Wraps all pages with Navigation, Footer, and global styles.
 * @module pages/_app
 */
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import '../styles/globals.scss';
import Footer from '../components/Footer.js';
import Navigation from '../components/Navigation.js';

/** @param {import('next/app').AppProps} props */
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Evan&apos;s Website</title>
                <meta name="description" content="Evan's website" />
            </Head>

            <Navigation />
            <Container fluid as="main" className="mb-5 mt-1 px-2 py-3">
                <Component {...pageProps} />
            </Container>
            <Footer />
        </>
    );
}

export { MyApp as default };
