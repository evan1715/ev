//React
import { useEffect, useState } from 'react';
//NextJS
import { useRouter } from 'next/router.js';
//react-bootstrap
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
        //This is here so that whenever a user is on a page, the active navbar will still display.
        setIsActive(router.asPath);
    }, [router.asPath]);

    return (
        <Navbar bg="navbar navbar-dark bg-dark bg-gradient" collapseOnSelect expand="lg" sticky="top" variant="dark">
            <Container>
                {/* <Navbar.Brand aria-current="home" href onClick={ (e) => handleRoute(e, '/') }> */}
                <Navbar.Brand aria-current="home" className={ isActive === '/' && 'navbar-brand-active' } href="/">
                    <div /><div /><div /><div />
                    Evan
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* <Nav className="justify-content-around w-100" variant="tabs"> */}
                    <Nav className=" justify-content-between w-100" variant="tabs">
                        <div></div>
                        <Nav.Link active={ isActive === '/coding' && true } eventKey="coding" onClick={ (e) => handleRoute(e, '/coding') }>
                            <div /><div />Coding
                        </Nav.Link>

                        <Nav.Link active={ isActive === '/#contact' && true } eventKey="#contact" onClick={ (e) => handleRoute(e, '/#contact') }>
                            <div /><div />Contact
                        </Nav.Link>

                        {/* <Nav.Link active={ isActive === '/about' && true } eventKey="about" onClick={ (e) => handleRoute(e, '/about') }>
                            <div /><div />About
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export { Navigation as default }