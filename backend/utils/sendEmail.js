const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: 'ritikpuranik28@gmail.com', 
      pass: 'cwth lyoc cvre ubkb', 
    },
  });

  const mailOptions = {
    from: 'ritikpuranik28@gmail.com',
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
