/**
 * Next.js API route for sending contact form emails via Nodemailer.
 * @module pages/api/mailer
 */
import nodemailer from 'nodemailer';

/**
 * Handles POST requests to send an email via Outlook SMTP.
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 * @returns {Promise<void>}
 */
export default async function handler(req, res) {
    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        //secure – if true the connection will use TLS when connecting to server. If false (the default) then TLS is used if server supports the STARTTLS extension. In most cases set this value to true if you are connecting to port 465. For port 587 or 25 keep it false
        // secure: false — TLS is used via STARTTLS when server supports it (port 587)
        secure: false,
        //requireTLS – if this is true and secure is false then Nodemailer tries to use STARTTLS even if the server does not advertise support for it. If the connection can not be encrypted then message is not sent
        // requireTLS: true — force STARTTLS even if not advertised by server
        requireTLS: true,
        auth: {
            user: process.env.MAIL1,
            pass: process.env.MAIL2,
        },
    });

    const data = {
        from: process.env.MAIL1,
        to: process.env.MAIL3,
        bcc: '',
        subject: `${req.body.subject}`,
        text: `Name: ${req.body.name} \nEmail: ${req.body.email} \nMessage: ${req.body.message} \n`,
    };

    try {
        await transporter.sendMail(data);
        res.status(200).end();
    } catch (error) {
        res.status(400).end();
        console.log(error);
    }
}
