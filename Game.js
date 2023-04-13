
let choices = ['rock', 'paper', 'scissor'];

function fun_rock() {
    const num = Math.floor(Math.random() * 3);
    let compChoice = choices[num];

    if(compChoice =='rock'){
        document.getElementById('comp-img').src="rock.png";
    }
    else if(compChoice =='paper'){
        document.getElementById('comp-img').src="paper.png";
    }
    else{
        document.getElementById('comp-img').src="scissors.png";
    }
    let myChoice = choices[0];
    document.getElementById('me-img').src="rock.png";

    let result = Result(compChoice , myChoice);
    if( result == 'Win'){
        document.getElementById('Text').innerText = "Congratulations !! You won ";
    }

    else if( result == 'Lost'){
        document.getElementById('Text').innerText = "Oops !! You lost";
    }

    else{
        document.getElementById('Text').innerText = "Match draw !!";
    }


}

function fun_paper() {
    const num = Math.floor(Math.random() * 3);
    let compChoice = choices[num];

    if(compChoice =='rock'){
        document.getElementById('comp-img').src="rock.png";
    }
    else if(compChoice =='paper'){
        document.getElementById('comp-img').src="paper.png";
    }
    else{
        document.getElementById('comp-img').src="scissors.png";
    }

    let myChoice = choices[1];
    document.getElementById('me-img').src="paper.png";

    let result = Result(compChoice , myChoice);
    if( result == 'Win'){
        document.getElementById('Text').innerHTML = "Congratulations !! You won ";
    }

    else if( result == 'Lost'){
        document.getElementById('Text').innerText = "Oops !! You lost ";
    }

    else{
        document.getElementById('Text').innerText = "Match drawn !!  ";
    }
}

function fun_scissor() {
    const num = Math.floor(Math.random() * 3);
    let compChoice = choices[num];

    if(compChoice =='rock'){
        document.getElementById('comp-img').src="rock.png";
    }
    else if(compChoice =='paper'){
        document.getElementById('comp-img').src="paper.png";
    }
    else{
        document.getElementById('comp-img').src="scissors.png";
    }

    let myChoice = choices[2];
    document.getElementById('me-img').src="scissors.png";

    let result = Result(compChoice , myChoice);
    if( result == 'Win'){
        document.getElementById('Text').innerText = " !! You won ";
    }

    else if( result == 'Lost'){
        document.getElementById('Text').innerText = "Oops !! You lost ";
     
    }

    else{
        document.getElementById('Text').innerText = "Match draw !!";
    }
}


function Result(compChoice, myChoice){
    if (compChoice == myChoice)
    {
        return 'Draw';
    }

    else if((compChoice == 'rock' && myChoice == 'scissor') || (compChoice == 'paper' && myChoice == 'rock') || (compChoice == 'scissor' && myChoice == 'paper'))
    {
        return 'Lost';
    }

    else{
        return 'Win';
    }
}

let string1 = 'Rock';
let string2 = 'Paper';
let string3 = 'Scissor';

let typed = new Typed('.Text', {
    strings: [ string1, string2, string3],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

