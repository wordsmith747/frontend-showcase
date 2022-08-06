var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    //Toggle between colors on click
    if (this.style.color === "white") {
      this.style.color = "blue";
    } else if (this.style.color === "blue") {
      this.style.color = "green"
    } else {
      this.style.color = "white";
    }

    //What to do when the button is clicked.
    var letterFromButtonText = this.innerHTML;
    playSound(letterFromButtonText);
  });
}

document.addEventListener("keypress", function(event) {

  playSound(event.key);
  console.log(event);
  console.log(event.key);
});


// document.querySelector("button").addEventListener("click", function()) {
//   alert("I got clicked!");
// }

function playSound(keyLetter) {
  switch (keyLetter) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "l":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "k":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      console.log(keyLetter);

  }
}