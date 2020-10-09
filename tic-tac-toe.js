"use strict";
document.addEventListener("DOMContentLoaded", function(){

function boxFunc(){
    let boxes=document.querySelectorAll('#board>div');
    boxes.forEach(element=>{
        element.classList.add('square');
    });
}

boxFunc();




})