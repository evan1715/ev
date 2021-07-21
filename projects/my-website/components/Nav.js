import Link from 'next/link.js';
import styles from '../styles/nav.module.scss';

const Nav = () => {
    return (
        <nav className={ styles.nav }>
            <ul className={ styles.list }>
                <li className={ styles.li }>
                    <Link className={ styles.link } href="/">Evan</Link>
                </li>
                <li className={ styles.li }>
                    <Link className={ styles.link } href="/">Coding</Link>
                </li>
                <li className={ styles.li }>
                    <Link className={ styles.link } href="/">About</Link>
                </li>
                <li className={ styles.li }>
                    <Link className={ styles.link } href="/">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export { Nav as default }