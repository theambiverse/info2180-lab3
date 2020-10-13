"use strict";

document.addEventListener("DOMContentLoaded", function(){ //to load js after html

  function boxFunc(){//EX 1: to add squares to game board
      let boxes=document.querySelectorAll('#board>div');
      boxes.forEach(element=>{
          element.classList.add('square');
      });
  }

  boxFunc();

  //EX 2 & 6: display X or O !!STYLE NOT WORKING!!
  
let player=0;
let current=null;

function play(){
  let clicked=document.querySelectorAll('.square');
    clicked.forEach(function(element){
        element.addEventListener('click', function(elem) {
            
            if (player==0 || player%2==0){
              //elem.target.classList.add('square.X');
              //elem.preventDefault();
              elem.target.innerHTML='X';
              elem.target.classList.add('square.X');
              
            
              player++;
              current="X";
              if (checkwin(element)=='X'){
               document.querySelector('#status').textContent='Congratulation! X is the Winner!';
               document.querySelector('#status').classList.add('status.you-won');
               

              }
              else if (checkwin(element)=='D'){
                //ends game
              } 
            }
            

          else{elem.target.innerHTML="O";
            elem.target.classList.add('square.O');
            player++;
            current="O";
            if (checkwin(element)=='O'){
              //document.getElementById('status').classList.replace('status.you-won','status');
              //document.getElementById('status.you-won').innerHTML="COngratgs";

              }
              else if (checkwin(element)=='D'){
                //ends game
              } 
          }
        
        }, {once: true});

    });
}

play();

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
  //Winner matrics: D=Draw, X=X wins, O=O wins

  function checkwin(element){
    return 'X';
  }



  //let winner='A';
  /*const winCombo=[[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [2,4,6], [0,4,8]];
  let loadAll=['','','','','','','','',''];
  let loadAll= document.querySelectorAll('#board div');
  let win=[];
  
  function winner(curent){
    if()

  }
 fullGame();
  function Winner(){
    if (fullGame()==true){

    }
  }
  
  //if */


 

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
          //check
          document.getElementById('status').classList.remove('status.you-won');

        });
    });}
  restartG();



})