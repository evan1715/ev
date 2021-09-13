//NextJS
import Image from 'next/image';
//react-bootstrap
import Container from 'react-bootstrap/Container';
//Technology logos
import bootstrap from '../images/logos/bootstrap.svg';
import css from'../images/logos/css3.svg';
import express from '../images/logos/express.svg';
import handlebars from '../images/logos/handlebars.png';
import html from '../images/logos/html5.svg';
import javascript from '../images/logos/javascript.svg';
import mongodb from '../images/logos/mongodb.svg';
import mongoose from '../images/logos/mongoosejs.png';
// import mustache from '../images/logos/mustache.png';
import nextjs from '../images/logos/nextjs.svg';
import nodejs from '../images/logos/nodejs.svg';
import react from '../images/logos/react.svg';
import redux from '../images/logos/redux.svg';
import sass from '../images/logos/sass.svg';

const Technologies = () => {
    const images = ['HTML', 'CSS', 'JavaScript', 'Mustache', 'HandlebarsJS', 'React', 'Redux', 'Node.js', 'Express', 'Next.js', 'Sass', 'Bootstrap', 'MongoDB', 'Mongoose'];
    const files = [html, css, javascript, 'mustache', handlebars, react, redux, nodejs, express, nextjs, sass, bootstrap, mongodb, mongoose];

    return (
        <Container className="my-5">
            {/* <h2 className="p-2">Technologies</h2> */}
            <div className="bg-dark bg-gradient d-flex flex-wrap justify-content-around align-items-center">
                { images.map((tech, index) => {
                    if (index === 3) {
                        return (
                            <div className="p-4 text-center ms-3" key={ tech }>
                                <h3>{ tech }</h3>
                                <span id="mustache-logo">{'}'}</span>
                            </div>
                        );
                    }
                    return (
                        <div className="p-4 text-center" key={ tech }>
                            <h3>{ tech }</h3>
                            <Image alt={ `${tech} icon` } src={ files[index] } height={ 128 } width={ 128 } />
                        </div>
                    );
                })}
            </div>
        </Container>
    );
}

export { Technologies as default }