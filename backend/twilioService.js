// twilioService.js
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from Twilio Console
const authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from Twilio Console

const client = new twilio(accountSid, authToken);

const sendOtp = (phoneNumber, otp) => {
  return client.messages.create({
    body: `Your OTP is ${otp}`,  // The message content
    from: '+1 762 667 2510', // Your Twilio Phone Number
    to: phoneNumber                // Recipient's Phone Number
  });
};

module.exports = sendOtp;



