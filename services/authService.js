const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwtService = require("./jwtService");

const register = async (username, email, password) => {
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  return newUser;
};

const login = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (!user) {
    throw new Error("Invalid username or password");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid username or password");
  }

  const token = jwtService.generateToken(user.id);
  const refreshToken = jwtService.generateRefreshToken(user.id);

  return { token, refreshToken };
};

const refreshToken = (refreshToken) => {
  if (!refreshToken) {
    throw new Error("Refresh token is required");
  }

  const decoded = jwtService.verifyRefreshToken(refreshToken);
  const newToken = jwtService.generateToken(decoded.userId);

  return newToken;
};

module.exports = {
  register,
  login,
  refreshToken,
};
