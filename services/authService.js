const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwtService = require("./jwtService");
const { Op } = require("sequelize");
const { ROLES } = require("../constants/role");

const register = async (username, email, password) => {
  const existingUser = await User.findOne({ 
    where: { 
      [Op.or]: [
        { username },
        { email }
      ]
    }
  });
  if (existingUser) {
    if (existingUser.username === username) {
      throw new Error("Username already exists");
    }
    if (existingUser.email === email) {
      throw new Error("Email already exists"); 
    }
  }

  if (!password || password.length < 6) {
    throw new Error("Password must be at least 6 characters long");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
    role: ROLES.USER,
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
