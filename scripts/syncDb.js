const sequelize = require('../config/database');
const AisData = require('../models/aisData');
const AisLog = require('../models/aisLog');
const AisParts = require('../models/aisParts');
const AisVessel = require('../models/aisVessel');
const AisVesselCache = require('../models/aisVesselCache');
const AisVesselEx = require('../models/aisVesselEx');
const AisVesselLog = require('../models/aisVesselLog');
const User = require('../models/user');

async function syncDatabase() {
  try {
    // Sync all models with the database
    await sequelize.sync({ alter: true });
    console.log('Database synchronized successfully');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
}

// Run the sync function
syncDatabase(); 