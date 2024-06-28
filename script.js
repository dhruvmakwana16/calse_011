var screen=document.getElementById('screen');
var btn=document.getElementsByClassName('btn');
for (item of btn){
    item.addEventListener('click',function(e)
    {
       btntext=e.target.innerHTML;
       screen.value += btntext;
    }); 
}
function sin(){
    screen.value=Math.sin(screen.value)
}
function cos(){
    screen.value=Math.cos(screen.value)
}
function tan(){
    screen.value=Math.tan(screen.value)
}
function pi(){
    screen.value=3.14;
}
function e(){
    screen.value=2.71;
}
function fact(){
    var i,num,f;
    f=1; 
    num=screen.value;
    for(i=1;i<screen.value;i++){
        f=f*num;
        num--;
    }
    screen.value=f;
}
function backspace(){
    screen.value=screen.value.substr(0,screen.value.length-1)
}
function radian(){
    var radian=screen.value;
    var answer=(radian*180)/3.14;
    screen.value=answer;
}
function degree(){
    var degree=screen.value;
    var answer=(degree*180)/3.14;
    screen.value=answer;
}