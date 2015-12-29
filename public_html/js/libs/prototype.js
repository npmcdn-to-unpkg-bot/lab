/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
//    alert('ready');


/**********************this usefulness***************************/
//this usefulness

    function hello1(thing) {  
        console.log(this + " says hello " + thing);
      }

//hello1.call("Jonathan", "earth") ;
//hello("Jonathan", "earth");

/********************desugaring*******************************************/

function hello2(thing) {  
  console.log("Hello " + thing);
}

// this:
//hello("world");

// desugars to:
//hello.call(window, "world"); 

/******************Member functions*********************************************/
var person1 = {  
  name: "Brendan Eich",
  hello: function(thing) {
    console.log(this + " says hello " + thing);
  }
};
// this:
//person.hello("world");
//// desugars to this:
//person.hello.call(person.name, "world");  

/******************Dynamic attaching*******************************************/
function hello4(thing) {  
  console.log(this + " says hello " + thing);
}

person = { name: "Brendan Eich" } ; 
person.hello = hello4;

//person.hello("world"); // still desugars to person.hello.call(person, "world")
//hello("world"); // "[object DOMWindow]world"  

/*****************Persistent this trick***************************************************/

var person = {  
  name: "Brendan Eich",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
};

var boundHello = function(thing) { return person.hello.call(person, thing); };

//boundHello("world");  

/*******************Persistent this trick 2********************************************************/
var bind = function(func, thisValue) {  
  return function() {
    return func.apply(thisValue, arguments);
  };
};

//var boundHello = bind(person.hello, person);  
var boundHello = person.hello.bind(person);  
boundHello("world"); // "Brendan Eich says hello world"  


/***************************raw function as callback******************************************************/
var person = {  
  name: "Alex Russell",
  hello: function() { console.log(this.name + " says hello world"); }
};

$("#some-div").click(person.hello.bind(person));

// when the div is clicked, "Alex Russell says hello world" is printed
















});