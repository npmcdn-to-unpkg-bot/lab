/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    
    /**********************The Global Namespace*******************************/
    function globalFunction() {
     console.log('I am the original global function');
   }

   function overWriteTheGlobal() {
     globalFunction = function() {
       console.log('I am the new global function');
     };
   }
//   globalFunction(); //outputs "I am the original global function"
//   overWriteTheGlobal(); //this will overwrite the original global function
//   globalFunction(); //outputs "I am the new global function" 
    
   /**********************The Global Namespace*******************************/

    var module = {};

    (function(exports){

      exports.notGlobalFunction = function() {
        console.log('I am not global');
      };
    }(module));


    function notGlobalFunction() {
      console.log('I am global');
    }

//    notGlobalFunction(); //outputs "I am global"
//    module.notGlobalFunction(); //outputs "I am not global"


    /*********************variable hoisting*************************/
    var imAGlobal = true;

    function globalGrabber() {
      var imAGlobal = false;
      return imAGlobal;
    }


//    console.log(imAGlobal); //outputs "true"
//    console.log(globalGrabber()); //outputs "false"
//    console.log(imAGlobal); //outputs "true"

    try {
      myFunction();
    } catch (e) {
//      console.log(e); //throws "Uncaught TypeError: undefined is not a function"
    }
    var myFunction = function() {
      console.log('i exist');
    };

//    myFunction();  //outputs "i exist"



    /******************understanding this*******************************************/
//    console.log(this); // outputs window object

    var myFunction = function() {
      console.log(this);
    };

//    myFunction(); //outputs window object

    var newObject = {
      myFunction: myFunction
    };

//    newObject.myFunction(); //outputs newObject


var myFunction = function(arg1, arg2) {
  console.log(this, arg1, arg2);
};

    var newObject = {};

//    myFunction.call(newObject, 'foo', 'bar'); //outputs newObject "foo" "bar"
//    myFunction.apply(newObject, ['foo', 'bar']); //outputs newObject "foo" "bar"

/****************Asynchronous***************************/
var remoteValue = false;

    var doSomethingWithRemoteValue = function() {
      console.log(remoteValue); //outputs true on success
    };
    $.ajax({
      url: 'https://google.com',
      complete: function() {
        remoteValue = true;
//        doSomethingWithRemoteValue();
      }
    });
//    console.log(remoteValue);

//promises (also called deferred objects)

var remoteValue = false;

var doSomethingWithRemoteValue = function() {
  console.log(remoteValue);
};

var promise = $.ajax({
  url: 'https://google.com'
});


//outputs "true"
promise.always(function() {
  remoteValue = true;
//  doSomethingWithRemoteValue();
});

//outputs "foobar"
promise.always(function() {
  remoteValue = 'foobar';
//  doSomethingWithRemoteValue();
});


/*****************************Inheritance****************************************/
var obj = {};

obj.newFunction = function() {
  console.log('I am a dynamic function');
};

//obj.newFunction();

var obj = {
  a: 'i am a lonely property'
};

var newObj = {
  b: function() {
    return 'i am a lonely function';
  }
};

 
var finalObj = $.extend({}, obj, newObj);

console.log(finalObj.a); //outputs "i am a lonely property"
console.log(finalObj.b()); //outputs "i am a lonely function"

});
