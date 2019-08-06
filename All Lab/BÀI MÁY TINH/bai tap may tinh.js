let display = document.getElementById("display");

let isoperatorclicked = false;
let isequalclicked = false;

let operator =  "";

let giatridau ;
let giatrihai;

function clickNumber( number ) {
    if (isoperatorclicked == true){
        giatridau = display.value;
        display.value= number;
        isoperatorclicked =false;
    } else {
        display.value += number;
    }
}
function clickOperator( operatorValue ) {
     isoperatorclicked = true;
     operator = operatorValue;
     isequalclicked = false;
}
function clickEqual() {
    if (isEqualClicked) {
        giatridau = parseInt(display.value);
    } else {
        giatridau = parseInt(giatridau);
        giatrihai = parseInt(display.value);
    }
    let result;
    if  (operator === "+"){
        result= giatridau + giatrihai;
    }else if (operator === "-"){
        result= giatridau - giatrihai;
    }
    display.value=result;
    isequalclicked = true;

}