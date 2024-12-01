require('dotenv').config({ path: './../config.env' });
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: true,
  port: 465,
});

const mailOptions = {
  from: process.env.EMAIL_USERNAME,
  to: 'buttsameel977@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Nodemailer',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Failed to send email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
