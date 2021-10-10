import Container from 'react-bootstrap/Container';
import EmailMe from '../components/EmailMe.js';

const Contact = () => (
    <Container className="contact-background">
        <Container className="p-1 contact-container rounded">
            <h1 className="text-center">Contact</h1>
            <EmailMe />
        </Container>
    </Container>
);

export { Contact as default }