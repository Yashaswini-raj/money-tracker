const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');

// Secret key to sign the JWT token
const JWT_SECRET = 'your_jwt_secret'; // Make sure to use an environment variable in production

// Login Callback
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      success: true,
      token,
      user: { name: user.name, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

// Register Callback
const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({ success: true, newUser });
  } catch (error) {
    res.status(400).json({ success: false, error });
    console.log(error);
  }
};

module.exports = { loginController, registerController };
