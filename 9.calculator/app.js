const calculator = {

    displayPlus : function(a,b) {
        console.log("더하기:",a+b);
    },

    displayMinus : function(a,b) {
        console.log("빼기:" ,a-b);
    },

    displayTimes : function(a,b) {
        console.log("곱하기:",a*b);
    },

    displayDivide : function(a,b) {
        console.log("나누기:",a/b);
    }

}

calculator.displayPlus(10,5);
calculator.displayMinus(10,5);
calculator.displayTimes(10,5);
calculator.displayDivide(10,5);
