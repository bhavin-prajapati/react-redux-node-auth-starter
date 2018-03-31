const sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../db/models');

export const loadDashboard = (req, res, next) => {
    return res.send({
      data: 'This sentence is retrieved from a secure endpoint and can only be accessed when signed in.'
    });
};

export default { loadDashboard };