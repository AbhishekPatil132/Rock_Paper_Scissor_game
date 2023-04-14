
let choices = ['rock', 'paper', 'scissor'];
let my_count = 0; 
let comp_count= 0;

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
        my_count+=1;
        document.getElementById('my-count').innerHTML=my_count;
        document.getElementById('Text').innerText = "Congratulations !! You won ";
    }

    else if( result == 'Lost'){
        comp_count+=1;
        document.getElementById('comp-count').innerHTML=comp_count;
        document.getElementById('Text').innerText = "Oops !! You lost";
    }

    else{
        document.getElementById('Text').innerText = "Match draw !!";
    }

    //  winner-text
if(my_count > comp_count){
    document.getElementById('winning-me').innerHTML="In winning zone";
    document.getElementById('winning-comp').innerHTML  = "";
}

else if(my_count < comp_count){
    document.getElementById('winning-comp').innerHTML="In winning zone";
    document.getElementById('winning-me').innerHTML  = "";
}

else if(my_count==comp_count && my_count>0 && comp_count>0){
    document.getElementById('winning-me').innerHTML="In winning zone";
    document.getElementById('winning-comp').innerHTML="In winning zone";
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
        my_count+=1;
        document.getElementById('my-count').innerHTML=my_count;
        document.getElementById('Text').innerHTML = "Congratulations !! You won ";
    }

    else if( result == 'Lost'){
        comp_count+=1;
        document.getElementById('comp-count').innerHTML=comp_count;
        document.getElementById('Text').innerText = "Oops !! You lost ";
    }

    else{
        document.getElementById('Text').innerText = "Match drawn !!  ";
    }

    //  winner-text
if(my_count > comp_count){
    document.getElementById('winning-me').innerHTML="In winning zone";
    document.getElementById('winning-comp').innerHTML = "";
}

else if(my_count < comp_count){
    document.getElementById('winning-comp').innerHTML="In winning zone";
    document.getElementById('winning-me').innerHTML  = "";
}

else if(my_count==comp_count && my_count>0 && comp_count>0){
    document.getElementById('winning-me').innerHTML="In winning zone";
    document.getElementById('winning-comp').innerHTML="In winning zone";
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
        my_count+=1;
        document.getElementById('my-count').innerHTML=my_count;
        document.getElementById('Text').innerText = " Congratulations!! You won ";
    }

    else if( result == 'Lost'){
        comp_count+=1;
        document.getElementById('comp-count').innerHTML=comp_count;
        document.getElementById('Text').innerText = "Oops !! You lost ";
     
    }

    else{
        document.getElementById('Text').innerText = "Match draw !!";
    }

    //  winner-text
if(my_count > comp_count){
    document.getElementById('winning-me').innerHTML="In winning zone";
    document.getElementById('winning-comp').innerHTML  = "";
}

else if(my_count < comp_count){
    document.getElementById('winning-comp').innerHTML="In winning zone";
    document.getElementById('winning-me').innerHTML = "";
}

else if(my_count==comp_count && my_count>0 && comp_count>0){
    document.getElementById('winning-me').innerHTML="In winning zone";
    document.getElementById('winning-comp').innerHTML="In winning zone";
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

