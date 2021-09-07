// import Image from 'next/image';
// import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import pjInfo from '../data/projects-info.json';

const ProjectAccordion = () => {
    return (
        <Container className="p-0">
            <h2 className="p-2">Projects</h2>
            <Accordion defaultActiveKey="0" flush>
                { pjInfo.map((project, index) => 
                    <Accordion.Item className="bg-light-gray" eventKey={ index } key={ index }>
                        <Accordion.Header className="bg-light-gray">
                            { project.title } <div className="ps-2 text-muted">- { project.subtitle }</div>
                            </Accordion.Header>
                        <Accordion.Body>{ project.text }</Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
        </Container>
    );
}

export { ProjectAccordion as default }