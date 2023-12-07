function rotateFunction(){
    var min=1000;
    var max=9999;
    var deg = Math.floor(Math.random()*(max-min)+min);
    document.getElementById("box").style.transform = "rotate("+deg+"deg)";
}
var element=getElementById("mainbox");
element.classList.remove('animate');
setTimeout(function(){
    element.classList.add('animate');
}, 5000);