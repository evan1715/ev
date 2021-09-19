// import nodemailer from 'nodemailer';
// import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';

const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    return (
        <Container className="border border-info p-1 d-flex flex-column justify-content-center">
            Evan's contact page
            
            <form className="d-flex flex-column p-2">
                <label htmlFor="name">Name</label>
                <input
                    className="form-inputs"
                    id="name"
                    maxLength="64"
                    onChange={ (e) => setName(e.target.value) }
                    placeholder="your name"
                    required
                    title="Name"
                    type="text"
                    value={ name }
                />

                <label htmlFor="email">Email address</label>
                <input
                    className="form-inputs"
                    id="email"
                    maxLength="64"
                    onChange={ (e) => setEmail(e.target.value) }
                    placeholder="user@example.com"
                    required
                    title="email address"
                    type="email"
                    value={ email }
                />

                <label htmlFor="subject">Subject</label>
                <input
                    className="form-inputs"
                    id="subject"
                    maxLength="64"
                    onChange={ (e) => setSubject(e.target.value) }
                    placeholder="subject"
                    required
                    title="Subject"
                    type="text"
                    value={ subject }
                />

                <label htmlFor="message">Message</label>
                <textarea
                    className="form-inputs"
                    id="message"
                    // maxLength="64"
                    onChange={ (e) => setMessage(e.target.value) }
                    placeholder="..."
                    required
                    title="Message"
                    value={ message }
                />
            </form>
            
        </Container>
    );
}

export { Contact as default }