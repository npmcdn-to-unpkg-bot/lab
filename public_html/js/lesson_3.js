/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * source of this tutorial: http://www.codethinked.com/preparing-yourself-for-modern-javascript-development
 */

/*****************IIFE*******************/
(function(window, $, undefined){
  //do some work
})(window, jQuery);


/***************Revealing module pattern*************************/
var myModule = (function($, undefined){
  var myVar1 = '',
  myVar2 = '';
 
  var someFunction = function(){
    return myVar1 + " " + myVar2;
  };
 
  return {
    getMyVar1: function() { return myVar1; }, //myVar1 public getter
    setMyVar1: function(val) { myVar1 = val; }, //myVar1 public setter
    someFunction: someFunction //some function made public
  };
})(jQuery);



/********************constructors**************************/
var Person = function(firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};
//The prototype of a function is an object 
//that all instances of a function will go 
//to when trying to resolve fields or 
//functions called on the instance.
Person.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
};


var person = new Person("Justin", "Etheredge");
console.log(person.fullName());


//creating another constructor that inherits Person
var Spy = function(firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};
Spy.prototype = new Person();
 
Spy.prototype.spy = function(){
  console.log(this.fullName() + " is spying.");   
};
 
var mySpy = new Spy("Mr.", "Spy", 50);
mySpy.spy();
