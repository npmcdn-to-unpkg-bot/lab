/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//https://msdn.microsoft.com/en-us/magazine/ff852808.aspx
//Prototype objects in JavaScript give us inheritance, and they allow us to share method implementations, too. 
$(document).ready(function(){
    // this will return true:
    typeof (Array) === "function" ;

    // and so will this:
    Object.getPrototypeOf(Array) === Object.getPrototypeOf(function () { });

    // and this, too:
    Array.prototype !== null;
    
    
    
    // this returns true
    //Do not confuse this prototype property with the __proto__ property  – 
    //they do not serve the same purpose or point to the same object.
    Object.getPrototypeOf(Array) !== Array.prototype;


    /***we want to create a new object and make the new object behave like an array***/
    // create a new, empty object
var o = {};

// inherit from the same prototype as an array object
o.__proto__ = Array.prototype;

// now we can invoke any of the array methods ...
o.push(3);

var o = new Array();
o.push(3);

/**********Constuctor Function*********************/
var Point = function (x, y) { 
    
    this.x = x;
    this.y = y;
    this.add = function (otherPoint) {
        this.x += otherPoint.x;
        this.y += otherPoint.y;
    };
};

var p1 = new Point(3, 4);
var p2 = new Point(8, 6);
p1.add(p2);




});
