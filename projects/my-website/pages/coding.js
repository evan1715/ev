import Image from 'next/image';
import styles from '../styles/coding.module.scss';
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
        <div className="d-flex flex-column align-items-center">
            <h1>Evan's coding page</h1>
            
            {/* Repository section */}
            <section className={ styles.section }>
                <h2 className={ styles.section_header }>Repository</h2>
                {/* Table */}
                <div className={ styles.ttable } role="grid">
                    {/* Table headers */}
                    <div className={ styles.thead }>
                        <div>Title</div>
                        <div>Description</div>
                        <div>Language</div>
                        <div>Technologies used</div>
                    </div>
                    {/* Table body */}
                    <div className={ styles.tbody }>
                        <div>body</div>
                    </div>
                </div>
            </section>

            {/* Technologies section */}
            <section className={ styles.section }>
                <h2 className={ styles.section_header }>Technologies</h2>
                <div className={ styles.techs }>
                    { images.map((tech, index) => 
                        <div className={ styles.techs_tech } key={ tech }>
                            <h3>{ tech }</h3>
                            <Image alt={ `${tech} icon` } src={ files[index] } height={ 128 } width={ 128 } />
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export { Coding as default }