import Link from 'next/link.js';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import styles from '../styles/nav.module.scss';

const Nav = () => {
    return (
        //With <nav>, we do not need <ul> <li></li> </ul> to list since <nav> is defined
        <div className="container-fluid">
            <nav className="navbar bg-secondary bg-gradient">
                {/* <Container fluid> */}
                <Link className="nav-link active" aria-current="page" href="/">Evan</Link>

                <Link className="nav-link" href="/coding">Coding</Link>

                <Link className="nav-link" href="/about">About</Link>

                <Link className="nav-link" href="/contact">Contact</Link>
                {/* </Container> */}
            </nav>
        </div>
    );
}

export { Nav as default }

            // <ul className={ styles.list }>
            //     <li className={ styles.li }>
            //         <Link className={ styles.link } href="/">Evan</Link>
            //     </li>
            //     <li className={ styles.li }>
            //         <Link className={ styles.link } href="/coding">Coding</Link>
            //     </li>
            //     <li className={ styles.li }>
            //         <Link className={ styles.link } href="/about">About</Link>
            //     </li>
            //     <li className={ styles.li }>
            //         <Link className={ styles.link } href="/contact">Contact</Link>
            //     </li>
            // </ul>