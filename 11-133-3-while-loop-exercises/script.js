// Exercise 1
// Answer: prints odd numbers 1-9 in console
var num = 1;

while(num <= 10) {
    console.log(num);
        num += 1;
}

// Exercise 2
// Answer: prints multiples of 4 (4, 8, 12, 16, 20) in console
var num = 1

while(num <= 20) {
    if(num % 4 === 0) {
        console.log(num);
    }
    num++;
}

// Exercise 3
// Answer: will create infinite loop
var num = 100;

while(num < 150) {
    console.log(num + 1);
    num--;
}