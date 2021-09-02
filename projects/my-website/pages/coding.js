import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import bootstrap from '../images/bootstrap.svg';
import css from'../images/css3.svg';
import express from '../images/express.svg';
import html from '../images/html5.svg';
import javascript from '../images/javascript.svg';
import mongodb from '../images/mongodb.svg';
import mongoose from '../images/mongoosejs.png';
import nextjs from '../images/nextjs.svg';
import nodejs from '../images/nodejs.svg';
import react from '../images/react.svg';
import redux from '../images/redux.svg';
import sass from '../images/sass.svg';

const Coding = () => {
    const images = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js', 'Express', 'Next.js', 'Sass', 'Bootstrap', 'MongoDB', 'Mongoose'];
    const files = [html, css, javascript, react, redux, nodejs, express, nextjs, sass, bootstrap, mongodb, mongoose];

    return (
        <Container className="d-flex flex-column align-items-center">
            <h1>Evan's coding page</h1>
            
            {/* Repository section */}
            <section className="w-100">
                <h2 className="pb-4">Repository</h2>
                {/* Table */}
                <div className="bg-dark bg-gradient" role="grid">
                    {/* Table headers */}
                    <div className="d-flex justify-content-evenly">
                        <div>Title</div>
                        <div>Description</div>
                        <div>Language</div>
                        <div>Technologies used</div>
                    </div>
                    {/* Table body */}
                    <div className="d-flex justify-content-evenly">
                        <div>body</div>
                    </div>
                </div>
            </section>

            {/* Technologies section */}
            <section className="w-100">
                <h2 className="pb-4">Technologies</h2>
                <div className="bg-dark bg-gradient d-flex flex-wrap justify-content-around">
                    { images.map((tech, index) => 
                        <div className="p-4" key={ tech }>
                            <h3>{ tech }</h3>
                            <Image alt={ `${tech} icon` } src={ files[index] } height={ 128 } width={ 128 } />
                        </div>
                    )}
                </div>
            </section>
        </Container>
    )
}

export { Coding as default }