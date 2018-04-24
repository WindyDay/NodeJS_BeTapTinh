let express = require('express');
let router = express.Router();
let calculate = require('../models/calculate')

const NAME_BTN_RADIO = 'operation';
const ID_NOTIFICATION = 'notification';
const ID_INPUT_FIRST_NUM = '1st-num';
const ID_INPUT_SECOND_NUM = '2nd-num';
const ID_INPUT_RESULT = 'result';



router.get('/', (req, res) =>{
    let firstValue = req.query.firstNum;
    let secondValue = req.query.secondNum;
    let checked_operation = req.query.operation;
    let result = calculate.getResult(firstValue, secondValue, checked_operation);

    res.send(result);
})



module.exports = router;