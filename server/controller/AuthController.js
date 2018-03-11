const sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export const register = (req, res) => {
  console.log('register', req.body);
  // var newUser = new User(req.body);
  // newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  // newUser.save(function(err, user) {
  //   if (err) {
  //     return res.status(400).send({
  //       message: err
  //     });
  //   } else {
  //     user.hash_password = undefined;
  //     return res.json(user);
  //   }
  // });
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