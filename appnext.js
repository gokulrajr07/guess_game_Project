var rn=Math.round(Math.random()*100);
var live=10;
function SUBMIT(){
    var input=document.getElementById("input").Value;
    live--;
    console.log(input,randomnum);
    if(input==randomnum)
    {
        location.href="./win.html";
    }
    else if(input>randomnum && live!=0)
    {
        document.getElementById("l3").innerHTML="Oops! your guess is too high!"
    }
    else if(input<randomnum && live!=0)
    {
        document.getElementById("l3").innerHTML=="Oops! your guess is too low!"
    }
    else if(live==0)
    {
        location.href="./loss.html";
    }
    document.getElementById("l2").innerHTML="Remaining Lives "+live;
}
function again(){
    location.href="./index.html";
}