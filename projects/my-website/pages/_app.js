import Head from 'next/head.js';
import '../styles/globals.scss';
import Navigation from '../components/Navigation.js';
import Footer from '../components/Footer.js';
import Container from 'react-bootstrap/Container';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Evan's Website</title>
                <meta name="description" content="Evan's website" />
            </Head>

            <Navigation />
            <Container fluid as="main" className="mb-5 mt-1 p-3">
                <Component {...pageProps} />
            </Container>
            <Footer />
        </>
    );
}

export { MyApp as default }

//Can't import global CSS file into index.js. That's done in _app.js
//CSS files have to have the file name *.module.css