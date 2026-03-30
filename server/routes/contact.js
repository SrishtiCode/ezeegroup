const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // ✅ Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.'
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
    const contact = await Contact.create({
      name,
      email,
      subject,
      message
    });

    // ✅ SEND RESPONSE FIRST (⚡ fast UI)
    res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      data: contact
    });

    // 🔥 Background email sending (no delay for user)

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // 📧 Mail to company
    const clientMail = {
      from: process.env.EMAIL_USER,
      to: process.env.CLIENT_EMAIL,
      subject: `New Contact Message: ${subject}`,
      text: `
New message received:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `
    };

    // 📧 Confirmation mail to user
    const userMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message",
      text: `
Hello ${name},

Thank you for contacting us.

We have received your message regarding "${subject}".
Our team will respond to you shortly.

Regards,
Ezee Groups
      `
    };

    // Send emails after response
    await transporter.sendMail(clientMail);
    await transporter.sendMail(userMail);

  } catch (err) {
    console.error(err);

    // Avoid double response error
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.'
      });
    }
  }
});


// GET /api/contact (admin - protected)
router.get('/', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader !== "Bearer admin123") {
      return res.status(403).json({
        success: false,
        message: "Unauthorized access"
      });
    }

    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: contacts
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error.'
    });
  }
});

module.exports = router;