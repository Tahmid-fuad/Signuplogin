const nodemailer = require('nodemailer');

const setupTransporter = async () => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-app-password'
        }
    });
    return transporter;
};

module.exports = setupTransporter; 