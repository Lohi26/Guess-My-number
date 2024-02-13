'use strict';
let random=Math.trunc(Math.random()*20)+1;
console.log(random);
let count=20;
let hs=0;
document.querySelector(".check").addEventListener("click",function(){
    let user=document.querySelector(".guess").value;
    if(!user)
    {
        document.querySelector(".message").textContent="🤷‍♀️ No Number is Entered!";
    }
    else if(user<random)
    {
        if(count>1)
        {
            document.querySelector(".message").textContent="📉 Too Low!";
            count--;
            document.querySelector(".score").textContent=count;
        }
        else
        {
            document.querySelector(".message").textContent="💥 You Lost the Game";
            document.querySelector(".score").textContent=0;
        }
    }
    else if(user>random)
    {
        if(count>1)
        {
            document.querySelector(".message").textContent="📈 Too High!";
            count--;
            document.querySelector(".score").textContent=count;
        }
        else
        {
            document.querySelector(".message").textContent="💥 You Lost the Game";
            document.querySelector(".score").textContent=0;
        }
    }
    else if(user==random)
    {
        document.querySelector(".message").textContent="🥳 Hurray! Correct Number!";
        document.querySelector(".highscore").textContent=count;
        document.querySelector(".number").textContent=user;
        document.querySelector("body").style.backgroundColor="green";
        if(count>hs)
        {
            hs=count;
        }
        document.querySelector(".highscore").textContent=hs;
    }
    console.log(hs);
});
document.querySelector(".again").addEventListener("click",function(){
    count=20;
    random=Math.trunc(Math.random()*20)+1;
    document.querySelector(".message").textContent="Start guessing...";
    document.querySelector(".number").textContent="?";
    document.querySelector(".score").textContent=count;
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".guess").value="";
});