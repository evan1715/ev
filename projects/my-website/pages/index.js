//This is the homepage.
//Can't import global CSS file. That's done in _app.js
//CSS files have to have the file name *.module.css
import styles from '../styles/evan.module.scss';

const Home = () => {

    return (
        <main className={ styles.main }>
            Evan's home page
        </main>
    )
}

export { Home as default }