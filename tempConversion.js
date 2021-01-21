function fahrenheit(celsius) {
    var result = celsius * (5/9) + 32;
    console.log("Translating celius", celsius, "to fahrenheit is ", result);
    return result;
}
function celsius(fahrenheit) {
    var result = 5/9 * (fahrenheit - 32);
    console.log("translating fahrenheit" , fahrenheit, "to ceelsius is", result);
    return result;
}


var Mon = fahrenheit(10);
var Tues = fahrenheit(15);
var Wend = fahrenheit(20);

var Mon = celsius(10);
var Tues = celsius(15);
var Wend = celsius(20);