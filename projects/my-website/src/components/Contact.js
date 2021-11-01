import Container from 'react-bootstrap/Container';
import EmailMe from './EmailMe.js';
import LinkedInBadge from './LinkedInBadge.js';

const Contact = () => (
    <Container className="contact-background" id="contact">
        <Container className="contact-container">
            <h3 className="text-center">Want to chat?</h3>
            <div className="d-flex flex-row flex-wrap w-100">
                <Container className="form-container p-1 rounded">
                    <EmailMe />
                </Container>
                <div className="d-flex flex-grow-1 mt-3 pt-3 align-items-start justify-content-center">
                    <LinkedInBadge />
                </div>
            </div>
        </Container>
    </Container>
);

export { Contact as default }