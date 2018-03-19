var body = document.querySelector("body")
function randomcolor(){
    var r = Math.floor(Math.random() *255);
    var g = Math.floor(Math.random() *255);
    var b = Math.floor(Math.random() *255);
    return "rgb("+r+", "+g+", "+b+")";
};
window.setInterval(function(){
    body.style.backgroundColor = randomcolor()
}, 1000);