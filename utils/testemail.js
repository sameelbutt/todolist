require('dotenv').config();
const nodemailer = require('nodemailer');

// Create a transporter using your environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  debug: true, // Enable debugging for troubleshooting
  logger: true, // Enable logging
});

// Define email options
const mailOptions = {
  from: process.env.EMAIL_USERNAME,
  to: 'buttsameel977@gmail.com', // Replace with recipient email
  subject: 'Test Email',
  text: 'This is a test email sent from Nodemailer',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Failed to send email:', error);
  }
  console.log('Email sent:', info.response);
});
