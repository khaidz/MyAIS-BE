const express = require("express");
const router = express.Router();
const jwtService = require("../services/jwtService");
const userService = require("../services/userService");
const { JWT_SECRET } = require("../config/jwtConfig");
const authMiddleware = require("../middlewares/authMiddleware"); // Assuming you have an auth middleware

router.get("/currentUser", authMiddleware, async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwtService.verifyToken(token);
    const userId = decoded.userId;
    const user = await userService.getCurrentUser(userId);
    const { password, ...userWithoutPassword } = user.dataValues;
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
