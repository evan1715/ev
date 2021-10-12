import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import EmailMe from '../components/EmailMe.js';
import LinkedInBadge from '../components/LinkedInBadge.js';
import ProjectCards from '../components/ProjectCards.js';
import Technologies from '../components/Technologies.js';


const Home = () => {
    const router = useRouter();

    return (
        <>
            {/* Intro section */}
            <section className="border-start border-end border-success m-2 d-flex flex-column align-items-center justify-content-center vh-100 intro">

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
            <div className="card-animation"><i /></div>

            {/* Middle section: Project cards */}
            <section className="middle-section bg-dark bg-opacity-50 border-orange m-2 d-flex align-items-center justify-content-center min-vh-100">
                <div className="middle-sub">
                    <ProjectCards />
                    </div>
            </section>

            {/* Animated border between sections */}
            <div className="card-animation"><i /></div>

            {/* Last section  */}
            <section className="m-2 bottom-section p-2">
                <Container className="d-flex flex-column py-5">
                    <div className="m-1 p-1">
                        <h5>Next adventures?</h5>
                        <ul>
                            <li>Learn PHP and improve my skills in SQL.</li>
                            <li>Learn the proper ways to make a website fully accessible.</li>
                        </ul>
                    </div>

                    <div className="m-1 p-1 my-5 py-5 border-top border-bottom">
                    {/* <div className="m-1 p-1 my-5 py-5 border-top"> */}
                        <h5>Need more information?</h5>
                        <ul>
                            <li>Look at my coding page to get a view of project and more!</li>
                            <li>Contact me!</li>
                        </ul>
                    </div>

                    <div className="m-1 p-1 d-flex flex-column align-items-center">
                        <h5>Want to chat?</h5>
                        <div className="d-flex flex-row flex-wrap w-100">
                            <div className="flex-grow-1">
                                <EmailMe />
                            </div>
                            <div className="d-flex flex-grow-1 mt-3 pt-3 align-items-start justify-content-center">
                                <LinkedInBadge />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export { Home as default }