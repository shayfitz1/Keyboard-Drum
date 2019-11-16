//another way to get the audio to play
// $("body").on("keypress", function(e){
//     if (e.which === 97){
//         let audio = new Audio('snare.wav');
//         audio.play();
//     }
// });

const body = document.querySelector("body");

body.addEventListener("keypress", function(e){
    //is there an audio element that has a matching data-key?
    const audioPlay = document.querySelector(`audio[id = "${e.which}"]`);
    
    if (!audioPlay) return; //if audio id isn't present, does nothing
    audioPlay.currentTime = 0;  //resets time back to 0 to you don't have to wait for audio to finish before playing again
    audioPlay.play();
    const li = document.querySelector(`li[id = "${e.which}"]`);
    li.classList.add("pressed");
    setTimeout(function(){li.classList.remove("pressed")}, 300);
});
