function playAudioForLetter(letter) {
    switch (letter) {
        case 'w':
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'a':
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 's':
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'd':
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'j':
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 'k':
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'l':
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.log(letter + "--- incorrect key");
    }
}
function displayAnimation(letter){
    var activeButton = document.querySelector("." + letter);//getting button object using letter
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 120);
}
var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        playAudioForLetter(buttonInnerHTML);

        displayAnimation(buttonInnerHTML);
    });
}

addEventListener("keydown", function (event) {
    playAudioForLetter(event.key);

    displayAnimation(event.key);
});