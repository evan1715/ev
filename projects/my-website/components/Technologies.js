import Image from 'next/image';
//Technology logos
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

const Technologies = () => {
    const images = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js', 'Express', 'Next.js', 'Sass', 'Bootstrap', 'MongoDB', 'Mongoose'];
    const files = [html, css, javascript, react, redux, nodejs, express, nextjs, sass, bootstrap, mongodb, mongoose];

    return (
        <>
            <h2 className="p-2">Technologies</h2>
            <div className="bg-dark bg-gradient d-flex flex-wrap justify-content-around">
                { images.map((tech, index) => 
                    <div className="p-4" key={ tech }>
                        <h3>{ tech }</h3>
                        <Image alt={ `${tech} icon` } src={ files[index] } height={ 128 } width={ 128 } />
                    </div>
                )}
            </div>
        </>
    );
}

export { Technologies as default }