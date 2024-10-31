var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bukusRouter = require('./routes/dinasPariwisata');

const mongoose = require("mongoose");
const pariwisata = require('./controller/dinasPariwisata');

//CORS Enabled
//Cross Origin Resource Sharing
var app = express();

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");  
  next();
});



mongoose.connect(
  "mongodb://localhost:27017/dbPariwisata"
).then(()=>{
  console.log("Connected to Database");
}).catch((err)=>{
  console.log("Connection Failed");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pariwisata', pariwisataRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler and handling is one 
app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page one and two 
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;