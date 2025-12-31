let myDate = new Date;
console.log(myDate);

function myAge(n1, n2){
    return n1 - n2;
}

let n1 = prompt("Enter the current year:");
let n2 = prompt("Enter your date of birth:");

alert(myAge(n1,n2));

function fibonacci(fibLen){

    let num1 = 0;
    let num2 = 1;

    for(let i = 0;i < fibLen;i++){

        let num3 = num1 + num2;
        console.log(num3);
        num1 = num2;
        num2 = num3;

    }
}

let fibLen = prompt("Enter fibLength: ");
fibonacci(fibLen);