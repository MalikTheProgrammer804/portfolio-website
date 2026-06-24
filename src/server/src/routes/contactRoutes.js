require("dotenv").config();
const router = require("express").Router();
const nodemailer = require("nodemailer");
try {
  const { name, email, subject, message } = req.body;

  // Email to you
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact: ${subject}`,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  });

  // Auto reply to visitor
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank you for contacting me",
    html: `
      <h2>Thank You, ${name}!</h2>
      <p>I have received your message and will get back to you as soon as possible.</p>
      <p>Best Regards,<br>Malik Mubashir Sohail</p>
    `
  });

  res.json({
    success: true,
    message: "Message sent successfully"
  });

} catch (error) {
  console.error(error);
  res.status(500).json({
    success: false,
    message: "Email failed"
  });
}