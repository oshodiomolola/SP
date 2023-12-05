const express = require('express');
const middleware = require('./user.middleware');
const controller = require('./user.controller');

const userRouter = express.Router();

userRouter.post('/signup',);

userRouter.post('/login');


module.exports = userRouter