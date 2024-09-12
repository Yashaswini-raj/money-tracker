const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userConto");

//router object
const router = express.Router();

//routers
// POST || LOGIN USER
router.post("/login", loginController);

//POST || REGISTER USER
router.post("/register", registerController);
// Protected route
// router.get('/profile', authMiddleware, async (req, res) => {
//   try {
//     const user = await userModel.findById(req.user);
//     res.json({ success: true, user });
//   } catch (error) {
//     res.status(500).json({ success: false, error });
//   }
// });

module.exports = router;