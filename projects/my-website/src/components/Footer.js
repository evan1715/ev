import Image from 'next/image'; //NextJS
import Container from 'react-bootstrap/Container'; //react-bootstrap
import external from '../images/icons/external.svg'; //Images - icons

const Footer = () => {
    return (
        <footer className="navbar navbar-dark bg-dark bg-gradient fixed-bottom py-1">
            <Container>
                <div>
                    <span className="footer-brand">Evan McHugh</span>
                </div>

                <div className="d-flex flex-row">
                    <a href="https://github.com/evan1715" rel="noreferrer" target="_blank">
                        <span className="external-link nav-link">
                            GitHub <Image alt="external link" src={ external } />
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/evan-mchugh-8013a6142/" rel="noreferrer" target="_blank">
                        <span className="external-link nav-link">
                            LinkedIn <Image alt="external-link" src={ external } />
                        </span>
                    </a>
                </div>
            </Container>
        </footer>
    );
}

export { Footer as default }