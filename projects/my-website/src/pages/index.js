import ProjectCards from '../components/ProjectCards.js';
import Technologies from '../components/Technologies.js';

const Home = () => (
    <>
        {/* Intro section */}
        <section className="border-start border-end border-success m-2 d-flex flex-column align-items-center justify-content-center vh-100">
            <>
                <h1 className="h-50 main-title">Evan McHugh</h1>
                <p>Self-learning software developer.</p>
            </>
            <>
                <Technologies mobile={ true } />
            </>
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
        {/* <section className="border-start border-end border-info m-2 min-vh-100 d-flex flex-column justify-content-center align-items-center"> */}
        <section className="m-2 bottom-section">
            <h2>Technologies</h2>
            <Technologies mobile={ false } />
        </section>
    </>
);

export { Home as default }