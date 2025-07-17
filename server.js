// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const mongoose =require("mongoose");
const Product = require('./models/Product');
require('dotenv').config();


// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;



// Middleware setup
app.use(bodyParser.json());
app.use(express.json());




//Routes
const productRoutes = require('./routes/productRoutes'); // adjust the path if needed
app.use(productRoutes);


// Root route
router.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});




mongoose
.connect(process.env.Mongo_Uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(() => {
  console.log(`Mongodb connected`)
})
.catch((err) => {
  console.error(`Mongodb error is`, err)
});




// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// TODO: Implement custom middleware for:
// - Request logging
// - Authentication
// - Error handling



// Export the app for testing purposes
module.exports = app; 