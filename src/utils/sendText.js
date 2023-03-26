const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'bootcamptestdev@gmail.com',
    pass: 'bootcamptest!@3'
  }
});

export default transporter;

