import styles from '../styles/coding.module.scss';

const Coding = () => {

    return (
        <main className={ styles.main }>
            <h1>Evan's coding page</h1>
            
            {/* Repository section */}
            <section className={ styles.section }>
                <h2 className={ styles.section_header }>Repository</h2>
                <div className="">

                </div>
            </section>

            {/* Technologies section */}
            <section className={ styles.section }>
                <h2 className={ styles.section_header }>Technologies</h2>
                <div>

                </div>
            </section>

        </main>
    )
}

export { Coding as default }