const express = require('express');
const router = express.Router();
const authService = require('../services/authService');

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = await authService.register(username, email, password);
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const { token, refreshToken } = await authService.login(username, password);
    res.status(200).json({ message: 'Login successful', token, refreshToken });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/refreshToken', (req, res) => {
  const { refreshToken } = req.body;

  try {
    const newToken = authService.refreshToken(refreshToken);
    res.status(200).json({ token: newToken });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

module.exports = router;