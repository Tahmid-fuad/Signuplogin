const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const axios = require('axios');

// OAuth 2.0 credentials
const CLIENT_ID = '258684989971-bccvu9qhqpms87pau3v293v1kq1jh3f1.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:3000/auth/google/callback';

// Google API scopes for sending emails
const SCOPES = ['https://mail.google.com/'];

// Initialize OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Obtain OAuth2 tokens (access token and refresh token)
async function getOAuth2Tokens() {
  try {
    const { data } = await axios.post(`https://oauth2.googleapis.com/token`, {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'refresh_token',
      refresh_token: '1//04UVx3qaHIa6zCgYIARAAGAQSNwF-L9IrbXlfFtedkVNggk6Yeds4Ow3I3cBbPYmqMrembVTkNiJnXmvxa2ZI7_SSLxyE7nkhAHQ' // Replace with your actual refresh token
    });

    const accessToken = data.access_token;
    return accessToken;
  } catch (error) {
    console.error('Error fetching access token:', error.response.data.error);
    throw error;
  }
}

// Configure Nodemailer transport
async function setupTransporter() {
  try {
    const accessToken = await getOAuth2Tokens();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'cuetps.tf@gmail.com', 
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: '1//04UVx3qaHIa6zCgYIARAAGAQSNwF-L9IrbXlfFtedkVNggk6Yeds4Ow3I3cBbPYmqMrembVTkNiJnXmvxa2ZI7_SSLxyE7nkhAHQ', // Replace with your actual refresh token
        accessToken: accessToken
      },
    });

    return transporter;
  } catch (error) {
    console.error('Error setting up transporter:', error);
    throw error;
  }
}

module.exports = setupTransporter;
