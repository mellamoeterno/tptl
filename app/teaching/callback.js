/* 

First of all things, you dont need to read what ive written here, this is just so i can keep very good track of what i need to say, otherwise
i wont be able to teach all of what i want. Or just do wathever, thats on you.


i want to talk about one of the most important basic React/javascript things but with also some different syntax ways to use callback
so you can get ahead on understanding more of callback


******
Before all these are things im assuming you already know:


about arrow functions overall () => {} 
    
if statements

functions

variables/objects/let/const & Invoking them/adding properties 

How objects in javascript work

the basics of how props work

    
console.log

+ operator

    
    
unfortunately, it would be a bit too much information and it would get confusing, 
so you may want to learn about these pre hand, or this lesson will be 
not so fruitfull.
******

*/

/* 

You may have learned about callback, or will most likely learn callback with these syntaxes: 

 */

/* function placeOrder(pizzaName){
    if (!pizzaName) {
        console.error(`${pizzaName} does not exist in The menu`)
    }
} */


/* function nameReceive(name) {
    console.log(name)
} */


/* function dataProduct(productName) {
    console.log(productName)
} */



/* 
But what any of this actually means? I DONT KNOW ABOUT CALLBACK, thats why im here, you may say

 */


/* 
Normally people will say to you callback is:

A function that is passed as an argument to another function


But at first you may think how is it a function?

well this is because whats inside of the () parameter, can be called anything like:
 */


function myData(anything) {
    console.log(anything)
}
