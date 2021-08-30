import Head from 'next/head.js';
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
            <div className="my-4 py-5">
                <Component {...pageProps} />
            </div>
            <Footer />
        </>
    );
}

export { MyApp as default }