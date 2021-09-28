import { useState } from 'react';
import Container from 'react-bootstrap/Container';
// import LinkedInBadge from '../components/LinkedInBadge';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        setResponse('Sending...');
       
        fetch('/api/mailer', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ name, email, subject, message })
        })
        .then(res => {
            if (res.ok) {
                console.log(res.status, 'Server response:', res);
                setResponse('Email was successfully sent.');
            } else {
                console.log(res.status, 'Server response:', res);
                setResponse('Email was unsuccessful. Try again. If problem persists, use another method of contact like LinkedIn.')
            }
        })
        .catch(error => console.log('Catch error:', error));
    }

    return (
        <Container className="p-1 contact-container">
            <h1 className="text-center">Contact</h1>

            <form className="d-flex flex-column p-2" onSubmit={ (e) => sendEmail(e) }>
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
                    rows="8"
                    title="Message"
                    value={ message }
                />

                <div className="text-center">
                    <button className="btn button-theme m-4 w-25" type="submit">Submit</button>
                </div>
            </form>
            { response && <p className="text-center h3">{ response }</p> }
        </Container>
    );
}

export { Contact as default }