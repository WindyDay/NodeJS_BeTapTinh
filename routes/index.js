var express = require('express');
var router = express.Router();
var createError = require('http-errors');

function route(app){
  app.get('/', (req,res)=>{
    res.render('index');
  })
  
    
  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });
}
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = {
  route:route,
};
