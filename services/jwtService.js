const jwt = require("jsonwebtoken");
const { JWT_SECRET, REFRESH_JWT_SECRET, tokenLife, refreshTokenLife } = require("../config/jwtConfig");

const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: tokenLife });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, REFRESH_JWT_SECRET, { expiresIn: refreshTokenLife });
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

const verifyRefreshToken = (refreshToken) => {
  return jwt.verify(refreshToken, REFRESH_JWT_SECRET);
};

module.exports = {
  generateToken,
  generateRefreshToken,
  verifyToken,
  verifyRefreshToken,
};
