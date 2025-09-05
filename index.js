console.log(`hello world`)


function AddTwoNumber(a,b){
    return a  + b;
}


function MinusTwoNumber(a,b){
    return a  - b;
}


function MultiplyTwoNumber(a,b){
    return a  * b;
}


function DivideTwoNumber(a,b){
    return a / b;
}


console.log(AddTwoNumber(5,20));



function isLeapYear(year){
    return year % 400 == 0 || (year % 4 == 0 && year % 100 !=0);
}

