// Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19")
for (var num = 0; num <= 19; num++) {
    console.log(num);
}

// Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40")
for (var num = 10; num <= 40; num+=2) {
    console.log(num);
}

// Print all odd numbers between 300 and 333 --Ryan's solution
console.log("Print all odd numbers between 300 and 333 (Ryan's solution)")
for (var num = 300; num <= 333; num+=2) {
    console.log(num+1);
}

// Print all odd numbers between 300 and 333 --Colt's solution
console.log("Print all odd numbers between 300 and 333 (Colt's solution)")
for (var num = 300; num <= 333; num+=1) {
    if(num % 2 !== 0) {
        console.log(num);
    }
}

// Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")
for (var num = 5; num <= 50; num++) {
    if((num % 5 === 0) && (num % 3 === 0)) {
        console.log(num);
    }
}