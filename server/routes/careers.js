const express = require('express');
const router = express.Router();
const Career = require('../models/Career');
const nodemailer = require('nodemailer');

// POST /api/careers
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, position, message } = req.body;

    // ✅ Validation
    if (!name || !email || !position) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and position are required.'
      });
    }

    // ✅ Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // ✅ Save to DB
    const application = await Career.create({
      name,
      email,
      phone,
      position,
      message
    });

    // ✅ SEND RESPONSE FIRST (⚡ fast UI)
    res.status(201).json({
      success: true,
      message: 'Application submitted successfully!',
      data: application
    });

    // 🔥 BACKGROUND WORK STARTS HERE (no delay to user)

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // 📧 Email to company
    const clientMail = {
      from: process.env.EMAIL_USER,
      to: process.env.CLIENT_EMAIL,
      subject: `New Job Application: ${position}`,
      text: `
New career application received:

Name: ${name}
Email: ${email}
Phone: ${phone}
Position: ${position}
Message: ${message}
      `
    };

    // 📧 Confirmation to user
    const userMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Application Received",
      text: `
Hello ${name},

Thank you for applying for the position of "${position}".

Our HR team will review your application and get back to you soon.

Regards,
Ezee Groups
      `
    };

    // Send emails (async, after response)
    await transporter.sendMail(clientMail);
    await transporter.sendMail(userMail);

  } catch (err) {
    console.error(err);

    // Only send error if response not already sent
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.'
      });
    }
  }
});

module.exports = router;

module.exports = router;