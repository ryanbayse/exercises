var age = prompt("What is your age?");

// If age is negative, print an error message
if (age < 0) {
    console.log("Error. Age should be a positive value.");
}

else if (age < 18) {
    console.log("Sorry, you are not old enough to enter the venue.");
}

else if (age < 21) {
    console.log("You can enter, but cannot drink.");
}

 // If age is 21, print "Happy 21st Birthday!!"
else if (age === 21) {
    console.log("Happy 21st Birthday. Come on in. You can drink.");
}

else if (age >= 21) {
    console.log("Come on in. You can drink.");
}

// // If age is odd, print "your age is odd!"
// if (age % 2 !== 0) {
//     console.log("Your age is odd!");
// }

// // If age is a perfect square
// if(age % Math.sqrt(age) === 0) {
//     console.log("Your age is a perfect square!");
//   }