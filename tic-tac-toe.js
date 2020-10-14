"use strict";

document.addEventListener("DOMContentLoaded", function(){ //to load js after html

  function boxFunc(){//EX 1: to add squares to game board
      let boxes=document.querySelectorAll('#board>div');
      boxes.forEach(element=>{
          element.classList.add('square');
      
      });
      let winVar=document.querySelectorAll('.square');
      let i=0;
      winVar.forEach(elem=>{
        elem.classList.add(''+i++);
      })
  }

  boxFunc();

  //EX 2 & 6: display X or O !!STYLE NOT WORKING!!
  
let player=0;
let current=null;
let loadAll=['','','','','','','','',''];

function play(){
  let clicked=document.querySelectorAll('.square');
    clicked.forEach(function(element){
        element.addEventListener('click', function(elem) {
            
            if (player==0){
              elem.target.innerHTML='X';
              elem.target.classList.add('square.X');
             
            
              player++;
              current="X";

          
              
    
              if (checkwin()=='X'){
               document.querySelector('#status').textContent='Congratulation! X is the Winner!';
               document.querySelector('#status').classList.add('status.you-won');
               

              }
              
            }
            

          else{elem.target.innerHTML="O";
            elem.target.classList.add('square.O');
            player--;
            current="O";
           if (checkwin()=='O'){
              document.getElementById('status').classList.replace('status.you-won','status');
              document.getElementById('status.you-won').textContent="'Congratulation! O is the Winner!'";

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


  function checkwin(){
    const winCombo=[[0,1,2], [3,4,5], [6,7,8], [0,3,6],
     [1,4,7], [2,5,8], [2,4,6], [0,4,8]];

     for (var i=0; i<winCombo.length;i++){
       let _1fst=winCombo[i][0];
       let _2nd=winCombo[i][1];
       let _3rd=winCombo[i][2];
       //console.log(_1fst);
       let cell_1=returnDS(_1fst);
       let cell_2= returnDS(_2nd);
       let cell_3=returnDS(_3rd);

       //console.log(cell_1);
      if (cell_1.innerText=='X' && cell_2.innerText=='X' && cell_3.innerText=='X'){
        
        return 'X';
     }

     else  if (cell_1.innerText=='O' && cell_2.innerText=='O' && cell_3.innerText=='O'){
      
      return 'O';
   }
   

  }
}



function returnDS(num){
  let cell=document.getElementsByClassName(''+num);
  return cell;
}



 

  //EX 5: restart game
  function restartG() {
    let rebutton =document.querySelector('.btn');
    rebutton.addEventListener('click', function(e) {
      /*let  reSquares = document.querySelectorAll('.square');
        reSquares.forEach(function(e){
          
          e.classList.remove('square.X');
          e.classList.remove('square.O');
          e.classList.remove('hover.O');
          e.innerText=null;
          //check
          document.getElementById('status').classList.remove('status.you-won');

        });*/
        location.reload();
    });}
  restartG();



});