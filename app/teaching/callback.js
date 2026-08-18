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


/* 

Going back as i was explaining, i said callback is named convetion, and it can be named anything.

This is true except with some few things that javascript will automatically read as something else!
not as an named callback like:

 */


function myArray(index) {
    console.log(index)
}





/* 
In  this case this index is not so important to understand now, but its an example of something
that you cant name and use as a callback, as javascript wont read that like a callback

Like index theres many more like:

 */


function handleClick(event) {
    console.log(event.target);
}



/* 
This one is the event object that is passed by the browser when an event handler is triggered, 
with it you can do a bunch of stuff. But im not talking about it in this video.

I just need you to keep in mind that theres plenty of between quotes "pre named parameters" that
javascript will just not read like a named convetion callback


Another important thing is that if youre going to create something that need a callback,
dont name it something else rather than callback, if the logic related to what you'll be doing
is the logic of a callback, just say callback
 */






//One other thing, a callback is defined when you pass a function as an argument, is it really just that?

//here below we have a normal usage of callback

function greetUser(callback) {
    callback(); 
}

//in which it differs a bit in contrast to the earlier explanation about callback i gave, so for
//better understanding
//
//let us say that while that bit of callback introduction i gave, we were calling the function
//and passing a whole other function to the callback itself
//
//in this code above we have the callback in which is being called INSIDE its declared function context

//and what is even the point of that?

//well the truth is that code is incomplete




function greetUser(name, callback) {                    //in here we have the complete code. 
  console.log("Hello, " + name);                        //that back there was so you just put your attention to the right things.
  callback();                                           //In this complete version the callback its being used to "delay" 
}                                                       //when greetUser function is called. Callback here Invokes the callback after greeting
                                                        
                                                        //just look at the placing where the callback(); is at, its after console.log right?
/* function sayGoodbye() {                                 
    console.log("arrivederci")
} */


greetUser("Alice", sayGoodbye);                         //So with all this you maybe see something wrong, what about that sayGoodBye call?
                                                        //**uncomment saygoodbye** Well its right here, and as we already have seen
                                                        //like in that callback hell example, this is doing the same thing
                                                        
                                                        //and you may say, but now its 2 things inside the parameter instead of one! 
                                                        //and yes thats true, when this happens javascript will read this and just
                                                        //pass in left to right sequence to whats inside the parameter! so "alice" go to
                                                        //name, and saygoodbye function, go to callback

                                                        //and heres were things should click, that callback is simply the argument 
                                                        //that tells javascript to be executed later!

                                                        //as you can see, because were passing sayGoodBye to callback after "Alice", its only logical
                                                        //that were gonna get first the "Alice" passed to name, and only then
                                                        //were gonna get the sayGoodbye passed to callback. RIGHT? well not really, that 
                                                        //yet doesnt set up the delay.

                                                        //The assignment greetUser("Alice", sayGoodbye); does not create the delay — 
                                                        //it just sets up the tools. IT DO LOOK A LOT LIKE IT DOES! but it really doesnt

                                                        //The real delay comes from the order of lines inside greetUser — 
                                                        //specifically, that callback(); is placed after console.log.

                                                        //This is just the way javascript deals with this, and you must recognize this
                                                        //if you want to be a better javascript developer.



                                                        //Also one other detail about that callback();
                                                        //if we dont invoke it in there, the sayGoodbye function will just be stuck inside 
                                                        //the callback parameter without being called


function greetUser(name, callback) {                    
  console.log("Hello, " + name);        
  //should invoke callback(); if we want sayGoodbye to work and the delay to work as well.                                                         
}