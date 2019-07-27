var num = 8;
function doMath() {
    num += 1;
    if (num % 5 == 0) {
        return true
    } else {
        return false
    }
}
num += 1;
doMath()
//Ryan's answer: will return true