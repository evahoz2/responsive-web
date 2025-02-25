window.onresize=respond;
window.onload=respond;
function respond(){
    var w=window.innerWidth
    document.getElementById("width").innerHTML=w +"px"
}