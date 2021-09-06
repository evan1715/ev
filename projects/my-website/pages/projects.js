import Container from 'react-bootstrap/Container';

const Projects = () => {
    return (
        <Container className="border border-secondary d-flex flex-column align-items-center">
            <p>Table/menu showing links to the projects on this website with # tag to move down the page.
                Use accordion-style to display the projects?
            </p>

            <ul>
                <li>JK2</li>
                <li>My Website</li>
                <li>Recipe</li>
            </ul>
        </Container>
    );
}

export { Projects as default }