//React
import { useEffect, useState } from 'react';
//NextJS
import Image from 'next/image';
import { useRouter } from 'next/router';
//react-bootstrap
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
//Data
import pjInfo from '../data/projects-info.json';
//Images - icons
import expand from '../images/icons/expand.svg';
import external from '../images/icons/external.svg';
//Images - projects
import chat_app from '../images/projects/chat_app1.png';
import indecision_app from '../images/projects/indecision_app.png';
import jd_mod from '../images/projects/jk2_glow.gif';
import my_website from '../images/logos/nextjs.svg';
import task_manager from '../images/projects/task_manager_app.jpg';
import recipe_project from '../images/projects/recipe_project.png';
import weather_app from '../images/projects/weather_app.png';

const ProjectAccordion = () => {
    const router = useRouter();
    const [selectedProject, setSelectedProject] = useState(5);
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const allImages = [chat_app, indecision_app, jd_mod, my_website, task_manager, recipe_project, weather_app];
    // const recipeImages = [];

    const handleShow = (selected) => {
        setSelectedImage(selected);
        setFullscreen('');
        setShow(true);
    }

    useEffect(() => {
        //This'll open the selected project based on the url tag.
        pjInfo.map((pj, index) => {
            if (pj.id == router.asPath.split('#')[1]) {
                setSelectedProject(index);
            }
        });
    }, [router.asPath]);

    return (
        <Container className="p-0">
            <h2 className="p-2">Projects</h2>
            <Accordion activeKey={ `${selectedProject}` } flush>
                { pjInfo.map((project, index) => 
                    <Accordion.Item className="bg-light-gray" eventKey={ `${index}` } id={ project.id } key={ index }>
                        <Accordion.Header className="bg-light-gray" onClick={ selectedProject === index ? () => setSelectedProject(-1) : () => setSelectedProject(index) }>
                            { project.descriptiveTitle } <div className="ps-2 text-muted">- { project.subtitle }</div>
                        </Accordion.Header>
                        <Accordion.Body className="d-flex flex-column align-items-center">
                            {/* Carousel of Progress section */}
                            {/* <Carousel>
                                { project.images.map((image, index) => 
                                    <Carousel.Item className="text-center" key={ index }>
                                        <img src={ image } />
                                    </Carousel.Item>
                                )}
                            </Carousel> */}

                            {/* Image section */}
                            <section className="image-container text-center m-3">
                                <div>
                                    <div className="d-flex justify-content-end">
                                        <button className="expand-icon" onClick={ () => handleShow(allImages[index]) }>
                                            <Image src={ expand } />
                                        </button>
                                    </div>
                                    <Image src={ allImages[index] } />
                                </div>
                            </section>

                            {/* Links section */}
                            <section className="d-flex">
                                { project.links[1] && 
                                    <a href={ project.links[1] } target="_blank">
                                        <span className="external-link nav-link">Source <Image src={ external } /></span>
                                    </a>
                                }
                                { project.links[2] &&
                                    <a as="a" href={ project.links[2] } target="_blank">
                                        <span className="external-link nav-link">Deployment <Image src={ external } /></span>
                                    </a>
                                }
                            </section>

                            {/* Body text section */}
                            <section>{ project.body }</section>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>

            {/* Modal used for pop up images to view a whole selected photo. */}
            <Modal className="d-flex" fullscreen={ fullscreen } onHide={ () => setShow(false) } size="lg" show={ show }>
                <Modal.Header className="bg-dark bg-gradient" closeButton closeVariant="white" />
                <Modal.Body className="bg-dark bg-gradient"><Image src={ selectedImage } /></Modal.Body>
            </Modal>
        </Container>
    );
}

export { ProjectAccordion as default }