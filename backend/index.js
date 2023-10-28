const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://Dishant:Dishant@cluster0.du8mxee.mongodb.net/farmerdetails?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Create a Mongoose Schema for FarmerDetails
const farmerDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    match: /^[a-zA-Z\s]+$/,
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  address: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9\s,.'-]{3,}$/,
  },
  phone: {
    type: String,
    required: true,
    match: /^\d{10}$/,
  },
  farmName: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9\s]+$/,
  },
  farmerIDCard: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9]+$/,
  },
});

const FarmerDetails = mongoose.model("FarmerDetails", farmerDetailsSchema);

// Handle POST request to save farmer details
app.post(
  "/Auction",
  [
    check("name")
      .isString()
      .matches(/^[a-zA-Z\s]+$/),
    check("email").isEmail(),
    check("address")
      .isString()
      .matches(/^[a-zA-Z0-9\s,.'-]{3,}$/),
    check("phone")
      .isString()
      .matches(/^\d{10}$/),
    check("farmName")
      .isString()
      .matches(/^[a-zA-Z0-9\s]+$/),
    check("farmerIDCard")
      .isString()
      .matches(/^[a-zA-Z0-9]+$/),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { body } = req;

      const farmerDetails = new FarmerDetails({
        name: body.name,
        email: body.email,
        address: body.address,
        phone: body.phone,
        farmName: body.farmName,
        farmerIDCard: body.farmerIDCard,
      });

      await farmerDetails.save();
      res.status(201).json(farmerDetails); // Sending the saved farmerDetails as the response
    } catch (error) {
      res.status(500).json({ error: "Server Error" }); // Sending an error response
    }
  }
);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
