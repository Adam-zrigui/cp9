import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'fake@gmail.com',
        pass: 'notpassword'
    }
})
var mailOptions = {
    from: 'fake@gmail.com',
    to: 'fakefriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
transporter.sendMail(mailOptions, (err , info) => {
    if (err) {
        return console.log(err);
    } else {
        console.log('Email  sent successfully ' + info.response)
    }
})