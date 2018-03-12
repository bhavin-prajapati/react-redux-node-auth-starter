const sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../db/models');

export const loadDashboard = (req, res, next) => {
    return res.send({
      dashboard: 'Secret dashboardy stuff here'
    });
};

export default { loadDashboard };