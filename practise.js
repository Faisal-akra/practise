// (1) Table Print karna
 // var user = +prompt("Enter your number");

// for (var i = 1; i <= 10; i++) {
//     var multiply = user*i;

//     console.log(`${user} * ${i} = ${multiply}`)
// }


// (2) Array elements ka Sum print karna
// var elements = [];
// var sum = 0;

// for (var i = 0; i < 5; i++) {
//     var user = +prompt("enter your numbers");
//    elements.push(user);
//    sum += elements[i];
// }

// console.log(elements);
// console.log(sum);

// (3)ARRAY KA SUB SE BARA NUMBER PRINT KARNA
// var numbers = [];
// var max = 0;

// for (var i = 0; i < 5; i++) {
// var user = +prompt("Enter numbers");
// numbers.push(user);

// if(numbers[i] > max ) {
//     max = numbers[i]
// }

// }
// console.log(numbers)
// console.log(max)

// (4) User say string lena
var user = prompt("enter your msg");
var reverse = " ";

for (var i = user.length -1; i >= 0 ; i--) {
    reverse += user[i];
}

console.log(reverse)