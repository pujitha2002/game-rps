var user_score=0;
var comp_score=0;
var user_score_span=document.getElementById("user-score");
var comp_score_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result>p");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const sissor_div=document.getElementById("sissor");
function win(u,c)
{
    user_score++;
    user_score_span.innerHTML=user_score;
    result_div.innerHTML=u+ " beat " +c + " you win! ";
    result_div.style.color="green";
    document.getElementById(u).style.color="green";
    
}
function loss(u,c)
{
    comp_score++;
    comp_score_span.innerHTML=comp_score;
    result_div.innerHTML=u+ " beat " +c + " computer win! ";
    result_div.style.color="red";
}
function draw(u,c)
{
    result_div.innerHTML=u+ " beat " +c + " draw ";
    document.getElementById(u).style.color="white";
    result_div.style.color="white";
}
function getcomputerchoice()
{
    const choices=['rock','paper','sissor'];
    const random=(Math.floor(Math.random()*3));
    return choices[random];
}
function Game(userChoice)
{
    const compchoise=getcomputerchoice();
    switch(userChoice+compchoise)
    {
        case "rocksissor":
        case "paperrock":
        case "sissorpaper":
            win(userChoice,compchoise);
            break;    
        case "rockpaper":
        case "papersissor":
        case "sissorrock":
            loss(userChoice,compchoise);
            break; 
        case "rockrock":
        case "paperpaper":
        case "sissorsissor":
            draw(userChoice,compchoise);
            break;         
    }
    
}
main();

function main()
{
    rock_div.addEventListener('click',function()
{
    Game("rock");
})
paper_div.addEventListener('click',function()
{
    Game("paper");
})
sissor_div.addEventListener('click',function()
{
    Game("sissor");
})

}