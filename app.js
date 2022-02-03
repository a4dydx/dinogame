var player = document.getElementById("player");
var obs = document.getElementById("obs");
function jump(){
    if(player.classList != "animate"){
        player.classList.add("animate");
    }
    player.classList.add("animate");
    setTimeout(function(){
        player.classList.remove("animate");
    }, 500);
}
var ayd = setInterval(function(){
    var pTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    var oLeft = parseInt(window.getComputedStyle(obs).getPropertyValue("left"));
    if(oLeft<20 && oLeft>0 && pTop>=130){
        obs.style.animation = "none";
        obs.style.display = "none";
        alert("GAME OVER!");
    }
}, 10);