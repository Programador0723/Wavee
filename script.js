window.onscroll=function(){
scroll=document.documentElement.scrollTop;
header=document.getElementById("header");
if(scroll>20){
    header.classList.add('nav_mood');
}else if(scroll<20){
    header.classList.remove('nav_mood');
}


}
document.getElementById("btn_click").addEventListener("click", hidden_navvar);
var nav=document.getElementById("nav");

function hidden_navvar(){
    nav.classList.toggle('nav_apr');
}