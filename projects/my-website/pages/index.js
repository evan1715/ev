//This is the homepage.
//Can't import global CSS file. That's done in _app.js

const Home = () => (
    <div className="d-flex justify-content-center flex-column">
        <section className="d-flex align-items-center justify-content-center border border-success vh-100">
            <h1 className="h-50">Intro section</h1>
        </section>

        <section className="d-flex align-items-center justify-content-center border border-info vh-100">
            Evan's home page
        </section>

        <section className="d-flex align-items-center justify-content-center border border-success vh-100">
            Major projects
        </section>


    </div>
);

export { Home as default }