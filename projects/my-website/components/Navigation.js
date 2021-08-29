import Image from 'next/image.js';
import Link from 'next/link.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import external from '../images/external.svg';

const Navigation = () => {
    return (
        //With <nav>, we do not need <ul> <li></li> </ul> to list since <nav> is defined
        //expand="sm" md lg xl xxl will configure when it will be collapsed or expanded on window size
        <Navbar collapseOnSelect bg="navbar navbar-dark bg-secondary bg-gradient" expand="lg">
            <Container>
                <Navbar.Brand href="/" aria-current="page">Evan</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* Link doesn't accept a class/className prop. So, I'll use <a> tags to pass styles. */}
                    <Nav className="me-auto">
                        <NavDropdown.Divider />
                        <Link href="/coding"><a className="nav-link">Coding</a></Link>
                        <Link href="/projects"><a className="nav-link">Projects</a></Link>
                        <Link href="/blog"><a className="nav-link">Blog</a></Link>
                    </Nav>

                    <Nav className="me-auto">
                        <NavDropdown.Divider />
                            <Link href="https://github.com/evan1715">
                                <a className="nav-link">
                                    GitHub <Image src={ external } />
                                </a>
                            </Link>
                            <Link href="https://www.linkedin.com/in/evan-mchugh-8013a6142/">
                                <a className="nav-link">
                                    LinkedIn <Image src={ external } />
                                </a>
                            </Link>
                    </Nav>

                    <Nav>
                        <NavDropdown.Divider />
                        <Link href="/contact"><a className="nav-link">Contact</a></Link>
                        <Link href="/about"><a className="nav-link">About</a></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export { Navigation as default }