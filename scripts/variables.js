/* STEP 1: Declare variables
	Use a-z, 0-9, A-Z and underscores, avoiding reserved names
	All program variables are generally declared at the beginning (called 'hoisting') */
    var myName;
    var myAge;

    var myName = "stain";
    console.log(myName + " - "+ typeof(myAge));
    var myAge = 21;
    console.log(myAge + " - "+ typeof(myName));

    /* STEP 2: Initialize variables
	Don't confuse a variable with no value with one that doesn't exist at all */
    myAge = 80;
    myAge = "eighty";
    /* STEP 3: Updating variables
	Once a variable has been declared, this can be done any time */
    myAge = 21;
    myAge = myAge + 1;
    // STEP 4: Variable types
    // Numbers
    var num1 = 20;
    console.log(num1 + " - "+ typeof(num1));
    var num2 = 19.999999999999;
    console.log(num2 + " - "+ typeof(num2));
    // Strings (use '' or "")
    var string1 = "Hello";
    console.log(string1 + " - "+ typeof(string1));
    var string2 = 'World';
    console.log(string2 + " - "+ typeof(string2));
    // Boolean
    var bool1 = true;
    console.log(bool1 + " - "+ typeof(bool1));
    var bool2 = false;
    console.log(bool2 + " - "+ typeof(bool2));
    // Arrays
    var array1 = [1,2,3];
    console.log(array1 + " - "+ typeof(array1));
    var mixedArray = [1, "two", true];
    console.log(mixedArray + " - "+ typeof(mixedArray));
    // Objects
    var object1 = {name: "John", age: 21};
    console.log(object1 + " - "+ typeof(object1));
    var object2 = {name: "John", age: 21};
    console.log(object2 + " - "+ typeof(object2));
    // STEP 5: Typing (JavaScript is a loosely-typed language)