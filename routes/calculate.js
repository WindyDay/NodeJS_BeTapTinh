let express = require('express');
let router = express.Router();
let calculate = require('../models/calculate')


router.get('/', (req, res) =>{
    let firstValue = req.query.firstNum;
    let secondValue = req.query.secondNum;
    let checked_operation = req.query.operation;
    let result = calculate.getResult(firstValue, secondValue, checked_operation);

    res.render('index', result);
})



module.exports = router;