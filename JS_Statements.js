// Data definition 
var mystring = "Year";
var myMessage = "Getting Familiar with types and Structures in JS";
var lvYear = 2019;
var myBoolean = true;
var newVariable;
var emptyVariable = null;

var myArray = [];
var myObject = {};



console.log("Hello from JS console");
console.log (myMessage);
//console.log("Year: " + lvYear);
console.log(mystring + ' ' + lvYear);

/*When a variable is used without 
first defining a value for it, it is equal to undefined. */
console.log(newVariable); // prints undefined 

/*However, the null value is a different type of value, 
and is used when a variable should be marked as empty.*/
console.log(emptyVariable); //will print out null


/* ARRAYS DEFINITION */

/*JavaScript can hold an array of variables 
in an Array object. In JavaScript, an array also functions as a list,
a stack or a queue.To define an array, either use the brackets notation 
or the Array object notation:*/

var myArray = [1,2,3];
var theSameArray = new Array(1,2,3);
console.log(myArray[1]); //prints out 2


/* Arrays in JavaScript are sparse, meaning that we can also assign 
variables to random locations even though previous cells were undefined. 
For example: */
var myArray=[]; //prints []
console.log(myArray);
myArray[3]="putting message in index 3";
console.log(myArray);  // prints [ <3 empty items>, 'putting message in index 3' ]


/*you can have elements of different types stored together in the same array.
The example below is an array with a string, a number, and an empty object. */
myArray = ["string",10,{}];
console.log(myArray);


/* MANIPULATION ARRAYS */

/*Arrays can also function as a stack. The push and pop methods insert 
and remove variables from the end of an array.For example, let's create
an empty array and push a few variables. */

/*PUSH AND POP*/

var myStack=[];
myStack.push(10);
myStack.push(20);
myStack.push(30.5);
console.log(myStack);

//we can then pop variables off from the end
console.log(myStack.pop()); //will print out the variable we popped from the array
console.log(myStack); // what is left


/* QUEUES USING SHIFT and UNSHIFT*/
/*The shift and unshift methods are similar to push and pop, only they work 
from the beginning of the array. We can use the push and shift methods 
consecutively to utilize an array as a queue. For example:*/

var myQueue = [];
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue.shift());


//The unshift method is used to insert a variable at the beginning of an array.
var myArray = [1,2,3];
myArray.unshift(0);
console.log(myArray);       // will print out 0,1,2,3

/* SPLICING */

/*Splicing arrays in JavaScript removes a certain part from an array to create 
a new array, made up from the part we took out. For example, if we wanted to 
remove the five numbers from the following array beginning from the 3rd index, we would do the following */
var myArray = [0,1,2,3,4,5,6,7,8,9];
var mysplice = myArray.splice(3,7);

console.log(mysplice);        // will print out 3,4,5,6,7
console.log(myArray);       // will print out 0,1,2,8,9

/*What is the meaning of life?
42*/
var myArray = [true, "What is the meaning of life?"];
myArray.push(42);
myArray.shift();

console.log(myArray[0]);
console.log(myArray[1]);

/* OPERATORS*/
console.log("Operators + - / * % /= *= -= +=  %=");
/*JavaScript behaves differently when you are trying to combine 
two operands of different types. The default primitive value is a string, so when you try to add a number to a string, 
JavaScript will transform the number to a string before the concatenation.*/
console.log(1 + "1");   // outputs "11"
console.log(5 % 3);     // outputs 2 Modulus operator

console.log("Combined Assignment /= *= -= +=  %=");
var myNumber = 4;
console.log("Regular Operator: myNumber / 2 result:");
console.log(myNumber / 2);
console.log("Combined Assigment myNumber /= 2 result:");
console.log(myNumber /= 2);

/* CONDITIONS */

/* To evaluate whether two variables are equal, the == operator is used. 
There is also another equality operator in JavaScript, ===, which does a strict comparison.
 This means that it will be true only if the two things you are comparing are the same type 
 as well as same content. */
 console.log("1" == 1); // true
 console.log("1" === 1); // false

 /* IF STATEMENTS  Logical Operators ==  ===  < > || && ! */
 var myNumber = 42;
if (myNumber == 42)
{
    console.log("The number is correct.");
}

var foo = 1;
var bar = 2;

if (foo < bar)
{
    console.log("foo is smaller than bar.");
}

var foo = 1;
var bar = 2;
var moo = 3;

if (foo < bar && moo > bar)
{
    console.log("foo is smaller than bar AND moo is larger than bar.");
}

if (foo < bar || moo > bar)
{
    console.log("foo is smaller than bar OR moo is larger than bar.");
}

var notTrue = false;
if (!notTrue)
{
    console.log("not not true is true!");
}

/* SWITCH Statement - CASE  do not forget the break in each case*/

/* The switch statement is similar to the switch statement from the C programming language, 
but also supports strings. The switch statement is used to select between 
more than two different options, and to run the same code for more than one option*/

/*In this example, "Private" an "Sergeant" both trigger the first sentence, "Commander" 
triggers the second sentence and "Captain" triggers the third. If an unknown rank was evaulated, 
the default keyword defines the action for this case (optional). We must use the break statement
between every code block to avoid the switch from executing the next code block. */

var rank = "Commander"; 
switch(rank)
{
case "Private":
case "Sergeant":
    console.log("You are not authorized.");
    break;
case "Commander":
    console.log("Hello commander! what can I do for you today?");
    break;
case "Captain":
    console.log("Hello captain! I will do anything you wish.");
    break;
default:
    console.log(" I don't know what your rank is");
    break;
}


/* FUNCTION */

function checkNumber(myNumber)
{
    // TODO: write your code here
    if (myNumber===42)
    {
        console.log("correct");
    }
    else
    {
        console.log("incorrect");
    }
}

/* Using a Function */
checkNumber(3);
checkNumber(7);
checkNumber(42);


/* LOOPS */

/* FOR LOOP*/
console.log("For loop");
/*The for statement in JavaScript has the same syntax as in Java and C. It has three parts:

Initialization - Initializes the iterator variable i. In this example, we initialize i to 0.
Condition - As long as the condition is met, the loop continues to execute. 
In this example, we check that i is less than 3.

Increment - A directive which increments the iterator. 
In our case, we increment it by 1 on every loop */
var i;
for (i=0; i<3; i=i+1)
{
 console.log("Iteration "+ i);
}

/*We can also write a shorter notation for the statement by 
inserting the variable definition inside the for loop and incrementing using the ++
operator.*/
for (var i=0; i<3; i++)
{
    console.log("Iteration "+ i);
}


/* To iterate over an array and print out all of its members,
 we usually use the for statement. Here's an example: */

 var myArray= ["A","B","C"];
 for (var i=0; i < myArray.length; i++)
 {
    console.log("The member of myArray in index"+ i + " is " + myArray[i]);

 }


 /* WHILE LOOP*/
 /*The while statement is a more simple version of the for statement which
  checks if an expression evaluates to true and runs as long as it says true.*/

var i = 10;
console.log("While Loop");
while (i > 0)
{
    console.log(i + " bottles of water");
    i -= 1;
}


/* BREAK AND CONTINUE STATEMENTS*/
console.log("Break and Continue Statements" + /n);
/* The break statement allows to stop the execution of a loop. 
For example, we can create a loop that loops forever using while(true) 
and use the break statement to break inside the loop instead by checking 
that a certain condition was met.*/

var i=10;
while (true)
{
    console.log(i + " bottles of water available");
    i-=1;
    if (i==0)
    {
        break;
    }
}