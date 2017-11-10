/* 
 * Spin the whole webpage!
 */
 
javascript:(function(){style=document.createElement("style");
style.innerHTML=".lol {transition: 120s linear;transform: rotate(21600deg);}";document.getElementsByTagName("head")[0].appendChild(style);var x=document.querySelectorAll("body");for (var i=0;i<x.length; i++){var a=x[i];a.classList.toggle("lol")}})();
