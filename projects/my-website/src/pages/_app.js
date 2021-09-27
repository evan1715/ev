import Head from 'next/head.js';
import Container from 'react-bootstrap/Container';
import '../styles/globals.scss';
import Navigation from '../components/Navigation.js';
import Footer from '../components/Footer.js';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Evan's Website</title>
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

export { MyApp as default }