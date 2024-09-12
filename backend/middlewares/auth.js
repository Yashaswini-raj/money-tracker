const express = require('express');
const { loginController, registerController } = require('../controllers/userConto');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Public routes
router.post('/login', loginController);
router.post('/register', registerController);

// Protected route
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await userModel.findById(req.user);
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

module.exports = router;
