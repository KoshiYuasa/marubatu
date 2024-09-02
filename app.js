var circle=document.getElementById ("circle");
var upB=document.getElementById("upB");
var downB=document.getElementById("downB");

var rotateValue=circle.style.transform;

var rotateSume;

upB.onclick = function(){
    //clockwise90deg
    rotateSum=rotateValue+"rotate(-90deg)";
    circle.style.transform=rotateSum;
    rotateValue=rotateSum;

}

downB.onclick = function(){
    //otherclockwise90deg
    rotateSum=rotateValue+"rotate(90deg)";
    circle.style.transform=rotateSum;
    rotateValue=rotateSum;
    
}
