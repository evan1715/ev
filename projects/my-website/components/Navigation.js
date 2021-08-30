import Link from 'next/link.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
    //With <nav>, we do not need <ul> <li></li> </ul> to list since <nav> is defined
    //expand="sm" md lg xl xxl will configure when it will be collapsed or expanded on window size
    //Link doesn't accept a class/className prop. So, I'll use <a> tags to pass styles.
    return (
        <header className="fixed-top">
            <Navbar bg="navbar navbar-dark bg-dark bg-gradient" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/" aria-current="page">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        Evan
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <div className="me-auto" />

                        <NavDropdown.Divider />
                        <Nav variant="tabs" className="me-auto d-flex">
                            <Link href="/coding"><a className="nav-link">Coding</a></Link>
                            <Link href="/projects"><a className="nav-link">Projects</a></Link>
                            <Link href="/blog"><a className="nav-link">Blog</a></Link>
                        </Nav>

                        <NavDropdown.Divider />
                        <Nav variant="tabs">
                            <Link href="/contact"><a className="nav-link">Contact</a></Link>
                            <Link href="/about"><a className="nav-link">About</a></Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export { Navigation as default }