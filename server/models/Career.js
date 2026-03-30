const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true 
  },

  email: { 
    type: String, 
    required: true, 
    lowercase: true, 
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please use a valid email"]
  },

  phone: { 
    type: String, 
    trim: true 
  },

  position: { 
    type: String, 
    required: true,
    trim: true
  },

  message: { 
    type: String,
    trim: true
  }

}, { 
  timestamps: true   // ✅ replaces createdAt manually
});

module.exports = mongoose.model('Career', careerSchema);