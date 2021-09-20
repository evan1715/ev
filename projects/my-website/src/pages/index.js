import ProjectCards from '../components/ProjectCards.js';
import Technologies from '../components/Technologies.js';

const Home = () => (
    <>
        {/* Intro section */}
        <section className="border-start border-end border-success m-2 d-flex flex-column align-items-center justify-content-center vh-100">
            <>
                <h1 className="h-50 main-title">Evan McHugh</h1>
                <h2>~~ WEBSITE IS INCOMPLETE -- STILL WORKING ON IT. APOLOGIES FOR THE CONSTRUCTION ~~</h2>
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
        <section className="m-2 bottom-section">
            <div>Next adventures? As of 9-20-2021
                <ul>
                    <li>To finish this website and continue learning NextJS and Bootstrap, as well as expanding my current knowledge.</li>
                    <li>Learn MySQL and PHP</li>
                    <li>Thoroughly learn the proper ways to make a website full accessible to the highest standards there are.</li>
                </ul>
            </div>
        </section>
    </>
);

export { Home as default }