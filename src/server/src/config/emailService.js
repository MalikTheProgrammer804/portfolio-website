const transporter = require("../config/mailer");

async function sendTestEmail() {
  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Test Email",
    text: "Hello! Working fine 🚀",
  });
}

module.exports = { sendTestEmail };