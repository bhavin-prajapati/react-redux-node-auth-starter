import { SESSION_COOKIE_NAME, JWT_SECRET } from './utils/constants';

const express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    jsonwebtoken = require("jsonwebtoken"),
    User = require('./controller/UserController'),
    Dashboard = require('./controller/DashboardController');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Authentication Middleware
app.use(function (req, res, next) {
    if (req.cookies && req.cookies[SESSION_COOKIE_NAME]) {
        jsonwebtoken.verify(req.cookies[SESSION_COOKIE_NAME], JWT_SECRET, (err, decode) => {
            if (err) req.user = undefined;
            req.user = decode;
            console.log(req.user);
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});

// Authentication Routes
app.post('/auth/register', User.register);
app.post('/auth/signin', User.signin);
app.get('/auth/logout', User.logout);

// Secure Routes
app.get('/dashboard', User.loginRequired, Dashboard.loadDashboard);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('Server started on: ' + port);
