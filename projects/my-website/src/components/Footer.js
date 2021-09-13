import Image from 'next/image'; //NextJS
import Container from 'react-bootstrap/Container'; //react-bootstrap
import external from '../images/icons/external.svg'; //Images - icons

const Footer = () => {
    return (
        <footer className="navbar navbar-dark bg-dark bg-gradient fixed-bottom py-1">
            <Container>
                <div className="d-flex justify-content-center">
                    {/* fs-4 is for the font size */}
                    <span className="fs-4">Evan McHugh</span>
                </div>

                <div className="d-flex flex-row justify-content-center">
                    <a href="https://github.com/evan1715" target="_blank">
                        <span className="external-link nav-link">
                            GitHub <Image src={ external } />
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/evan-mchugh-8013a6142/" target="_blank">
                        <span className="external-link nav-link">
                            LinkedIn <Image src={ external } />
                        </span>
                    </a>
                </div>
            </Container>
        </footer>
    );
}

export { Footer as default }