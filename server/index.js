const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ CORS CONFIG (safe for production)
app.use(cors({
  origin: [
    'http://localhost:5173',
    process.env.CLIENT_URL
  ].filter(Boolean), // removes undefined
  credentials: true
}));

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
const contactRoute = require('./routes/contact');
const careersRoute = require('./routes/careers');

app.use('/api/contact', contactRoute);
app.use('/api/careers', careersRoute);

// ✅ Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'Ezee Groups API Running ✅',
    timestamp: new Date()
  });
});

// ✅ MongoDB connection (IMPROVED)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'ezeeDB' // optional but recommended
    });
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('❌ MongoDB Error:', err.message);
    process.exit(1);
  }
};

// ✅ Start server ONLY after DB connects
const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();