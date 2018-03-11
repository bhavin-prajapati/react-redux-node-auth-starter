const sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../db/models');

export const register = (req, res) => {

  console.log(req.body.username);
  console.log(req.body.email);
  console.log(req.body.password);

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
  console.log(req.body.username);
  console.log(req.body.password);

  db.User.findOne({
    where: {
      username: req.body.username,
    }
  }).then(user => {
    if (user) {
      console.log('user', user.id);
      console.log('username', user.username);
      console.log('email', user.email);
      console.log('user', user.password);
      const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
      console.log('isPasswordValid', isPasswordValid);
      if (!isPasswordValid) {
        return res.send({
          error: 'Invalid Username or Password'
        });
      } else {
        return res.json({token: jwt.sign({ username: user.username, email: user.email, id: user.id}, 'RESTFULAPIs')});
      }
    } else {
      return res.send({
        error: 'Invalid Username or Password'
      });
    }
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