// Timer Challenge 1:
// Animate the included sprite images of 'guy' images. Start with an initial image of guy1.png then every .5 second (500 ms) update the image to the next one in sequence. Once you reach image guy9.png start over with the guy1.png image.

// SUPER MARIO Challenge 2:
// Animate Mario walking to the left and right by pressing the left and right arrow keys (HINT: implement event handler(s) for handling the key presses)

//create image elements
let div = document.getElementById("jsStuff");

let mario = document.createElement("img");
mario.src = "./Mario1.png";
div.appendChild(mario);
let leftsrc = 4;
let rightSrc = 1;

function animateRight() {
  if (rightSrc < 3) {
    rightSrc++;
    mario.src = `Mario${rightSrc}.png`;
  } else {
    rightSrc = 0;
  }
}
function animateLeft() {
  if (leftsrc < 6) {
    leftsrc++;
    mario.src = `Mario${leftsrc}.png`;
  } else {
    leftsrc = 3;
  }
}

let evtKey;
window.addEventListener("keydown", (evt) => {
  evtKey = evt.key;

  if (evt.key === "ArrowLeft") {
    // evt.preventDefault();

    // setTimeout(animateLeft,1);
    animateLeft();
  } else if (evt.key === "ArrowRight") {
    // setTimeout(animateRight,1);
    animateRight();
  } else {
    console.log(evtKey);
  }
});
console.log(evtKey);
