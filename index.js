var n1=Math.random();
var n2=n1*6;
var n3=Math.floor(n2+1);
var str1="dice"+n3+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",str1);
var n4=Math.random();
var n5=n4*6;
var n6=Math.floor(n5+1);
var str3="dice"+n6+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",str3);
if(n3>n6){

    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
if(n6>n3){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
if(n3===n6){
    document.querySelector("h1").innerHTML="🚩Draw🚩";
}
