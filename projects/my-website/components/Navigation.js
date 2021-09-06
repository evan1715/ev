import { useRouter } from 'next/router.js';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    const router = useRouter();
    const [isActive, setIsActive] = useState();

    const handleRoute = (e, route) => {
        e.preventDefault();
        router.push(route);
    }

    useEffect(() => {
        setIsActive(router.pathname);
    }, [router.pathname]);

    return (
        <Navbar collapseOnSelect bg="navbar navbar-dark bg-dark bg-gradient" expand="lg" sticky="top" variant="dark">
            <Container>
                {/* <Navbar.Brand aria-current="home" href onClick={ (e) => handleRoute(e, '/') }> */}
                <Navbar.Brand aria-current="home" href="/">
                    <div /><div /><div /><div />
                    Evan
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-sm-evenly w-100" variant="tabs">
                        <Nav.Link active={ isActive === '/coding' && true } eventKey="coding" onClick={ (e) => handleRoute(e, '/coding') }>
                            <div /><div />Coding
                        </Nav.Link>

                        <Nav.Link active={ isActive === '/projects' && true } eventKey="projects" onClick={ (e) => handleRoute(e, '/projects') }>
                            <div /><div />Projects
                        </Nav.Link>

                        <Nav.Link active={ isActive === '/blog' && true } eventKey="blog" onClick={ (e) => handleRoute(e, '/blog') }>
                            <div /><div />Blog
                        </Nav.Link>

                        <Nav.Link active={ isActive === '/contact' && true } eventKey="contact" onClick={ (e) => handleRoute(e, '/contact') }>
                            <div /><div />Contact
                        </Nav.Link>

                        <Nav.Link active={ isActive === '/about' && true } eventKey="about" onClick={ (e) => handleRoute(e, '/about') }>
                            <div /><div />About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export { Navigation as default }