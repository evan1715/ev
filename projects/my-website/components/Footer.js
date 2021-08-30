import Image from 'next/image';
import Link from 'next/link';
import external from '../images/external.svg';

const Footer = () => {
    return (
        <footer className="bg-dark bg-gradient fixed-bottom py-1">
            <div className="container d-flex justify-content-center">
                {/* fs-4 is for the font size */}
                <span className="fs-4">Evan McHugh</span>
            </div>
            <div className="container d-flex flex-row justify-content-center">
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
            </div>
        </footer>
    );
}

export { Footer as default }