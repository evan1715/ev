// import Image from 'next/image';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import pjInfo from '../data/projects-info.json';

const ProjectAccordion = () => {
    const router = useRouter();
    const [selectedProject, setSelectedProject] = useState(5);

    useEffect(() => {
        const id = router.asPath.split('#')[1];
        pjInfo.map((pj, index) => {
            if (pj.id == id) {
                setSelectedProject(index);
            }
        })
    }, [router.asPath]);

    return (
        <Container className="p-0">
            <h2 className="p-2">Projects</h2>
            <Accordion activeKey={ `${selectedProject}` } flush>
                { pjInfo.map((project, index) => 
                    <Accordion.Item className="bg-light-gray" eventKey={ `${index}` } id={ project.id } key={ index } onClick={ () => console.log(index)} >
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