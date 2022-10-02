import React from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import styles from '../styles/modules/indecision.module.scss';

export default class IndecisionApp extends React.Component {
    state = {
        error: undefined,
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>  optionToRemove !== option)
        }));
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }));
    }

    handleAddOption = (event) => {
        //preventDefault() will prevent the page from refreshing when we submit.
        event.preventDefault();

        const option = event.target.elements.option.value.trim();

        if (!option) {
            return this.setState(() => ({ error: "Enter valid value to add item." }));
        } else if (this.state.options.indexOf(option) > -1) {
            return this.setState(() => ({ error: "This option already exists." }));
        }

        event.target.elements.option.value = ''; //this will empty the input once submitted.
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
        this.setState(() => ({ error: '' }));
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options: options }));
            }
        } catch (error) {
            //Do nothing at all.
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount!');
    }

    render() {
        const subtitle = 'Randomize what you should do next.'

        return (
            <Container className={styles['indecision-master']}>
                {/* <Header subtitle={ subtitle } /> */}
                <div className={styles["indecision-header"]}>
                    <div className={styles["indecision-container"]}>
                        <h1 className={styles["header__title"]}>Indecision</h1>
                        { subtitle && <h2 className={styles["header__subtitle"]}>{ subtitle }</h2> }
                    </div>
                </div>


                <div className={styles["indecision-container"]}>
                    {/* <Action > */}
                    <button className={styles["big-button"]} onClick={ this.handlePick } disabled={ !(this.state.options.length > 0 ) }>
                        What should I do?
                    </button>

                    <div className={styles["widget"]}>
                        {/* <Options /> */}
                        <div className={styles["widget-header"]}>
                            <h3 className={styles["widget-header__title"]}>Your Options</h3>
                            <button className={styles["button--link"]} onClick={ this.handleDeleteOptions }>Remove All</button>
                        </div>

                        { this.state.options.length === 0 && <p className={styles["widget__message"]}>Add an option to get started.</p> }
                        { this.state.options.map((option, index) => 
                            // <Option />
                            <div className={styles["option"]} key={option}>
                                <p className={styles["option__text"]}>{ index + 1 }. { option }</p>
                                <button className={styles["button--link"]} onClick={ (e) => { this.handleDeleteOption(option); }}>
                                    remove
                                </button>
                            </div>
                        )}
                
                        {/* <AddOption /> */}
                        { this.state.error && <p className={styles["add-option-error"]}>{ this.state.error }</p> }
                        <form className={styles["add-option"]} onSubmit={ this.handleAddOption }>
                            <input className={styles["add-option__input"]} type="text" name="option"/>
                            <button className={styles["indecision-button"]}>Add Option</button>
                        </form>
                    </div>
                </div>

                {/* <OptionModal /> */}
                <Modal 
                    centered
                    contentClassName={styles["indecision-modal"]}
                    onHide={ this.handleClearSelectedOption }
                    show={ !!this.state.selectedOption }
                    size="sm"
                >
                    <h3 className={styles["modal__title"]}>Selected Options</h3>
                    { this.state.selectedOption && <p className={styles["modal__body"]}>{ this.state.selectedOption }</p> }
                    <button className={styles["indecision-button"]} onClick={ this.handleClearSelectedOption }>Okay</button>
                </Modal>
            </Container>
        );
    }
}
