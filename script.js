var timer;
function startTimer() {
    var minutes = 0;
    var seconds = 0;
  
    if(document.getElementById("minutes").value!=='') 
        minutes = parseInt(document.getElementById("minutes").value);
    if(document.getElementById("seconds").value!=='') 
        seconds = parseInt(document.getElementById("seconds").value);

    var countdown = document.getElementById("countdown");
    var soundtrack = document.getElementById("soundtrack");
  
    var totalSeconds = minutes * 60 + seconds;

    timer = setInterval(function() {
      var mins = Math.floor(totalSeconds / 60);
      var secs = totalSeconds % 60;

      countdown.innerHTML = mins + ":" + (secs < 10 ? "0" : "") + secs;

      if (totalSeconds <= 0) {
        clearInterval(timer);
        countdown.innerHTML = "<img id=\"cuckoo-image\" src=\"images/cuckoo1.png\" alt=\"Cuckoo\">";
        playSound(soundtrack.value);
      }
      totalSeconds--;
    }, 1000);
}
  
function playSound(soundFile) {
    var audio = new Audio("sounds/"+soundFile);
    audio.play();
}
  