let score;


function main(){
document.getElementById('homeTab').style.display = 'none';
let hi =  document.getElementById('barrier');
hi.setAttribute('class', 'obstacle');


var score = setInterval(function(){
	let score = document.getElementById('score').value;
	let updatedScore = +score + (10*0.1);
	document.getElementById('score').value = Math.floor(updatedScore);
}, 200);


// ============Mobile Device cotrol============

let type = document.getElementById('control').classList;
function jump(){
	if(type == 'run'){
	document.getElementById('control').classList.remove('run');
	document.getElementById('control').classList.add('jump');
	let myVar = setTimeout(jumpOnce, 600);
};
}

function jumpOnce(){
	document.getElementById('control').classList.remove('jump');
	document.getElementById('control').classList.add('run');
}


function dodge(){
	if (type == 'run') {
	document.getElementById('control').classList.remove('run');
	document.getElementById('control').classList.add('dodge');
	let myVar = setTimeout(dodgeOnce, 600);
};
}

function dodgeOnce(){
	document.getElementById('control').classList.remove('dodge');
	document.getElementById('control').classList.add('run');
}




// ============== PC control===========
document.onkeydown = checkKey;

function checkKey(e){
	e=e || window.event;

	if(e.keyCode == '38'){
		jump();
	}
	else if (e.keyCode == '40') {
		dodge();
	};
}




// ============Obstacle==========

let images = ['jump1.png', 'jump2.png', 'jump3.png', 'jump4.png'];
interval();
function interval(){
	let randTime =  Math.floor(Math.random() * 2100 + 1000);
let interval =  setInterval(showObstacle, 2100);
}
function showObstacle(){
	let obstDiv = document.querySelector('.obstacle');

	let randNum =  Math.floor(Math.random()*4);
	obstDiv.style.backgroundImage=`url('obstacle/` + images[randNum] + `')`;
	obstDiv.style.animation = 'obstacle 2.1s linear infinite';
}

var checkDead = setInterval(function(){
	let character = document.getElementById('control');
	let obstacle = document.querySelector('.obstacle');
	var characterTop = 
	parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));

	var obstacleLeft = 
	parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

// console.log(obstacleLeft);

if(obstacleLeft < 180 && obstacleLeft > 0 && characterTop <= 80){
score = document.querySelector('#score').value;
document.querySelector('#resultScore').value = score;


const lsScore = localStorage.getItem('highscore');
if (lsScore < score) {
localStorage.setItem('highscore', score);
document.querySelector('.Celebration').style.display = 'block';
};

document.querySelector('#highscore').textContent = localStorage.getItem('highscore');

document.getElementById('resultTab').style.display = 'block';
	obstacle.style.display = 'none';
	character.style.animation = 'none';
	document.querySelector('#road').classList.add('pathModify');
}

}, 1);
}




function refreshPage(){
    window.location.reload();
document.querySelector('.Celebration').style.display = 'none';

} 


//high score


	

