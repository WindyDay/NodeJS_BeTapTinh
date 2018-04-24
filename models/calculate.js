
const CODE_BLANK  = "";
const CODE_OK  = "OK";
const CODE_100 = "Không thể chia cho không";
const CODE_101 = "Vui lòng nhập số thứ nhất";
const CODE_102 = "Vui lòng nhập số thứ hai";
const CODE_103 = "Vui lòng chọn phép toán";
const CODE_104 = "Số thứ nhất chứa ký tự không hợp lệ";
const CODE_105 = "Số thứ hai chứa ký tự không hợp lệ";


function getResult(firstValue, secondValue, checked_operation) {

    let result = {
        firstNum: firstValue,
        secondNum: secondValue,
        result: null,
        notification: null,
    }

    let validateCode;

    let a_parsed = Number.parseFloat(firstValue);
    let b_parsed = Number.parseFloat(secondValue);

    validateCode = validateInput(firstValue, secondValue, checked_operation);
    if (validateCode === CODE_OK) {
        switch (checked_operation) {
            case "plus":
                {
                    result = {...result, ...{result: a_parsed + b_parsed}};
                    break;
                }
            case "minus":
                {
                    result = {...result, ...{result: a_parsed - b_parsed}};
                    break;
                }
            case "multiply":
                {
                    result = {...result, ...{result: a_parsed * b_parsed}};
                    break;
                }
            case "divide":
                {
                    result = {...result, ...{result: a_parsed / b_parsed}};
                    break;
                }
            default:
                {
                    break;
                }
        }
    }
    
    result = {...result, ...{notification: validateCode}};

    return result;

}

function validateInput(firstValue, secondValue, checked_operation) {
    let a;
    let b;
    let operation;
    if(firstValue === "" || firstValue === undefined){
        return CODE_101;
    }
    a = Number.parseFloat(firstValue);
    if(Number.isNaN(a)){
        return CODE_104;
    }

    if(secondValue === "" || secondValue === undefined){
        return CODE_102;
    }
    b = Number.parseFloat(secondValue);
    if(Number.isNaN(b)){
        return CODE_105;
    }

    if(checked_operation === "" || checked_operation === undefined){
        return CODE_103;
    }
    else{
        if(checked_operation === "divide"){
            if(b === 0) return CODE_100;
        }
    }

    return CODE_OK;
}

module.exports = {
    getResult:getResult
}