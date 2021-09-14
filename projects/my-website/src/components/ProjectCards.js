//React
import { useState } from 'react';
//NextJS
import Image from 'next/image';
import { useRouter } from 'next/router';
//react-bootstrap
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
//Data
import cardsInfo from '../data/projects-info.json';
//Images - icons
import external from '../images/icons/external.svg';
//Images - projects
import chat_app from '../images/projects/chat_app2.png';
import indecision_app from '../images/projects/indecision_app1.png';
import jd_mod from '../images/projects/jk2_glow.gif';
import my_website from '../images/logos/nextjs.svg';
import task_manager from '../images/projects/task_manager_app.jpg';
import recipe_project from '../images/projects/recipe_project.png';
import weather_app from '../images/projects/weather_app2.png';

const ProjectCards = () => {
    const router = useRouter();
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const projects = [chat_app, indecision_app, jd_mod, my_website, task_manager, recipe_project, weather_app];

    const handleShow = (selected) => {
        setSelectedImage(selected);
        setFullscreen('');
        setShow(true);
    }

    const handleRoute = (e, route) => {
        e.preventDefault();
        router.push(route);
    }

    return (
        <Container className="d-flex flex-column align-items-center p-4">
            <h2>Software Summary</h2>
            <Row className="align-items-center justify-content-around">
                { cardsInfo.map((project, index) => 
                    <Card border="success" className="bg-light-gray bg-gradient m-2" key={ index } style={{ width: '18rem' }}>
                        <Card.Img as={ Image } className="mt-2 zoom-zoom" layout="responsive" onClick={ () => handleShow(projects[index]) } src={ projects[index] } variant="top" />
                        <Card.Body className="d-flex flex-column align-items-center">
                            <Card.Title>{ project.cardTitle }</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{ project.subtitle }</Card.Subtitle>
                            <Card.Text>{ project.text }</Card.Text>
                            <div className="flex-column">
                                { project.links[1] && 
                                    <Card.Link className="external-link" href={ project.links[1] } target="_blank">Repository <Image src={ external } /></Card.Link>
                                }
                                { project.links[2] && 
                                    <Card.Link className="external-link" href={ project.links[2] } target="_blank">Deployment <Image src={ external } /></Card.Link>
                                }
                            </div>
                            <Card.Link className="link-info" onClick={ (e) => handleRoute(e, project.links[0]) }>Learn more</Card.Link>
                        </Card.Body>
                    </Card>
                )}
            </Row>

            {/* Modal used for pop up images to view a whole selected photo. */}
            <Modal className="d-flex" fullscreen={ fullscreen } onHide={ () => setShow(false) } size="lg" show={ show }>
                <Modal.Header className="bg-dark bg-gradient" closeButton closeVariant="white" />
                <Modal.Body className="bg-dark bg-gradient"><Image src={ selectedImage } /></Modal.Body>
            </Modal>
        </Container>
    );
}

export { ProjectCards as default }