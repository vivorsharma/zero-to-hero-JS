// syntax => rules (syntax mtlb rules).

// fullName  = "vivor sharma";
// console.log(fullName)

// (= is assignment operator)

// variables rules
// 1) variables names are case sensitive 'a' & 'A' is diffrent
// 2) only letters,digits,underscore,and dollar is allowed.(not even space)
// 3) only letter,underscore,dollar should be 1st character
// 4) reserved words cannot be variables names.

// ES6 (ecmma script 6)(2015)
// let, var, const

// let = variables cannot be re-declared but can be updated. a block scope variable.
// var = variables can be re-declared & updated. A global scope variables.
// const = variables cannot be re-declared or updated. A block scope variables.

// DataTypes in javascript
// * primitive datatype (7) = Number, String, Boolean, undefined, Null, BigInt, Symbol
// * Non-primitive = objects => arrays, functions

// Number
// let age = 24
// String
// let fullName = "tony stark"
// Boolean
// isFollow = true
// undefined
// let x;
// null
// let x= null
// bgint
// let x = BigInt("123")
// symbol
// let y = Symbol("Hello")

// # object is a collection of values. (object me key : value pair store hote h)

// const student = {
//     fullName : "rahul kumar",
//     age : 24,
//     cgpa: 8.8,
//     isPass: true
// };

// console.log(student["age"])

// # There are two ways to access keys from an Object
// * Obj.key
// * obj["key"]

// # (Object ke andr keys ko kese change kr skte h)
// student.age= student.age +1
// console.log(student.age)
// student["fullName"] = "Javascript"
// console.log(student['fullName'])

// 1) let ki value ko hum update kr skte h.
// 2) const ki value ko hum update nhi kr skte h but const me object ki keys ko update kr skte h.

// practice question 1
// const product = {
//     name : "Parker jotter standard Ct Ball Pen",
//     rating: 5,
//     offer: "10% off",
//     price: 2000,
// }

// practice question 2
// const profile = {
//     userName: "@samsulek",
//     firstName: "Sam",
//     lastName: "Sulek",
//     bio: "body builder",
//     posts: 202,
//     followers: 1000,
//     following: 200,
//     isFollow: true,
// }
// agr hmme object ke ander key ka type jana h toh aise jan skte h.
// console.log( typeof profile['isFollow'])

// # Operators in Javascript (used to perform some operations on data).

// a + b => expression.
// a,b => is operands.
// + => is operator.

// * Arithmetic operators
// +,-,*,/
// 1) Modulus. (%)
// 2) Exponential. (**)
// 3) Increment. (++)
// 4) Decrement. (--)

// let a = 3;
// let b = 5;
// console.log("a + b =",a+b);
// console.log("a - b =",a-b);
// console.log("a * b =",a*b);
// console.log("a / b =",a/b);
// console.log("a % b =",a%b);
// console.log("a ** b =",a**b);  iska mtlb hua 3 ki power 5.

// # Unary Operators (both increment and decrement are called unary operators)
// let a = 2;
// let b = 4;
// a = a+1 ; // instead of this we can use this
// a++;
// console.log("a =" ,a)

// a--;
// console.log("a =" ,a)

// a++ (post increment) and ++a (pre increment)
// b++ (post increment) and ++b (pre increment)

// console.log("++a = " ,++a)

// console.log("a++ = " ,a++)
// console.log("a = " ,a)

// same as with decrement also.

// # Assignment operators (asign values)
//  =  +=  -=  *=  %=  **=

// left = right (hmesha value left se right ki taraf propagate krti h)
// += => a+=1  iska mtlb hota h yeh => a= a+1 (short method hota h compact tareka)

// let a = 4;
// let b = 2;

// a += b;
// console.log("a =", a)
// a -= b;
// console.log("a =", a)
// a *= b;
// console.log("a =", a)
// a %= b;
// console.log("a =", a)
// a **= b;
// console.log("a =", a)

// # Comparison operators (ek value ko dusri ke sath compare krta h)

// Equal to (==) (yeh operator sirf value check krta h)
// Equal to & type (===) (yeh operator value or datatype dono check krta h)
// Not equal to (!=)
// Not equal to & type (!==)

// let a = 5;
// let b = 2;

// console.log(a == b)
// console.log(a != b)

// let a = 5;
// let b = "5";
// console.log(a === b)
// let a = 5;
// let b = "5";
// console.log(a !== b)

// # >, >= , < , <=
// let a =5;
// let b = 3;
// console.log(a > b)
// console.log(a < b)
// console.log(a >= b)
// console.log(a <= b)

// # Logical Operator (multiple expressions ko evaluate krke ek final answer dete h) (answer false ata h ya true ata h)

// 1) Logical AND (&&)
// 2) Logical OR  (||)
// 3) Logical NOT (!)

// * LOGICAL AND => When condition 1 is true and condition 2 is true then final answer will be true.
// * LOGICAL OR => When condition 1 is true or condition 2 is true. (koi bhi condition true hui toh final answer true);
// * LOGICAL NOT => true ko false bna dega. or false ko true bna dega. (Rreverse kr dega expression ko)

// let a = 2;
// let b = 3;

// let cond1 = a<b;
// let cons2 = a === 2;

// console.log(cond1 && cons2)
// console.log(cond1 || cons2) (|| this symbol is pipe)
// console.log( !(a < b) )

// # Conditional Statements (To implement some condition in the code)

// * if Statement (u can use multiple if statements also)

// let age = 14;
// if(age>=18){
//     console.log("you can vote")
// }

// if(age<=18){
//     console.log("you cannot vote")
// }

// let color;
// let mode = "dark";

// if(mode === "dark"){
//     color = "black"
// }
// if(mode === "light"){
//     color = "white"
// }

// console.log(color)

// * if else statement (if statement true then it will run if condition or else statement is true then it will run else condtion)

// let color;
// let mode = "dark";

// if(mode === "dark"){
//     color = "black";
// }else{
//     color = "white";
// }
// console.log(color)

// let num = 3;
// if (num % 2 === 0){
//     console.log("this is even number")
// }else {
//     console.log("this is odd number")
// }

// (NOTE : or else hmesha if ke sath hi ata hi but if ko hum else ke bina bhi likh skte h)

// * else if statement (when u have to check multiple conditions u can use else if statement instead of using if statement multiple times).

// let mode = "black";
// let color;

// if(mode === "dark"){
//     color= "black";
// }else if(mode === "blue"){
//     color = "blue";
// }else if(mode === "pink"){
//     color= "pink"
// }else{
//     color="light"
// }

// console.log(color)

// # Ternary Operators (it will work on three operands).
// condition ? true output : false output;

// let age = 22;
// const result = age>=18 ? "adult" : "not adult";

// console.log(result)

// (we can write in this way also)
// age>=18 ? console.log("adult") : console.log("not adult");

// (NOTE : this is simpler, compact if-else,  ternary operator if-else ko hi likhne ka dusra tarika h).

// * Switch statements

// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

// practice questions
// 1) get user to input a number using prompt("Enter a number").check if the number is a mltiple of 5 or not.
// ans:
// let num = prompt("Enter a number");

// if(num%5 === 0){
//     console.log(num, "is a multiple of 5")
// }else{
//     console.log(num, "is NOT a multiple of 5")
// }

// 2) write a code which can give a grades to students according to their scores?
// ans:
// let score = prompt("Enter your score (0-100)");

// if(score>=80 && score<=100){
//     console.log("A grade")
// }else if(score>=70 && score<=79){
//     console.log("B grade")
// }else if(score>=60 && score<=69){
//     console.log("C grade")
// }else if(score>=50 && score<=59){
//     console.log("D grade")
// }else if(score>=0 && score<=49){
//     console.log("F grade")
// }else{
//     console.log("Invalid score")
// }

// # Loops in javascript. (Loops are used to execute a piece of code again & again).

// * For loop

// for (let i=1; i <= 5; i++){
//     console.log("hello lets learn loops in javascript")
// }

// let i=1; => initialize.
// i<=5 => stopping condition.
// i++ => updation.

//  calculate sum of 1 to 5;
// let sum = 0;
// for (let i= 1; i <=5; i++){
//     sum = sum + i;
// }
// console.log(sum)

//  calculate sum of 1 to n;
// let sum = 0;
// let n = 100;
// for (let i= 1; i <=n; i++){
//     sum = sum + i;
// }
// console.log(sum)

// * Infinite Loops (A Loop that never ends).
// (jiski stopping condition true hu rhti h kbhi false nhi hoti)

// for (let i=1; i>=0; i++){
//     console.log(i)
// }

// * While Loop (while loop me condition starting m hi check hojati h)

// let i=1; => initialize.
// i<=5 => stopping condition.
// i++ => updation.

// let i =1;
// while (i <= 5){
//     console.log(i);
//     i++;
// }

// * Do - While (do-while loop me condition last(end) me check hoti h. isliye do-while loop atleast ek baar toh run krega hi krega).

// let i =1;
// do {
//     console.log(i)
//     i++;
// }while (i <= 5);

// * For-of Loop. (for-of loop hamme strings and arrays ke upar loop lgane me help krta h).

// let str ="javascript";
// for (let i of str){
// // iterator -> characters
// console.log(i)
// }

// lets calculate string size?
// let str ="javascript";
// let size = 0;

// for (let i of str){
// console.log(i)
// size++;
// }
// console.log(size, "is string size")

// * For - In Loop (for-in loops ko hum objects or arrays ke liye bhi use kr skte h, or yeh keys return krta h object ki).

// let student = {
//     name: "vivor",
//     age: 24,
//     cgpa: 7.8,
//     isPass: true,
// }

// for (let key in student) {
//     console.log(key)
//     or agr iss key me se iski value ko access krna h toh aise krenge
//     console.log(key, student[key])
// }

// # practice questions.

// 1) print all even numbers 0 to 100 ?
// ans:

// for(num=0; num<=100; num++){
//     // console.log(num)
//     if(num % 2 === 0){
//         console.log("even numbers", num);
//     }
// }

// 2) print all odd numbers 0 to 100 ?
// ans:

// for(num=0; num<=100; num++){
//     // console.log(num)
//     if(num % 2 !== 0){
//         console.log("odd numbers", num);
//     }
// }

// 3) create a game where you start with any random game number. ask the user to keep guessing the game number until the user enters correct value?
// ans:

// let gameNum = 31;
// let userNum = prompt("Guess a game number");

// while(userNum != gameNum){
//     userNum = prompt("You enetred wrong number. Guess a number again");
// }
// console.log("Congratulations u entered correct number")

// # Strings in javascript. (String is a sequence of characters used to represent text)

// NOTE: (jitni bhi strings ko hum javascript ke andr create krte h un sab ke paas inbuild properties hoti h. or kuch inbuild functions hote h jinko hum methods bhi kehte h)

// # String
// let str = "javascript";
// let str2 = "hello javscript";
// # length
// str.length

// NOTE: string is behaving like an object so we can access individual character like we are accessing keys from an object by index.
// singular form is index.
// prural form is indices.

// console.log(str[0])

// # Template Literals (A way to have embedded expressions in strings, we can it is special type of string).

// let specialString = `This is a Template Literals`;
// console.log(specialString)

// # Template literals ko kyu use krte h

// let obj ={
//     item: "pen",
//     price: 10,
// }
// console.log("cost of ", obj.item, "is", obj.price)  (without template literals)

// console.log(`cost of ${obj.item} is ${obj.price}`) (with using Template Literals)

// NOTE: To create strings by doing substitution of placeholders. this phenomenon is called String InterPolation.

// `string text ${expression} string text`.

// # Escape Character (jiska kaam hota h string ke andr next line dena)

// * \n => next line
// * \t => tab

// console.log("hello\njavascript");
// console.log("hello\tjavascript");

// NOTE: Escape character ki length 2 ni 1 single character ki tarah count hoti h.

// # Strings Methods (These are built in functions to manipulate a string).

// * str.toUpperCase()
// * str.toLowerCase()
// * str.trim()   remove white spaces, starting or end ki khali jagah remove krta h.
// * str.slice(start, end?)  returns part of string
// * str1.concat(str2)   join srt1 and str2 
// * str.replace(searchVal, newVal)
// * str.charAt(idx)

// NOTE: agr mene kisi bhi string ke upar apna method apply kia toh voh original string ke andr change ni krega.
//       voh ek new string create krega with the new value. original strings ke andr kbhi bhi change ku ni hota kuki javascripts 
//       ke andr jo strings hoti h. those strings are immutable. immutable mtlb jo chiz change ni hoti.

// let str = "javascript";
// let newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);

// let newStr = str.toLowerCase();
// console.log(str);
// console.log(newStr);

// let str = "    hello javascript  "
// console.log(str.trim());

// let str = "hello";
// console.log(str.slice(2,4));

// let str1 = "java";
// let str2 = "script";

// let res = str1.concat(str2);
// console.log(res)
// let res = str1 + str2  aise bhi hum concat kr skte h

// let str = "hello"
// console.log(str.replace("h" , "y"))

// let str = "ILOVEJS"
// console.log(str.charAt(3))


// # Practice Question
// 1) Prompt the user to enter their full name. generate a username  for them based on the input. starts with @, followed by their
//    fullname and ending with fullname length.

// ans:

// let fullName = prompt("Enter your fullName");
// let str = "@";
// console.log(str + fullName + fullName.length)
// console.log(str.concat(fullName).concat(fullName.length))


// # Arrays in javascript. (Collections of items, information ko store krwane ka linear tarika hota h, array ek special type of object hoti h)

// * NOTE: Diffrence b/w properties and methods => properties hoti h jo kuch value de deti h. or method hota h jo kuch kaam krta h.

// let marks = [97, 82, 75, 64, 34]
// console.log(marks)
// console.log(marks.length)    =>property

// * Array Indices
// let marks = [97, 82, 75, 64, 34]
// arr[0], arr[1], arr[3], arr[4]

// NOTE:  we can also change the array ki values by index.but we cannot do this in strings beacause strings are immutable. 
//        lekin hmara jo array hota h voh mutable hota h.
// arr[2] = 66;

// # Looping over an Array. (Prints all element of an array)

// loops => iterable => (strings, objects, arrays)

// let heroes = ["ironman", "thor", "hulk", "spiderman", "antman", "shaktiman"]
// for loop

// for (let idx=0; idx<heroes.length;idx++){
//     console.log(heroes[idx])
// }

// for-of loop
// for (let hero of heroes){
//     console.log(hero)
// }

// Practice Question
// 1) For a given array with marks of student -> [85,97,44,37,76,30] find the average marks of entire class.

// ans:
// let marks =  [85,97,44,37,76,30] ;

// let sum = 0;

// for (let val of marks){
// //  sum = sum+val;
// sum += val;
// }
// let avg = sum / marks.length
// console.log(`average marks of students is ${avg}`)

// 2) For a given array with prices of 5 items -> [250, 645, 300, 900, 50] all items have an offer of 10% OFF on them.
//    channge the array to store final price after applying offer.

// ans:

// items = [250, 645, 300, 900, 50]

// let i = 0;
// for (let val of items){
//     let offer = val / 10;
//     let final = items[i] - offer
//     console.log(`value after offer is ${final}`)
//     i++;
// }

// for (let i = 0; i<items.length; i++){
//     let offer = items[i] / 10;
//     // items[i]-= offer;
//     items[i] = items[i] - offer
// }
// console.log(items)


// # Array Methods in javascript. (jo hamme kuch kaam kr ke de skte h)

// * Push() : add to end
// * Pop() : delete from end & return
// * toString() : converts array to strings.
// * concat() : join multiple arrays & return results.
// * unShift() : add to start.
// * shift() : delete from start & return.
// * slice() : returns a piece of the array. (slice method original array ke andr change ni krta)
// * splice() : change original array (add, remove, replace)

// push method me existing values ke baad me nyi values add hoti h
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// foodItems.push("chips","burger", "panner")
// console.log(foodItems)

// let foodItems = ["potato", "apple", "litchi", "tomato"];
// foodItems.pop()
// console.log(foodItems)

// let foodItems = ["potato", "apple", "litchi", "tomato"];
// console.log(foodItems.toString())

// let marvelHeroes = ["thor", "spiderman", "ironmen"]
// let dcHeroes = ["superman", "batman"]
// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes)

// let marvelHeroes = ["thor", "spiderman", "ironmen"]
// marvelHeroes.unshift('antmen')

// let marvelHeroes = ["thor", "spiderman", "ironmen"]
// marvelHeroes.shift()

// let marvelHeroes = ["thor", "spiderman", "ironmen", "Dr.Strange", "antmen"]
// console.log(marvelHeroes)
// console.log(marvelHeroes.slice())


// let arr = [1,2,3,4,5,6,7]
// arr.splice(2,2,101,102)

// Add Element
// arr.splice(2,0,101);

// Delete Element
// arr.splice(3,1);

// Replace Element
// arr.splice(3,1,101)


// # Pracrice Question
// 1) create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a) Remove the first company from an array.
// b) Remove Uber & Add Ola in its place.
// c) Add Amazon at the End.

// ans:.
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a) companies.shift()

// b) companies.splice(2,1,"Ola")

// c) companies.splice(5,1,"Amazon")
//    companies.push("Amazon")  


// # Functions in javascript. (Block of code that performs a specific task, can be invoked(call) whenever needed.)

// * Function Definition
// function functionName() {
//     //  do some work
// }
// * Function call
// functionName()

// * function functionName (param1, param2){
//  do some work
// }



// function myFunction() {
//     console.log("welcome to js")
// }
// myFunction();

// function myFunction(msg) {    
// (Function definition ke andr jo variable hota h usse parameter khte h -> input)
//     console.log(msg)
// }
// myFunction("i love js");    (Function call ke andr jo value pass krte h usse argument khte h)

// NAN => Not a Number

// * write a function to calculate sum of 2 numbers?
// function sum(x,y) {
//  console.log(x+y)
// }
// sum(4, 8)

// function sum(x,y) {
//  local variables -> scope. (function ke parameter function ke local variable bn jate h iska mtlb function ke bahr yeh exist nhi krenge, they have block scope).
//   s= x + y;
//   return s;
//   return keyword hmesha ek hi value return kr skta h function se
// }
// let val = sum(4, 8)
// console.log(val)


// # Arrow Functions in javascript. (Compact way of writting function)
// ( NOTE: Functions ko bhi variable ke andr store kia ja skta h. arrow functions is a part of modern javascript).
// ( => arrow functions)

// const functionName = (param1, param2) => {
// do some work
// }

// arrow function of addition
// const arrowSum = (a,b) => {
//     console.log(a+b)
// }
// arrowSum(5,6);


// arrow function of multiplication
// arrowMul = (x,y) => {
//     console.log(x*y)
// }
// arrowMul(7,9)

// Practice Question
// 1) Create a function using the "function" keyword that takes string as an argument & returns the number of vowels in the string?
// ans:

// function countVowels(str) {
// let count = 0;
// for (const char of str){
//     if (char === 'a' || char === 'e'|| char ==="i"|| char==='o'||char==='u'){
//       count++;
//     }
// }
// console.log(count)
// }
// countVowels("i love js")

// 2) same question do with arrow functions?
// ans:

// const vowelCount = (str) => {
//     let count = 0;
//     for (const char of str){
//         if (char === 'a' || char === 'e'|| char ==="i"|| char==='o'||char==='u'){
//                   count++;
//                 }
//     }
//     console.log(count)
// }
// vowelCount("i love javascript");



// # forEach Loop in Arrays. (foreach function jud gya h array ke sath ya strings ke liye bhi use kr skte h. issi function ko hum 
//                            methods khenge).

//  arr.forEach(callBackFunction)
// (NOTE: functions javascript ke andr parameters ki tarah pass hoskte h or aap kisi function ki value ko return bhi kr skte ho).

// # Callback Funtion: here, it is function to execute for each element in the array.
// (NOTE: A call back is a function passed as an argument to another function).

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printVal(val){
//     console.log(val);
// })

// arr.forEach((val) => {
//     console.log(val)
// })

// NOTE: forEach hum tab use krte h jab humme array ke har element ke liye kuch kaam perform krwana ho.

// * for each ke callback ke parameter m hum teen cheze paas kr skte h value(item), idx(position), array.

// NOTE: Higher order functions/methods voh hote ho jo dusre functions ko as a parameter use kree hote h ya kisi function ko return krte h.

// Practice Question
// 1) For a given array of numbers, print the square of each value using forEach loop?
// ans:

//  let nums = [1, 2, 3, 4 ];

// =>  nums.forEach((val, idx) => {
//     let res = val * nums[idx]
//     console.log(`The square of ${val} is ${res}`);
//  })

// => nums.forEach((num) => {
//     console.log(num * num);
//  })

// => let calcSquare = (num) => {
//         console.log(num * num);
// }
// nums.forEach(calcSquare);


// # Some Array Methods are:

// * Map (Creates new array with the results of some operation. the value its callback returns are used to form new array).
// (map use hota h jb humme values ko use krke koi naya array create krna ho)
// arr.map(callback(value,index,array))

// let arr = [1, 2, 3, 4, 5]
// arr.map((val) => {
//     console.log(val)
// })
// let newARR = arr.map((val) => {
//   return val;
// })
// console.log(newARR)

// * Filter (creates a new array of elements that give true for a condition/filter).
// let newArr = arr.filter((val) => {
// return val % 2 === 0;
// })

// let arr = [1, 2, 3, 4, 5, 6, 7]

// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// })
// console.log(evenArr)

// let oddArr = arr.filter((val) => {
//     return val % 2 !== 0;
// })
// console.log(oddArr)


// * Reduce (Performs some operations & reduce the array to a single value. it returns that single value).
// callback function takes four arguments - accumulator, currentValue, currentIndex, and array.

// let arr = [1, 2, 3, 4, 5];
// const output = arr.reduce((prev, curr) => {
//     return prev + curr;
// })

// console.log(output)

// 1) TO find out largest number in an array?
// const largNumb = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// })

// console.log(largNumb)


// Practice Questions
// 1) We are given an array of marks of students. filter out of the marks of student that scored 90+.
// ans:

// let marks = [87, 93, 64, 99, 86];

// let studentMarks = marks.filter((val) => {
//      return val > 90;   
// })
// console.log(studentMarks)


// 2) Take a number n as input from user. create an array of numbers from 1 to n. use the reduce method to calculate sum of all 
//    the numbers in the array. use the reduce method to calculate product of all numbers in the array.?
// ans:

// let n = prompt("Enter a Number");
// let arr = [];
// for (let i=1; i<=n; i++){
//    arr[i-1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((prev, curr) => {
//     return prev + curr;
// })
// console.log(sum)

// let product = arr.reduce((prev, curr) => {
//     return prev * curr
// })
// console.log(product)



// # DOM Document Object Model (when a web page is loaded, the browser creates a document object model of the page).

// Note: html ko apne javascript ke andr access kr skte h. window object ke andr document naam se. or yeh document model hota h. means
//       representatio hoti h html ki. or issi ko hum dom khte h.

// NOTE: script tag ko body tag ke andr last me ku rkhte h. kuki phle html ki body load hogi tabhi hum dom elements access kr skte h.
//       agr humne script tag ko head tag ke andr mtlb body se phle load kr lete h toh uske andr dom elements accessable nhi hote h.


// # DOM Manipulation

// * Selecting with id => document.getElementById('myId')
// let myID = document.getElementById("button")
// console.log(myID)

// * Selecting with class => document.getElementByClassName('myClass')
// let myID = document.getElementByclassName("button")
// console.log(myID)

// * Selecting with tag => document.getElementByTagName('tagname')
// let parahs = document.getElementsByTagName("p")
// console.dir(parahs)


// # Query Selector

// * document.querySelector("myId/myClass/tag")   => returns first element
// let firstEl = document.querySelector("p")
// console.dir(firstEl)

// * document.querySelectorAll("myId/myClass/tag")   => returns a NodeList
// let secondEl = document.querySelectorAll("p")
// console.dir(secondEl)

// NOTE: Dom ka jo tree bnta h usme har individual chiz ko node ban jati h. iss node me agr hum multiple list bna le usse node list khte h.

// * class ko access krne ke liye
// let firstEl = document.querySelector("p")
// console.dir(firstEl)

// let secondEl = document.querySelectorAll(".button")
// console.dir(secondEl)

// * id ko access krne ke liye. (queryselector all nhi krte h id ke case m kuki id unique hoti h)
// let firstEl = document.querySelector("#button")
// console.dir(firstEl)


// # Properties

// * tagName: returns tag for element nodes
// let firstEl = document.querySelector("p")
// console.dir(firstEl.tagName)

// * innerText: returns the text content of the element and all its children.(inner text me sirf text show hota h)
// let firstEl = document.querySelector("p")
// console.dir(firstEl.tagName)

// let firstEl = document.querySelector("div")
// console.dir(firstEl.innerText)
// * innerHTMl: returns the plain text or HTMl contents in the element. (innerhtml me content bhi ata h but uske andr html tag honge)


// * textContent: returns textual content even for hidden elements 

// three types of node in dom
// NOTE: textnode, commmentnode, elementnode.

// NOTE: basically firstchild, lastchild, children hogya inn sb ko hum use krte h navigation ke liye.


// Practice Questions
// 1) create a h2 heading element with text -"helo javascript". append "from i love javascript" to this text usinf js?
// ans:

// let heading = document.querySelector("h2")
// console.dir(heading.innerText)

// heading.innerText = heading.innerText + " I Love Javascript"

// 2) create 3 div with common class name. "box" Access them & add some unique text to each of them.
// ans:

// let divs = document.querySelectorAll(".box")
// divs[0].innerHTML = "new unique value of 1",
// divs[1].innerHTML = "new unique value of 2",
// divs[2].innerHTML = "new unique value of 3"

// Loops ke sath bhi solve kr skte h solve
// let idx = 1;
// for(div of divs) {
//     div.innerHTML = `new unique value ${idx}`
//     idx++
// }


// # Attributes. (eg: id,class,src)

// * getAttribute(attr)             => to get the attributes value
// let div = document.querySelector("div")
// console.log(div)

// let id = div.getAttribute("id")
// console.log(id)

// let name = div.getAttribute("name")
// console.log(name)

// let para = document.querySelector("p")
// console.log(para.getAttribute("class"))

// * setAttribute(attr, value)      => to set the attributes val th
// let para = document.querySelector("p")
// console.log(para.setAttribute("class", "newClass"))

// * node.style (special attribute) (we can access styling in javascript).
// let div = document.querySelector("#box")
// console.log(div)

// div.style.backgroundColor = "green"
// div.style.fontSize = "21px"
// div.innerText = "hey i m changed value"


// # Insert Elements. 
// (1 step is to create an element. 2nd step is to access an element. 3rd step is to insert an element.)

// * node.append(el)                    => adds at the end of node (inside)
// let newBtn = document.createElement("button")
// newBtn.innerText = 'click me!';
// console.log(newBtn)

// let div = document.querySelector("div")
// div.append(newBtn)


// * node.prepend(el)                   => adds at the start of node (inside)
// let newBtn = document.createElement("button")
// newBtn.innerText = 'click me!';
// console.log(newBtn)

// let div = document.querySelector("div")
// div.prepend(newBtn)

// * node.before(el)                    => adds before the node (outside)
// let newBtn = document.createElement("button")
// newBtn.innerText = 'click me!';
// console.log(newBtn)

// let div = document.querySelector("div")
// div.before(newBtn)

// * node.after(el)                     => adds after the node (outside)
// let newBtn = document.createElement("button")
// newBtn.innerText = 'click me!';
// console.log(newBtn)

// let div = document.querySelector("div")
// div.after(newBtn)


// * node.remove()                             => removes the node
// let btn = document.querySelector('button')
// btn.remove()

// * appendchild()
// * removechild()


// Practice Questions.
// 1) create a new button element. give it a text "click me", background color of red & text color of white. insert button as the 
//    first element inside the body tag.
// ans:

// let newBtn = document.createElement("button")
// newBtn.innerText = 'click me';
// console.log(newBtn)

// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";

// let body = document.querySelector("body")
// body.prepend(newBtn)

// 2) create a <p> tag in html, give it a class & some styling. now create a new class in css and try to append this class to the <p>
//    element. did you notice, how you overwrite the class name when you add a new one? solve this problem using classlist.
// ans:

// let p = document.querySelector("p")
// console.log(p)

// console.log(p.setAttribute("class", "newClass"))

// console.log(p.classList.add("newClass"))
// let para = document.querySelector("p")
// console.log(para.setAttribute("class", "newClass"))



// # Events in javasript. (The change in state of an object is known as an Event)
// Event are fired to notify code of intresting changes that may affect code execution.

// * Mouse events (clicks,double click, etc)
// * keyboard events (keypress, keyup, keydown)
// * form events  (submit, reset)
// * print event and many more.

// let btn1 = document.querySelector('#btn1');

// btn1.onclick = () => {
//     console.log('btn1 was clicked')
//     let a = 21;
//     a++;
//     console.log(a)
// }

// let div = document.querySelector("div")

// div.onmouseover = () => {
//     console.log("on mouse over");

// }

// NOTE: agr humne inline event handling ki h or js ki file me handle kia h event ko. toh periority js file ki hoti h inline ki nhi.

// let btn1 = document.querySelector('#btn1');

// btn1.onclick = () => {
//     console.log('handler1')
// }

// btn1.onclick = () => {
//     console.log('handler2')
// }

// NOTE: agr hum same event ko dusri bar nhi chla skte h. isse second wala event 1st ko overwrite kr dega.


// # Event Object. (It is a special object that has details about the event).
// All event handlers have access to the Events Object's properties and methods.

// * e.target
// * e.type
// * e.clientX
// * e.clientY

// let btn1 = document.querySelector('#btn1');

// btn1.onclick = (e) => {
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.clientX, e.clientY)
// }


// # Event Listeners  

// * node.addEventListners( event, callback)   => callback is also known as handler.



// let btn1 = document.querySelector('#btn1');

// btn1.addEventListener("click", () => {
//     console.log("button 1 was clicked")
// })    


// Event liteners ke andr hum event object ko bhi access kr skte h. usse as an argument likh skte h.
// let btn1 = document.querySelector('#btn1');

// btn1.addEventListener("click", (evt) => {
    //     console.log("button 1 was clicked")
    //     console.log(evt)
    //     console.log(evt.type)
    // })  
    
    
// * node.removeEventListners( event, callback)   
// NOTE: the callback refrence should be same to remove
// let btn1 = document.querySelector('#btn1');
    
// btn1.addEventListener("click", () => {
//     console.log("handler 1")
// }) 
// btn1.addEventListener("click", () => {
//     console.log("handler 2")
// }) 
// const handler3 =  () => {
//     console.log("handler 3")
// }
// btn1.addEventListener("click", handler3)

// btn1.addEventListener("click", () => {
//     console.log("handler 4")
// }) 

// NOTE: jb bhi hamme kisi function ko remove krwana hota h usko kisi variable m store krwa lete h.

// btn1.removeEventListener("click", handler3)


// # Practice Question
// 1) create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again ?
// ans:

// let modeBtn = document.querySelector("#mode")

// let currMode = "light";

// modeBtn.addEventListener("click", () => {
//     if (currMode === "light"){
//         currMode = "dark"
//         document.querySelector("body").style.backgroundColor = "black"
//     }else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white"
//     }
//     console.log(currMode)
// })

// hum css me class deke bhi kr skte h
// let body = document.querySelector("body");

// modeBtn.addEventListener("click", () => {
//     if (currMode === "light"){
//         currMode = "dark"
//         body.classList.add("dark")
//         body.classList.remove("light")
//     }else {
//         currMode = "light";
//         body.classList.add("light")
//         body.classList.remove("dark")
//     }
//     console.log(currMode)
// })

// 2) same question with on mouse over
// ans:
// let modeBtn = document.querySelector("#mode")

// let currMode = "light";
// let body = document.querySelector("body");
// modeBtn.addEventListener("mouseover", () => {
//     if (currMode === "light"){
//         currMode = "dark"
//         body.classList.add("dark")
//         body.classList.remove("light")
//     }else {
//         currMode = "light";
//         body.classList.add("light")
//         body.classList.remove("dark")
//     }
//     console.log(currMode)
// })



// # Classes and Objects.
// * ProtoTypes in javascript. (A javascript object is an entity having state and behavior(properties and methods))

// direct way to create an objects.
// const student = {
//     name : "vivor sharma",
//     rollNo: 21,
//     marks: 94,
//     printMarks: function() {
//         console.log("marks =", this.marks)  
//         // this ka mtlb h ki student.marks jaha bhi hmne this likh dia mtlb student object ki marks property ko access krna chah rahe h.
//     }
// }

// (Js object has a special property called prottType). by default create hota h yeh object. protoType is a refrence to an object.

// We can set ProtoType using __proto__ (hum apna protoType bhi generate krwa skte h).
// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%")
//     }
// }

// const karanArjun = {
//     salary: 50000
// }

// karanArjun.__proto__ = employee;

// NOTE: if object & prototype have some method, object's method will be used.

// # Classes in Js (Class is a program-code template for creating objects). (basically classes is a blueprint pr template of an object)
// Those objects will have some state variables & some behavior functions inside it.

// class MyClass {
//     constructor() {...}
//     myMethod() {...}
// }
// let myObj = new MyClass()

// class ToyataCar {
//     start() {
//         console.log("start")
//     }
//     stop() {
//         console.log("stop")
//     }
//     setBrand(brand) {
//         this.brand = brand
//     }
// }

// let fortuner = new ToyataCar()
// fortuner.setBrand("fortuner")

// let lexus = new ToyataCar()
// fortuner.setBrand("lexus")

// NOTE: in this js automatically creates constructor with new keyword. but we can also create our own custom contructor.

// # Constructor in js. (constructor() method is invoked by new, and initializes object).

// in This first constructor is invoked. 
// class ToyataCar {
//     constructor() {
//         console.log("creating new objects")
//     }
//     start() {
//         console.log("start")
//     }
//     stop() {
//         console.log("stop")
//     }
//     setBrand(brand) {
//         this.brand = brand
//     }
// }

// let fortuner = new ToyataCar() 
// let lexus = new ToyataCar()

//  in This we can initialize 
// class ToyataCar {
//     constructor(brand) {
//         console.log("creating new objects")
//         this.brand = brand
//     }
//     start() {
//         console.log("start")
//     }
//     stop() {
//         console.log("stop")
//     }
//     setBrand(brand) {
//         this.brand = brand
//     }
// }

// let fortuner = new ToyataCar() 
// let lexus = new ToyataCar()


// # Inheritence in javascript. (inheritence is passing down properties & methods from parent class to child class).

// class parent {
// }
// class child extends parent {
// }

// class Parent {
//   hello(){
//   console.log("hello")
//   }
// }

// class Child extends Parent{}
// let obj = new Child();


// class Person {
// constructor(){
// this.species = "homo sapeins"
// }

//     eat() {
//     console.log("eat")
//     }
//    sleep() {
//      console.log("sleep")
//    }
// }

// class Engineer extends Person {
// work() {
// console.log("work")
// }
// }

// let vivorObj = new Engineer()

// NOTE: If Child & Parent have same method, child's method will be used. (method overriding)
// agr parent or child me same function ho toh voh child wale ko override kr dega.

// Note: even hum contructor bhi inherit kr skte h like this.


// # Super Keyword. (The super keyword is used to call the constructor of its parent class to access the parent's properties and methods).

// class Person {
// constructor(){
//     console.log("enter parent constructor")
// this.species = "homo sapeins"
// }

//     eat() {
//     console.log("eat")
//     }
//    sleep() {
//      console.log("sleep")
//    }
// }

// class Engineer extends Person {
//     constructor(branch){
//         console.log("enter child constructor")
//         super();            
//         // (To invoke parent class constructor)
//         this.branch = branch
//         console.log("exit child constructor")
//     }
// work() {
// console.log("work")
// }
// }
// let vivorObj = new Engineer("chemical enginner")


// # Practice Questions
// 1) You are creating a website for your college. create a class user with 2 properties, name & email. it is also has a method called viewData()
//    that allows user to view website data.
// ans:

// const data = "info"

// class User {
//     constructor(name, email){
//      this.name = name;
//      this.email = email;
//     }
//     viewData(){
//         console.log("some data =", data)
//     }
// }

// let student1 = new User("vivor", "vivor@gmail.com")
// let student2 = new User("raj", "raj@gmail.com")
// let teacher = new User("sir", "sir@gmail.com")


// 2) creating a new class called Admin which inherits from user. add a new method called editData to Admin that Allows it to edit websited data.
// ans:

// const data = "info"

// class User {
//     constructor(name, email){
//      this.name = name;
//      this.email = email;
//     }
//     viewData(){
//         console.log("some data =", data)
//     }
// }

// class Admin extends User {
//     constructor(name, email){
//       super(name, email)
//     }
//     editData() {
//         data = "some new value"
//     }
// }

// let student1 = new User("vivor", "vivor@gmail.com")
// let admn1 = new Admin("admin", "admin@gmail.com")


// # Error Handling.
// try-catch blocks

// try{
//     // normal code
// }catch(err){
//     // handling error
// }

// let a = 4;
// let b = 1;
// console.log(a)
// console.log(b)
// console.log(a+b)
// try{
//     console.log(b+c)
// }catch(err) {
//     console.log(err)
// }
// console.log(a+b)
// console.log(a+b)


// # Synchronous and Asynchronous .

//  Synchronous => means the code runs in a particular sequence of instructions given in the program. Each instrctions waits for a previous 
//                 instruction to complete its execution.
// console.log("one")
// console.log("two")
// console.log("three")


//  Asynchronous => Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which cause 
//                  a delay in the UI. Asynchronous code execution allows to execute next instructions immedaitely and doesn't block the flow. 
// console.log("one")
// console.log("two")
// setTimeout(() => {
//     console.log("hello")
// }, 4000);
// console.log("four")
// console.log("five")



// # Callbacks (A callback is a function passed as an argument to another function).

// function sum(a,b){
//     console.log(a+b)
// }

// function calculator(a,b,summCallback) {
//     summCallback(a, b)
// }

// calculator(1,2, sum)    => callbacks ko jb bhi pass krte h unhe without any parenthesis pass krna pdta h.
// NOTE: hum chahte toh pura arrow function hi bna kr pass kr skte h. dono tarike se kr skte h.
// calculator(1,2, (a,b) => {
//     console.log(a+b)
// })


// # And iss trah se hmare callbacks synchronous and settimeout ke andr asynchronous tarike se bhi kam krte h.
// const hello = () => {
//     console.log("hello")
// }
// setTimeout(hello, 3000)


// # Callback Hell. (Nested callbacks stacked below one another forming a pyramid structure.(Pyramid of Doom))
// This style of programing becomes difficult to understand and manage.

// function getData(dataId, getNextdata) {
//     // 2s
//     setTimeout(() => {
//         console.log("data", dataId)
//         if(getNextdata){
//             getNextdata();
//         }
//     }, 2000);
// }
// callback hell 
// getData(1, () => {
//     console.log("getting data2...")
//   getData(2, () => {
//     console.log("getting data3...")
//     getData(3, () => {
//         console.log("getting data4...")
//         getData(4)
//     })
//   })
// })


// Nesting (means ek chiz ke andr dusri chiz ko likhna).
// let age = 19;
// if(age>=18){
//     if(age>=60){
//         console.log("senior")
//     }else{
//         console.log("middle")
//     }
// } else {
//     console.log("child")
// }

// NOTE: Callback hello is a problem in javascript. jisko solve krne ke liye hmare paas ek concept ata h jisko khte h promises.


// # Promises. (Promise is for 'eventual completion of task. it is an object in js)
// it is a solution to callback hell.
// promises have 3 states => pending, resolved, rejected.
// let promise = new Promise((resolve, reject) => {...})  => function with two handlers.

// let promise = new Promise((resolve, reject) => {
//     console.log("i m promise")
//      resolve("success")
// })
// let promise = new Promise((resolve, reject) => {
//     console.log("i m promise")
//      reject("error occured")
// })

// * Promise hmari ek object hoti h javascript ke andr jiski teen states hoti h pending, resolved, rejected. or resolve and rejected hmare
//   handlers hote h or yeh handlers automatically javascript ke sath create hote h.
// NOTE: resolve and reject are callbacks provided by javascript.

// .then() & .catch()
// promise.then((res) => {...})
// promise.catch((err) => {...})

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise")
//         // resolve("success")
//         reject("error")
//     })
// }
// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fullfilled", res)
// })
// promise.catch((err) => {
//     console.log("promise rejected", err)
// })


// # Promise Chaining.

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1")
//             resolve("success")
//         }, 4000)
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2")
//             resolve("success")
//         }, 4000)
//     })
// }
// console.log("fetching data1...")
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res)
//     console.log("fetching data2...")
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res)
//     })
// })


// # Async-Await (async function always returns a promise and await pauses the execution of its surroundings async function until the promise is settled).

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           console.log("data", dataId)
//           resolve("success")
//         }, 3000)
//     })
// }

// async function getAllData() {
//     console.log("getting data1...")
//     await getData(1);
//     console.log("getting data2...")
//     await getData(2);
//     console.log("getting data3...")
//     await getData(3);
//     console.log("getting data4...")
//     await getData(4);
//     console.log("getting data5...")
//     await getData(5);
// }


// #  IIFE (Immediately Invoked Function Expression) (isme humme function ko call deni ni pdti)
//  IIFE is a function that is called immediately as soon as it is defined.
// Disadvantage of using IIFE is we can not use that function again. function is immediately invoked that's why. only one time usable.

// (function () {
// ....
// });

// (() => {
// ....
// })();

// (async () => {
// ....
// })();

// (async function () {
//     console.log("getting data1...")
//     await getData(1);
//     console.log("getting data2...")
//     await getData(2);
//     console.log("getting data3...")
//     await getData(3);
//     console.log("getting data4...")
//     await getData(4);
//     console.log("getting data5...")
//     await getData(5);
// })();



// # Fetch API (The Fetch API Provides an interface for fetching (sending/receiving) resources. its uses Request and Response objects)
// API (Application Programming Interface).
//  The Fetch() method is used to fetch a resource data.
// let promise = fetch(url, [options])

// let URL = "https://cat-fact.herokuapp.com/facts"
// let promise = fetch(URL)
// console.log(promise)

// # Understanding Terms.
// AJAX Is Asynchronous JS & XML.
// JSON is javascript Object Notation.
// json()method : returns a second promise that resolves with the result of parsing the response body text as JSON.(Input is JSON, output is JS Object).


// const factPara = document.querySelector("#para")
// const btn = document.querySelector("#btn")

// const getFacts = async() => {
//     console.log("fetching data...")
//     let response = await fetch(URL)
//     console.log(response)
//     // Data ko readable format me use krne ke liye hum .json() method ko call lagate h. 
//     let data = await response.json()
//     console.log(data[1].text)
//     factPara.innerText = data[1].text
// }
// btn.addEventListener("click", getFacts)


// # Request & Response.
// HTTP Verb
// Response status code 

// NOTE: HTTP response headers headers also conatain details the responses, such as content type, HTTP status code etc.
// NOTE: Headers means additional information. jo maybe response ke sath aari h or maybe request ke sath bhej rahe h.

// let arr = ["dog","cat","dog","cat","loin"]

// let uniqueArr = [...new Set(arr)]
// console.log(uniqueArr)