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
    }).then(username => {
      if (!username) {
        db.User.findOne({
          where: {
            email: req.body.email,
          }
        }).then(user => {
          if (!user) {
            db.User.create({
              username: req.body.username,
              email: req.body.email,
              password: req.body.password,
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

  // db.User
  //   .findOrCreate({
  //     where: {
  //       username: req.body.username,
  //       email: req.body.email,
  //       password: req.body.password
  //     }
  //   })
  //   .spread((user, created) => {
  //     if (!created) {
  //       return res.status(400).send({
  //         message: 'User with this email already exists.'
  //       });
  //     } else {
  //       return res.status(200).send({
  //         message: 'User successfully created.'
  //       });
  //     }
  //   });
};

export const signin = (req, res) => {
  console.log('signin', req.body);
  // User.findOne({
  //   email: req.body.email
  // }, function(err, user) {
  //   if (err) throw err;
  //   if (!user) {
  //     res.status(401).json({ message: 'Authentication failed. User not found.' });
  //   } else if (user) {
  //     if (user.comparePassword(req.body.password)) {
  //       res.status(401).json({ message: 'Authentication failed. Wrong password.' });
  //     } else {
  //       return res.json({token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id}, 'RESTFULAPIs')});
  //     }
  //   }
  // });
};

export const loginRequired = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
};

export default { register, signin, loginRequired };