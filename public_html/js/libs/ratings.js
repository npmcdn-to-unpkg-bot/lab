/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var html_Score = 7;
var javascriptScore = 8;
var cppScore = 4;
var wordpressScore = 6;
var pythonScore = 6;
var phpScore = 5;
var javaScore = 8;
var pshellScore = 5;
$(document).ready(function(){
    console.log("adding rating");
    var blankRect = " <svg width='10px' height='10px' viewBox='0 0 400 400'>"
    +" <rect x='1' y='1' width='398' height='398'" +" style='fill:rgb(0,0,0);stroke-width:3;stroke:rgb(251,236,93)' />"+
                   "</svg>";
    var fullRect = " <svg width='10px' height='10px' viewBox='0 0 400 400'>"
    +" <rect x='1' y='1' width='398' height='398'" +" style='fill:#FBEC5D;stroke-width:3;stroke:#FBEC5D' />"+
                   "</svg>";
    for(var i=0; i<10;i++){
//        $(".html5").append(blankRect);
        $(".tg td:nth-child(2)").append(blankRect);
    }
    
     //Now lets select the first box
   var box = $('#container div').first();
   
    setTimeout(function(){
        console.log("chaning stuff");
        giveRating(html_Score-1,".html5"); 
        giveRating(cppScore-1,".cpp"); 
        giveRating(javascriptScore-1,".javascript");
        giveRating( wordpressScore-1,".wordpress"); 
        giveRating(phpScore-1,".php"); 
        giveRating(wordpressScore-1,".wordpress"); 
        giveRating(pythonScore-1,".python"); 
        giveRating(pshellScore-1,".powershell"); 
        giveRating(javaScore-1,".java"); 
    },500);
    
    
     $(".logo").hover(function(){
        
        var proportion = 65/21;
//        if length is 10 1width is 120
//        
//        
//        var afterleft = $(".");

        

        var bubble =  $(".bubble");
        var bubblewidth = ((bubble.text().length)*120)/10; 
        
//        if(bubble.text().length == 10){
//            bubblewidth = 120;
//        }
//        else if (bubble.text().length == 3){
//            bubblewidth = 60;
//        }
        var after = $(".bubble:after");
        
        var afterleft = bubble.width() / proportion;
        var bubbletop = ($(this).offset().top)-30 ;
        var bubbleleft = 70;
        
        console.log("hovered");
        console.log("Offset position: " + $(this).offset().top);
        
//        bubble.css("width", bubblewidth + "px");
        bubble.css("top", bubbletop + "px");
        bubble.css("left", bubbleleft + "px");
//        bubble.css("width", bubblewidth + "px");
        after.css("left", afterleft+"px");
        bubble.text($(this).attr("headers"));
        console.log("afterlife: "+afterleft);
        console.log("Inner width: " + bubble.text().length);
        setTimeout(function(){
            bubble.show("slow");
        }, 100);
//        bubble.animate({display: "block"},1000);
        
        
    }, function(){
        $(".bubble").hide();
    });
    
    
    
});

function giveRating(score,language){
    var box = $( language+" svg").children();
    box.each(function(index){
        console.log("going in");
        var timeout = setTimeout(function(){
            box.eq(index).css("fill","#FBEC5D");
              
            /*return*/
        },150*(index+1)); //multiplied it here
       if(index == (score)){
           return false; 
       }
    });
    
    

}
    

