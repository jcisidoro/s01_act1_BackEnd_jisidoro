/* [SECTION] Syntax, Statements and Comments]


STATEMENTS - in programming are instruction that 
programmers tell the computer to perform
    - usually end with semi-colon(;)

SYNTAX - set of rules and structures that 
define the correct way to write statements and 
expressions in a programming language.
    - all lines/blocks of code should be written in a
    specific manner to work. This is due to how 
    these codes were initially programmed to function
    and perform in a certain manner


COMMENTS - are part of the code that gets ignored
by the language or non-executable lines of text used to 
explain or annotate the code
    - to describe the written code
    - single-line comment denoted by two slashes // 
    - multi-line comment denoted by a slash and asterisk

VARIABLES - used to store and manage data that can 
be referenced and manipulated throughout a program
    - it acts as a containers for data values.
    - key concepts (name , data type, value)
        - name - the identifier you use to refer to
                the variable
        - data type - the kind of data the variable holds
        - value - the actual data stored in the variable

        - var (oldest, now less recommended)
        - let (modern approach)
        - const (constant value)

        variables must be declared first before 
        they are used or initialize


        Reassigning variable values
        Syntax: variableName = newValue;

        Values of 'constant' cannot be change

        var vs let/const

       // var - is also used in declaring a variable, but var
        is an ECMAScript 2015 or ES6 features - let/const

        hoisting - default behavior of moving 
        declarations to the top, in terms of variables
        and constants, key word var is hoisted and let/const
        does not allow hoisting

       // Scope - essentially means these variables are
       available for use
       // let and const are blocked scope
       // a block is a chunk of code bounded by {}. A
       block lives in curly braces and anything within the
       curly braces is a block.


[SECTION] Data Types
    Strings are series of characters that create a word, 
    sentence or anything related to create text
        - single ('') or double ("") quote
        
        Concatenationing Strings
            - combining multiple strings to create
            single string
            - + symbol
            - the escape character (\) in strings in 
            combination with other characters can
            produce different effect in text

            "\n" refers to creating new line in between
            text

       use double quotes along with single quotes to
       allow us to easily include single quotes in texts
       without using escape character


    // Boolean values are normally used to store values
       relating to the state of certain things

    // Array - are special kind of data type that is used
    to store multiple values.
    // [] square brackets or array literal
    // syntax: let/const arrayName = [elementA, elementB]


    // Objects
      - another special kind of data type that's used to mimic
      real world objects/items
       - objects use {} curly braces also known as object
       literals
       syntax: key-valued pair

       let/const objectName = {
            propertyA : value,
            propertyB : value
       }

    // typeof - operator is used to determine the type
    of data or the value of a variable. It outputs a
    string.

    // Note: array is a special type of object with
    methods and functions to manipulate it

    Constant Object and Arrays
        The keyword const is a little misleading

        It does not define a constant value. It defines
        a constant reference to a value.

        Because of this you can NOT:
            reassign a constant value
            reassign a constant array
            reassign a constant object
        BUT you CAN:
            change the elements of constant array
            change the properties of constant object

    // Null - is used to intentionally express the
    absence of a value in a variable declaration/
    initialization
    // null simply means that a data type was assigned
    to a variable but it does not hold any value or
    any amt or is nullified

    // undefined represents the state of a variable
    that has been declared but without an assigned value

    // null vs undefined
    // undefined a variable was created but was not provided
    a value, null means that a variable was created and
    was assign a value that does not hold any value/amount

    The goal of this exercise is to create a Product
    Catalog that allows the user to perform various
    operations such as displaying all products, adding a
    new product, updating a product's stock, and
    removing a product from the catalog. This exercise
    will involve using objects, arrays, and manipulating
    them with functions.

    Create a "Product Catalog" using objects and arrays.
    The catalog should consist of multiple product
    objects, each with properties like name, price,
    stock quantity, and category.

    name - string
    price - number
    stockQuantity - number
    category - string

    Display all products.
    Add a new product.
    Update a product's stock.
    Remove a product from the catalog.

    method
        use for loop or if
        
*/
let products = {
    name: ["Laptop", "Phone", "Tablet"],
    price: [800, 900, 600],
    stockQuantity: [10, 20, 5],
    category: ["Electronics", "Electronics", "Furniture"]
};

console.log("Display All:", products)

//add
let newProduct = "Smartwatch";
let productExists = false;
for (let i = 0; i < products.name.length; i++) {
    if (products.name[i] === newProduct) {
        productExists = true;
        break;
    }
}

if (!productExists) {
    products.name.push(newProduct);
}

console.log("After Add:", products);

//update
let productToUpdate = "Tablet";
let updatedPrice = 700;
let updatedStock = 220;

for (let i = 0; i < products.name.length; i++) {
    if (products.name[i] === productToUpdate) {
        products.price[i] = updatedPrice;
        products.stockQuantity[i] = updatedStock;
        break;
    }
}

console.log("After Update:", products);


//remove
let productToRemove = "Tablet";
for (let i = 0; i < products.name.length; i++) {
    if (products.name[i] === productToRemove) {
        products.name.splice(i, 1);
        products.price.splice(i, 1);
        products.stockQuantity.splice(i, 1);
        products.category.splice(i, 1);
        break;
    }
}

console.log("After Remove:", products);



