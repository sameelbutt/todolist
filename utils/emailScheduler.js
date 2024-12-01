require('dotenv').config();

const { sendReminderEmail } = require('./email');

console.log('Email user:', process.env.EMAIL_USER);
console.log('Email password:', process.env.EMAIL_PASSWORD);

// Create a mock task object
const mockTask = {
  title: 'Test Task',
  dueDate: new Date(), // Use a current date for testing
};

(async () => {
  try {
    await sendReminderEmail(mockTask);
    console.log('Test email sent successfully');
  } catch (error) {
    console.error('Failed to send test email:', error);
  }
})();
