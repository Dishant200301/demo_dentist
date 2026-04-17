const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/web-auth',        require('./routes/webAuthRoutes'));
app.use('/api/public',         require('./routes/publicBookingRoutes'));
app.use('/api/blogs',           require('./routes/blogRoutes'));
app.use('/api/contact-inquiries', require('./routes/contactRoutes'));

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' 
  });
});

app.get('/', (req, res) => {
  res.send('Eye Care Website API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
