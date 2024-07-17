
// (1) Table Print Karna
// var userInput = +prompt("enter your table number");

// for (var i = 1; i <= 10; i++) {

//     console.log(`${userInput} * ${i} = ${userInput * i}`);
// }




// (2) Array elements ka sum print karna:

// var array = [];
// var sum = 0;

// for (var i = 0; i < 5; i++) {
//     var userInput = +prompt("Enter your 5 numbers");
//     array.push(userInput)
//     sum += array[i];

// }
// console.log(array);
// console.log(sum);




// (3) Array elements ka sub se bara number print karay:

// var array = [];
// var max = 0;

// for (var i = 0; i < 5; i++){

//     var userInput = +prompt("eneter your numbers");
//     array.push(userInput);

//     if (array[i] > max ){

//         max = array[i]
//     }


// }
// console.log(array);
// console.log(max);






// (4) User say string le or usko ulta print karain:

// var userInput = prompt("enter your msg");

// var rever = " ";

// for (var i = userInput.length -1; i >= 0; i--) {

//     rever += userInput[i];

// }

// console.log(rever);


// factorial Find karna:

var user = +prompt("please enter a number");

var factorial = 1;

for (var i = 2; i <= user; i++) {

    factorial = factorial * i;
}

console.log(factorial);