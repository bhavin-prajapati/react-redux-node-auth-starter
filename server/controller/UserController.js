const sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../db/models');
const { SESSION_COOKIE_NAME, JWT_SECRET } = require('../utils/constants');

export const register = (req, res) => {
  if (req.body.username, req.body.email, req.body.password) {
    db.User.findOne({
      where: {
        username: req.body.username,
      }
    }).then(user_by_name => {
      if (!user_by_name) {
        db.User.findOne({
          where: {
            email: req.body.email,
          }
        }).then(user_by_email => {
          if (!user_by_email) {
            db.User.create({
              username: req.body.username,
              email: req.body.email,
              password: bcrypt.hashSync(req.body.password, 10),
            }).then(user => {
              return res.send({
                message: 'User successfully created.'
              });
            });
          } else {
            return res.send({
              error: 'User with this email already exists.'
            });
          }
        });
      } else {
        return res.send({
          error: 'User with this username already exists.'
        });
      }
    });
  } else {
    return res.send({
      error: 'Invalid Request'
    });
  }
};

export const signin = (req, res) => {
  db.User.findOne({
    where: {
      username: req.body.username,
    }
  }).then(user => {
    if (user) {
      const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
      if (!isPasswordValid) {
        return res.send({
          error: 'Invalid Username or Password'
        });
      } else {
        const jwt_token = jwt.sign({ username: user.username, email: user.email, id: user.id }, JWT_SECRET);
        res.cookie(SESSION_COOKIE_NAME, jwt_token, { maxAge: 1800000 });
        return res.send({
          message: 'User login successful.'
        });
      }
    } else {
      return res.send({
        error: 'Invalid Username or Password'
      });
    }
  });
};

export const logout = (req, res) => {
  res.clearCookie(SESSION_COOKIE_NAME);
  return res.send({
    message: 'User logout successful.'
  });
};

export const loginRequired = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
};

export default { register, signin, loginRequired };
