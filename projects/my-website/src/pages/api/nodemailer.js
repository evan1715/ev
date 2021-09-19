import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    //secure – if true the connection will use TLS when connecting to server. If false (the default) then TLS is used if server supports the STARTTLS extension. In most cases set this value to true if you are connecting to port 465. For port 587 or 25 keep it false
    secure: false,
    //requireTLS – if this is true and secure is false then Nodemailer tries to use STARTTLS even if the server does not advertise support for it. If the connection can not be encrypted then message is not sent
    requireTLS: true
});

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take messages.");
    }
});