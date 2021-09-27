import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import ProjectCards from '../components/ProjectCards.js';
import Technologies from '../components/Technologies.js';


const Home = () => {
    const router = useRouter();

    return (
        <>
            {/* Intro section */}
            <section className="border-start border-end border-success m-2 d-flex flex-column align-items-center justify-content-center vh-100">

                <h1 className="main-title h-25">Evan McHugh</h1>

                <div className="d-flex flex-column align-items-center h-25 px-4">
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
            <section className="bg-dark bg-opacity-50 border-orange m-2 d-flex align-items-center justify-content-center min-vh-100">
                <ProjectCards />
            </section>

            {/* Animated border between sections */}
            <div className="card-animation"><i /></div>

            {/* Last section  */}
            <section className="m-2 bottom-section p-2">
                <Container className="d-flex flex-column py-5">
                    <div className="m-1 p-1">
                        <h6>Next adventures? As of 9-20-2021</h6>
                        <ul>
                            <li>To finish this website and continue learning NextJS and Bootstrap, as well as expanding my current knowledge.</li>
                            <li>Learn MySQL and PHP</li>
                            <li>Learn the proper ways to make a website fully accessible.</li>
                        </ul>
                    </div>

                    <div className="m-1 p-1 my-5 py-5 border-top border-bottom">
                        <h6>Need more information?</h6>
                        <ul>
                            <li>View my contact page to get in contact with me!</li>
                            <li>Look at my coding page to get a view of project and more!</li>
                        </ul>
                    </div>

                    <div className="m-1 p-1">
                        <h6>Side note</h6>
                        <p className="m-0">You may have noticed the displaced mustache on the side-scrolling technology images.</p>
                        <p className="m-0">I left the moustache like this on purpose because I found it humorous to have a displaced mustache.</p>
                    </div>
                </Container>
            </section>
        </>
    );
}

export { Home as default }