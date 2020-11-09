
   const eyes = document.querySelectorAll('.eye');
   const mask = document.querySelector('.mask');
   const torso = document.querySelector('.torso');
   const robot = document.querySelector('.robot');
   const head = document.querySelector('.head')

   
//    const input_box = document.querySelector('.input-box');
   let position = 0;
   let position1 = 0;
   let position2 = 0;
  
   function changeEyes(){
       eyes.forEach(eye => eye.classList.toggle('blue-eye')); 
       
    }


    function changeColor2(){
        torso.classList.toggle('white-color') && head.classList.toggle('white-color')
    }


    function changeColor(){
        torso.classList.toggle('black-color') && head.classList.toggle('black-color')
    }

    
    function changeColor3(){
        torso.classList.toggle('pink-color') && head.classList.toggle('pink-color')
    }

    
    mask.addEventListener('click', changeEyes);
    
    function moveRobot(){
        position -= 0;
        robot.style.left = position + 'px'
    }

    function moveRobotRL(){
        position1 += 40;
        robot.style.left = position1 + '%'
    }


    function repeatMoving(){
        position2 += 70;
        robot.style.left = position2 + '%'

    }



   

    
    function myFunction(value){
        
        if(value == "robot.move.left"){
            moveRobot();
        } else if (value == "robot.move.right"){
            moveRobotRL();
        }  else if (value == "robot.move.right = 1"){
            repeatMoving();
        } else if(value == "color.black"){
            changeColor();
        } else if(value == "color.white"){
            changeColor2();
        }else if(value == "color.pink"){
            changeColor3();
        } 
    }