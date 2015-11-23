/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
//    alert("ready!");
    
    $(".small").click(function(){
        showPopup();
//        alert("clicked!");
//        $(this).height("200px");
//        $(this).width("200px");
    });
    $(".text").hover(function(){
//        alert("hovered!");
//        $(this).css("color","#fff");
    });
    
    $(".close").click(function(){
        closePopup();
    });
    
    function closePopup(){
        TweenLite.to(".popup", 1, { rotation: 360,scale:0, onComplete:close});
        
//        $('html:not(".popup")').css("background","none");
    }
    function close(){
        $(".pop-container").hide();
        $(".popup").hide();
    }
    function showPopup(){
        $(".pop-container").show();
        $(".popup").show();
         TweenLite.to(".popup", 1, { rotation: 2*360,scale:1, onComplete:show});
    }
    
    function show(){
        $(".pop-container").show();
        $(".popup").show();
        TweenLite.to(".popup", 1, { top:"20px", ease: Bounce.easeOut});
    }
    
});
