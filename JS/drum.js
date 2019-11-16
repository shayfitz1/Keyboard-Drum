//another way to get the audio to play
// $("body").on("keypress", function(e){
//     if (e.which === 97){
//         let audio = new Audio('snare.wav');
//         audio.play();
//     }
// });

const body = document.querySelector("body");
const lis = document.querySelectorAll("li");

body.addEventListener("keypress", function(e){
    //is there an audio element that has a matching data-key?
    const audioPlay = document.querySelector(`audio[id = "${e.which}"]`);
    if (!audioPlay) return; //if audio id isn't present, does nothing
    audioPlay.currentTime = 0;  //resets time back to 0 to you don't have to wait for audio to finish before playing again
    audioPlay.play();
    const key = document.querySelector(`li[id = "${e.which}"]`);
    key.classList.add("pressed");
    setTimeout(function(){key.classList.remove("pressed")}, 300);
});

lis.forEach(function(letter){
    letter.addEventListener("click", function(e){
        const audio = document.querySelector(`audio[id = "${e.target.id}"]`);
        audio.currentTime = 0;
        audio.play();
        letter.classList.add("pressed");
        setTimeout(function(){letter.classList.remove("pressed")}, 300);
    });
});
