// console.error('hi')
function switchfunct (key){
  // let buttonhtml = this.innerHTML;
  //   console.log(key);
  switch (key) {
    case "w":
      (new Audio ('sounds/tom-1.mp3')).play ();
      break;
    case "a":
      (new Audio ('sounds/tom-2.mp3')).play ();
      break;
    case "s":
      (new Audio ('sounds/tom-3.mp3')).play ();
      break;
    case "d":
      (new Audio ('sounds/tom-4.mp3')).play ();
      break;
    case "j":
      (new Audio ('sounds/snare.mp3')).play ();
      break;
    case "k":
      (new Audio ('sounds/crash.mp3')).play ();
      break;
    case "l":
      (new Audio ('sounds/kick-bass.mp3')).play ();
      break;
    default:
      console.log (this.innerHTML);
      break;
  }
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function(){
    switchfunct(this.innerHTML);
    buttonanimation(this.innerHTML);
  });
}
document.addEventListener('keypress',function (event){
    switchfunct(event.key);
    buttonanimation(event.key);
});

function buttonanimation(key){
    document.querySelector(`.${key}`).classList.add('pressed');
    setTimeout(function(){
      document.querySelector(`.${key}`).classList.remove('pressed')},100);
}

