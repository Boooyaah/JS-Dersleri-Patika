const keydownA = document.querySelector("#keydownA");
const keydownS = document.querySelector("#keydownS");
const keydownD = document.querySelector("#keydownD");
const keydownF = document.querySelector("#keydownF");
const keydownG = document.querySelector("#keydownG");
const keydownH = document.querySelector("#keydownH");
const keydownJ = document.querySelector("#keydownJ");
const keydownK = document.querySelector("#keydownK");
const keydownL = document.querySelector("#keydownL");
const clickedButton = document.querySelector(".btn");

var audioA = new Audio("./sounds and png/boom.wav");
var audioS = new Audio("./sounds and png/clap.wav");
var audioD = new Audio("./sounds and png/hihat.wav");
var audioF = new Audio("./sounds and png/kick.wav");
var audioG = new Audio("./sounds and png/openhat.wav");
var audioH = new Audio("./sounds and png/ride.wav");
var audioJ = new Audio("./sounds and png/snare.wav");
var audioK = new Audio("./sounds and png/tink.wav");
var audioL = new Audio("./sounds and png/tom.wav");
const keyCodeA = document.querySelector("#keyCodeA");

keydownA.addEventListener("click", () => {
  audioA.play();
  audioA.currentTime = 0;
});
keydownS.addEventListener("click", () => {
  audioS.play();
  audioS.currentTime = 0;
});
keydownD.addEventListener("click", () => {
  audioD.play();
  audioD.currentTime = 0;
});
keydownF.addEventListener("click", () => {
  audioF.play();
  audioF.currentTime = 0;
});
keydownG.addEventListener("click", () => {
  audioG.play();
  audioG.currentTime = 0;
});
keydownH.addEventListener("click", () => {
  audioH.play();
  audioH.currentTime = 0;
});
keydownJ.addEventListener("click", () => {
  audioJ.play();
  audioJ.currentTime = 0;
});
keydownK.addEventListener("click", () => {
  audioK.play();
  audioK.currentTime = 0;
});
keydownL.addEventListener("click", () => {
  audioL.play();
  audioL.currentTime = 0;
});
