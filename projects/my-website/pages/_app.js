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
            <main className="min-vh-99 m-4 py-5">
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
}

export { MyApp as default }

//Can't import global CSS file into index.js. That's done in _app.js
//CSS files have to have the file name *.module.css