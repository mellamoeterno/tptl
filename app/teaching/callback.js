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



/* 
And not only that, but the purpose of callback is so that you pass in a function to it, and call for it

 */

/* 
So you understand better lets see this:

For a fact theres something called callback hell, in it you have this code:

 */

function task1(callback) {
    timedFunctionality(() => {                  //for now just imagine that this timeFunctionality is something i created somewhere and by
        console.log("task 1 done")              //calling it, with whats inside it will display whats inside after a set of time **that },4000)** 
    },4000)                                     //dont worry about the syntax just focus on this logic
}

                                                //if you dont know what syntax is, is just the way code is formated and written like.
                                                //like the placement of things and organization.


                                                //with that code the callback works by receiving a whole function, but this function look like
                                                //this:

task1(() => {
    funcDoSomething()
})

                                                //you may see that this is calling for the task1 not the callback
                                                //so how is that callback receiveing if im not calling for it

                                                //what happens is that when we call a function in javascript and we do like:

task1()                                                

                                                //javascript will read that and if i put something inside () and at the same time
                                                //if i already had that callback passed when created the function 'task1 (callback)'
                                                //then javascript will assign to that callback wathever
                                                //i pass when calling for the function:

task1(() => {
    funcDoSomething()                           
})     



                                                //and another important thing to distinct and remember, is that that callback is named convetion!
                                                //meaning that it can be named anything

/* 
You may say also, so whats next about this so called callback hell? Well this video aint about it,
i just wanted to explain a little bit of what goes into the callback hell, which is intricate to 
callbacks itself. This bit of knowledge will still prove useful when you get to learn
about callback hell though.

 */