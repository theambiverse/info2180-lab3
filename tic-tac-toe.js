"use strict";
document.addEventListener("DOMContentLoaded", function(){ //to load js after html

  function boxFunc(){//EX 1: to add squares to game board
      let boxes=document.querySelectorAll('#board>div');
      boxes.forEach(element=>{
          element.classList.add('square');
      });
  }

  boxFunc();

  //EX 2: display X or O !!STYLE NOT WORKING!!
  
let player=0;


    let clicked=document.querySelectorAll('.square');
    clicked.forEach(function(elem){
        elem.addEventListener('click', function(elem) {
          stopchange=document.elem.target.textContent;
         // if ((stopchange.textContent==null) ||(stopchange.textContent==undefined))*/{
            if (player==0 || player%2==0){
              //elem.target.classList.add('square.X');
              elem.target.textContent='X';
              player++;
            
            }
            else{elem.target.innerHTML="O";
            //elem.target.classList.add('square.O');
            player++;}
        //}
          });

    });
  

  //EX 3: to change square style with hover
  let hoverboxes = document.querySelectorAll('.square');

  hoverboxes.forEach(function(elem) {
    elem.addEventListener('mouseover', function(e) {
      e.target.classList.add('hover');
    });

    elem.addEventListener('mouseout', function(e) {
      //e.target.className+='hover.O';
      e.target.classList.remove('hover');
      //e.target.classList.add('hover.O');
    });
  });







  //EX 4: check for winner



  //EX 5: restart game
  function restartG() {
    let rebutton =document.querySelector('.btn');
    rebutton.addEventListener('click', function(e) {
      let  reSquares = document.querySelectorAll('.square');
        reSquares.forEach(function(e){
          e.classList.remove('square.X');
          e.classList.remove('square.O');
          e.classList.remove('hover.O');
          e.innerHTML=null;

          //CHANGE STATUS BUTTON TOO
        });
    });}
  restartG();


  

  


  //EX 6: Disallow cheating

 /* function noTakeBacks() {
    let rebutton =document.querySelector('.btn');
    rebutton.addEventListener('click', function(e) {
      let  reSquares = document.querySelectorAll('.square');
        reSquares.forEach(function(e){
          if (e.textContent!=null || e.textContent!=undefined){
            e.classList.remove('square.X');
            e.classList.remove('square.O');
            e.classList.remove('hover.O');
            e.innerHTML=null;
            }
          //CHANGE STATUS BUTTON TOO
        });
    });}
  noTakeBacks();*/



})