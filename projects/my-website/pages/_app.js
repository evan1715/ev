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
                {/* Bootstrap */}
                {/* <link 
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" 
                    rel="stylesheet" 
                    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" 
                    crossOrigin="anonymous" /> */}
            </Head>

            <Navigation />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export { MyApp as default }