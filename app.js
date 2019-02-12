var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var apiRouter = require('./routes/api');
var companiesRouter = require('./routes/companies');
var signUpRouter = require('./routes/signUp');
var userRouter = require('./routes/user');
var scriptRouter = require('./routes/myJS');
var app = express();

// For public folder
// var publicDir = require('path').join(__dirname,'/public');
// app.use(express.static(publicDir));
// app.use(express.static(__dirname + 'public'));
// app.use('/images', express.static(__dirname + '/public/images'));

// var myJavascriptsRouter = require('./myJavascripts/test');
// app.use('/myJS', myJavascriptsRouter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/api', apiRouter);
app.use('/companies', companiesRouter);
app.use('/signUp', signUpRouter);
app.use('/user', userRouter); 
app.use('/myJS', scriptRouter);

// app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
