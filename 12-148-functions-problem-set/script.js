// isEven()
// isEven(4); //true
// isEven(21); //false
// isEven(68); //true
// isEven(333); //false

// A solution
// function isEven(x) {
//     if (x % 2 === 0) {
//         return "true";
//     } else {
//     return "false"
//     }
// }

// A better solution
function isEven(x) {
    return x % 2 === 0
}

// factorial()
// factorial(5); //120
// factorial(2); //2
// factorial(10); //3628800
// factorial(0)]]; //1

function factorial(n) {
    var result = 1;
    for(var i = 1; i <= n; i++) {
        result = result * i;
    }
}


// kebabToSnake()
// kebabToSnake("hello-world"); //"hello_world"
// kebabToSnake("dogs-are-awesome"); //"dogs_are_awesome"
// kebabToSnake("blah"); //"blah"

function kebabToSnake(n) {
    return res = n.replace(/-/g, "_");
}