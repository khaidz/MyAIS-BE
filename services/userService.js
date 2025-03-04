const User = require('../models/user'); // Assuming you have a User model

const getCurrentUser = async (userId) => {
    const user = await User.findByPk(userId);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

module.exports = {
    getCurrentUser
};
