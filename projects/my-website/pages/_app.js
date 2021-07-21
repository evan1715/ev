import Head from 'next/head.js';
import '../styles/globals.scss';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Evan's Website</title>
                <meta name="description" content="Evan's website" />
            </Head>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export { MyApp as default }