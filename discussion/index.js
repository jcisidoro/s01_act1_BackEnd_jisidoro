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
*/
