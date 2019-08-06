let display= document.getElementById("display");

let isoperatorclick = false;
let isequalclick= false;

let operator= "";
let fisrtoperand;
let secondoperand;

let result;

function reset() {
    isoperatorclick=false;
    isequalclick=false;

    operator="";
    fisrtoperand=undefined;
    secondoperand=undefined;
    display.value="";


}

function clickNumber(number) {
    if  (isoperatorclick==true){
        fisrtoperand = display.value;
        display.value= number;
        isoperatorclick=false;
    }else {
        display.value+=number;
    }
}

function clickOperator(operatorValue) {
    isoperatorclick = true;
    operator = operatorValue;
    isEqualClicked= false;
}

function clickEqual() {
    if  (isequalclick){
        fisrtoperand= parseInt(display.value);
    }else {
        fisrtoperand= parseInt(fisrtoperand);
        secondoperand= parseInt(display.value);
    }
    if (operator ==="+"){
        result= fisrtoperand + secondoperand;
    } if (operator ==="-"){
        result= fisrtoperand - secondoperand;
    } if (operator ==="*"){
        result= fisrtoperand * secondoperand;
    } if (operator ==="/") {
        result = fisrtoperand / secondoperand;
    }
    display.value= result;
    isequalclick= true;
}
