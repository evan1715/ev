import ProjectCards from '../components/ProjectCards.js';

const Home = () => (
    <>
        {/* Intro section */}
        <section className="border-start border-end border-success m-2 d-flex align-items-center justify-content-center vh-100">
            <h1 className="h-50 main-title">Evan McHugh</h1>
            <p>Self-learning software developer.</p>
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
        <section className="border-start border-end border-info m-2 d-flex align-items-center justify-content-center vh-100">
            Evan's home page
        </section>
    </>
);

export { Home as default }