//Nextjs & React
import { useState } from 'react';
import Image from 'next/image';
//react-bootstrap
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
//Data
import cardsInfo from '../data/cards-info.json';
//Images
import chat_app from '../images/screenshot_chat_app.png';
import indecision_app from '../images/screenshot_indecision_app.png';
import jd_mod from '../images/jk2_glow.gif';
import my_website from '../images/nextjs.svg';
import task_manager from '../images/screenshot_task_manager_app.jpg';
import recipe_project from '../images/screenshot_recipe_project.png';
import weather_app from '../images/screenshot_weather_app.png';

const ProjectCards = () => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const projects = [chat_app, indecision_app, jd_mod, my_website, task_manager, recipe_project, weather_app];

    const handleShow = (selected) => {
        setSelectedImage(selected);
        setFullscreen('');
        setShow(true);
    }

    return (
        <Container className="d-flex flex-column align-items-center">
            <Row className="align-items-center justify-content-around">
                { projects.map((project, index) => 
                    <Card border="success" className="bg-light-gray bg-gradient m-2" key={ index } style={{ width: '18rem' }}>
                        <Card.Img as={ Image } className="mt-2 zoom-zoom" layout="responsive" onClick={ () => handleShow(project) } src={ project } variant="top" />
                        <Card.Body className="d-flex flex-column align-items-center">
                            <Card.Title>{ cardsInfo[index].title }</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{ cardsInfo[index].subtitle }</Card.Subtitle>
                            <Card.Text>{ cardsInfo[index].text }</Card.Text>
                            <div className="flex-column">
                                <Card.Link href={ cardsInfo[index].links[0] }>Learn more</Card.Link>
                                { cardsInfo[index].links[1] && 
                                    <Card.Link href="#">Card link 2</Card.Link>
                                }
                            </div>
                        </Card.Body>
                    </Card>
                )}
            </Row>

            <Modal className="d-flex" fullscreen={ fullscreen } onHide={ () => setShow(false) } size="lg" show={ show }>
                <Modal.Header className="bg-dark bg-gradient" closeButton closeVariant="white" />
                <Modal.Body className="bg-dark bg-gradient"><Image src={ selectedImage } /></Modal.Body>
            </Modal>
        </Container>
    );
}

export { ProjectCards as default }