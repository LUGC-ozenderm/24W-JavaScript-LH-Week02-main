/* STEP 1: Declare variables
	Use a-z, 0-9, A-Z and underscores, avoiding reserved names
	All program variables are generally declared at the beginning (called 'hoisting') */
    var myName;
    var myAge;

    myName = "stain";
    console.log(myName + " - "+ typeof(myAge));
    myAge = 21;
    console.log(myAge + " - "+ typeof(myName));

    /* STEP 2: Initialize variables
	Don't confuse a variable with no value with one that doesn't exist at all */
    myAge = 80;
    myAge = "eighty";
    /* STEP 3: Updating variables
	Once a variable has been declared, this can be done any time */
    var num1 = 20;
    console.log(num1 + " - "+ typeof(num1));
    var num2 = 19.999999999999;
    console.log(num2 + " - "+ typeof(num2));
    // STEP 4: Variable types
    // Numbers

    // Strings (use '' or "")
    var string1 = "Hello, how are you?";
    console.log(string1 + " - "+ typeof(string1));
    // Booleans

    // Arrays

    // Objects

    // STEP 5: Typing (JavaScript is a loosely-typed language)