import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact.js';
import ProjectCards from '../components/ProjectCards.js';
import Technologies from '../components/Technologies.js';

const Home = () => {
    const router = useRouter();

    return (
        <>
            {/* Intro section */}
            <section className="m-2 intro">
                <h1 className="main-title h-25">Evan McHugh</h1>

                <div className="h-25 px-4 main-center">
                    <p className="h4">Self-learning software developer through research and development with a high interest in technology.</p>
                    <div className="h4 link-info mt-1" onClick={ () => router.push('/coding#recipe-project') }>
                        Check out my highlighted work!
                    </div>
                </div>

                <div>
                    <Technologies mobile={ true } />
                </div>
            </section>

            {/* Animated border between sections */}
            <div className="card-animation" id="software-summary"><i /></div>

            {/* Middle section: Project cards */}
            <section className="middle-section border-orange m-2">
                <ProjectCards />
            </section>

            {/* Animated border between sections */}
            <div className="card-animation"><i /></div>

            {/* Last section  */}
            <section className="m-2 bottom-section p-2">
                <Container className="d-flex flex-column py-5">
                    <div className="m-1 p-1">
                        <h3>Next adventures?</h3>
                        <ul>
                            <li>Build a React Native app utilizing TypeScript and SQL.</li>
                            <li>Learn the proper ways of accessibility for a website.</li>
                            <li>Start a new chapter by diving deep into ASP.NET and C#.</li>
                        </ul>
                    </div>

                    <div className="m-1 p-1 my-5 py-5 border-top border-bottom">
                        <h3>Need more information?</h3>
                        <ul>
                            <li>Look at my coding page to get a view of projects and more!</li>
                            <li>Contact me!</li>
                        </ul>
                    </div>

                    <Contact />

                </Container>
            </section>
        </>
    );
}

export { Home as default }