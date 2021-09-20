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
//Component
import RecipeReadme from './RecipeReadme.js';
//Data
import pjInfo from '../data/projects-info.json';
//Images - icons
import expand from '../images/icons/expand.svg';
import external from '../images/icons/external.svg';
//Images - projects
import chat_app from '../images/projects/chat_app1.png';
import chat_app2 from '../images/projects/chat_app2.png';
import chat_app3 from '../images/projects/chat_app3.png';
import indecision_app from '../images/projects/indecision_app1.png';
import indecision_app2 from '../images/projects/indecision_app2.png';
import jd_mod from '../images/projects/jk2_glow.gif';
import my_website from '../images/logos/nextjs.svg';
import task_manager from '../images/projects/task_manager_app1.png';
import task_manager2 from '../images/projects/task_manager_app2.png';
import task_manager3 from '../images/projects/task_manager_app3.png';
import recipe_project1 from '../images/projects/recipe_project1.png';
import recipe_project2 from '../images/projects/recipe_project2.png';
import recipe_project3 from '../images/projects/recipe_project3.png';
import recipe_project4 from '../images/projects/recipe_project4.png';
import recipe_project5 from '../images/projects/recipe_project5.png';
import recipe_project6 from '../images/projects/recipe_project6.png';
import recipe_project7 from '../images/projects/recipe_project7.png';
import recipe_project8 from '../images/projects/recipe_project8.png';
import recipe_project9 from '../images/projects/recipe_project9.png';
import recipe_project10 from '../images/projects/recipe_project10.png';
import recipe_project11 from '../images/projects/recipe_project11.png';
import recipe_project12 from '../images/projects/recipe_project12.png';
import recipe_project13 from '../images/projects/recipe_project13.png';
import recipe_project14 from '../images/projects/recipe_project14.png';
import recipe_project15 from '../images/projects/recipe_project15.png';
import weather_app from '../images/projects/weather_app1.png';
import weather_app2 from '../images/projects/weather_app2.png';

const ProjectAccordion = () => {
    //Router via NextJS
    const router = useRouter();
    //State
    const [selectedProject, setSelectedProject] = useState(5);
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [showReadme, setShowReadme] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);
    //Images
    const chatApp = [chat_app, chat_app2, chat_app3];
    const indecisionApp = [indecision_app, indecision_app2];
    const jdMod = [jd_mod];
    const myWebsite = [my_website];
    const taskManager = [task_manager, task_manager2, task_manager3];
    const recipeProject = [recipe_project1, recipe_project2, recipe_project3, recipe_project4, recipe_project5, recipe_project6, recipe_project7, recipe_project8, recipe_project9, recipe_project10, recipe_project11, recipe_project12, recipe_project13, recipe_project14, recipe_project15];
    const weatherApp = [weather_app, weather_app2];

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
                        <Accordion.Header className="bg-light-gray" onClick={ selectedProject === index ? 
                            () => setSelectedProject(-1)
                            : 
                            () => setSelectedProject(index)
                        }>
                            { project.descriptiveTitle } <div className="ps-2 text-muted">- { project.subtitle }</div>
                        </Accordion.Header>
                        
                        <Accordion.Body className="d-flex flex-column align-items-center">

                            {/* Image section */}
                            <section className="image-container text-center m-3">
                                <div>
                                    {/* Carousel of Progress section */}
                                    <Carousel 
                                        className="cursor-pointer" 
                                        controls={ false } 
                                        indicators={ false } 
                                        interval={ 3000 } 
                                        keyboard={ false } 
                                        onClick={ () => handleShow(index) } 
                                        pause={ false } 
                                        touch={ false }
                                    >
                                        { index === 0 && chatApp.map((image, inx) => 
                                            <Carousel.Item className="text-center" key={ inx }>
                                                <Image onClick={ () => handleShow(index) } src={ image } />
                                            </Carousel.Item>
                                        )}
                                        { index === 1 && indecisionApp.map((image, inx) =>
                                            <Carousel.Item className="text-center" key={ inx }>
                                                <Image src={ image } />
                                            </Carousel.Item>
                                        )}
                                        { index === 2 && jdMod.map((image, inx) =>
                                            <Carousel.Item className="text-center" key={ inx }>
                                                <Image src={ image } />
                                            </Carousel.Item>
                                        )}
                                        { index === 3 && myWebsite.map((image, inx) =>
                                            <Carousel.Item className="text-center" key={ inx }>
                                                <Image src={ image } />
                                            </Carousel.Item>
                                        )}
                                        { index === 4 && taskManager.map((image, inx) =>
                                            <Carousel.Item className="text-center" key={ inx }>
                                                <Image src={ image } />
                                            </Carousel.Item>
                                        )}
                                        { index === 5 && recipeProject.map((image, inx) =>
                                            <Carousel.Item className="text-center" key={ inx }>
                                                <Image src={ image } />
                                            </Carousel.Item>
                                        )}
                                        { index === 6 && weatherApp.map((image, inx) =>
                                            <Carousel.Item className="text-center" key={ inx }>
                                                <Image src={ image } />
                                            </Carousel.Item>
                                        )}
                                    </Carousel>
                                </div>
                            </section>

                            <section className="link-info" onClick={ () => handleShow(index) }>
                                <div className="m-2 p-2">View full size photos <Image height="20" src={ expand } /></div>
                            </section>

                            {/* Links section */}
                            <section className="d-flex mb-3">
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
                                { project.id === 'jdfix' &&
                                    <div className="d-flex justify-content-center">
                                        <a className="" href={ project.links[3] } target="_blank">
                                            <span className="external-link nav-link">JDFix <Image src={ external } /></span>
                                        </a>
                                    </div>
                                }
                            </section>

                            {/* Body text section */}
                            <section className="project-body">
                                { project.body }
                                { project.id === 'recipe-project' && 
                                    <div className="mt-4">
                                        <button className="btn button-theme" onClick={ () => setShowReadme(!showReadme) }>Click here to view the readme!</button>
                                        { showReadme && <RecipeReadme />}
                                    </div>
                                }
                                { project.list && 
                                    <ul>
                                        { project.list.map((item, index) => <li key={ index }>{ item }</li>) }
                                    </ul>
                                }
                            </section>
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>

            {/* Modal used for pop up images to view a whole selected photo. */}
            <Modal className="d-flex" fullscreen={ fullscreen } onHide={ () => setShow(false) } size="xl" show={ show }>
                <Modal.Header className="bg-dark bg-gradient" closeButton closeVariant="white" />
                <Modal.Body className="bg-dark bg-gradient">
                    <Carousel interval={ null }>
                        { selectedImage === 0 && chatApp.map((image, inx) => 
                            <Carousel.Item className="text-center" key={ inx }>
                                <Image src={ image } />
                            </Carousel.Item>
                        )}
                        { selectedImage === 1 && indecisionApp.map((image, inx) =>
                            <Carousel.Item className="text-center" key={ inx }>
                                <Image src={ image } />
                            </Carousel.Item>
                        )}
                        { selectedImage === 2 && jdMod.map((image, inx) =>
                            <Carousel.Item className="text-center" key={ inx }>
                                <Image src={ image } />
                            </Carousel.Item>
                        )}
                        { selectedImage === 3 && myWebsite.map((image, inx) =>
                            <Carousel.Item className="text-center" key={ inx }>
                                <Image src={ image } />
                            </Carousel.Item>
                        )}
                        { selectedImage === 4 && taskManager.map((image, inx) =>
                            <Carousel.Item className="text-center" key={ inx }>
                                <Image src={ image } />
                            </Carousel.Item>
                        )}
                        { selectedImage === 5 && recipeProject.map((image, inx) =>
                            <Carousel.Item className="text-center" key={ inx }>
                                <Image src={ image } />
                            </Carousel.Item>
                        )}
                        { selectedImage === 6 && weatherApp.map((image, inx) =>
                            <Carousel.Item className="text-center" key={ inx }>
                                <Image src={ image } />
                            </Carousel.Item>
                        )}
                    </Carousel>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export { ProjectAccordion as default }