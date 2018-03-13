import { SESSION_COOKIE_NAME, JWT_SECRET } from './utils/constants';

const express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    jsonwebtoken = require("jsonwebtoken"),
    User = require('./controller/UserController'),
    Dashboard = require('./controller/DashboardController'),
    URL = require('url-parse');

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

// CORS
app.use((req, res, next) => {
    res.removeHeader('x-powered-by');
    const myURL = new URL(process.env.FRONTEND_URL || process.env.NODE_ENV !== 'local' ? process.env.FRONTEND_URL : req.get('Origin'));
    const originURL = new URL(req.get('Origin') || `${req.protocol}://${req.get('host')}${req.originalUrl}`);
    const originStr = `${originURL.protocol}//${myURL.hostname}${myURL.port !== '80' && myURL.port !== '443' && myURL.port.length > 0 ? `:${myURL.port}` : myURL.port}`;
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
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
