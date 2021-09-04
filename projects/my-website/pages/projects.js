import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//Images
import chat_app from '../images/screenshot_chat_app.png';
import indecision_app from '../images/screenshot_indecision_app.png';
//import my_website from '../images_screenshot_my_website';
import task_manager from '../images/screenshot_task_manager_app.jpg';
import recipe_project from '../images/screenshot_recipe_project.png';

const Projects = () => (
    <Container className="border border-secondary d-flex flex-column align-items-center">
        <Row>
            <Col lg={ true }>
                <Card border="warning" className="bg-dark bg-gradient">
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>Card text</Card.Text>
                        <Card.Link href="#">Card link 1</Card.Link>
                        <Card.Link href="#">Card link 2</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <p>Table/menu showing links to the projects on this website with # tag to move down the page.</p>

        <ul>
            <li>JK2</li>
            <li>My Website</li>
            <li>Recipe</li>
        </ul>
    </Container>
);

export { Projects as default }