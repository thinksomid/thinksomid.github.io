
// ////////////// using NAMED FUNCTION:::::::::::::
//
// // // WRONG: handleClick() will run first time without clicking
// // document.querySelector('button').addEventListener('click', handleClick());
// // CORRECT
// document.querySelector('button').addEventListener('click', handleClick);
//
// function handleClick() {
//   alert('im clicked');
// }
//
// ////////////// using ANONYMUS FUNCTION:::::::::::::
// document.querySelector('button').addEventListener('click', function() {
//   alert('im clicked');
// });


//////// add LISTENER via FOR LOOP:::::::::::
// var
// buttons = document.querySelectorAll('.drum')
// i = 0,
// length = buttons.length;
//
// for (i = 0; i < length; i++) {
//   buttons[i].addEventListener('click', function() {
//     alert('im clicked');
//   });
// }


///////////// play an AUDIO::::::::
// var
// buttons = document.querySelectorAll('.drum')
// i = 0,
// length = buttons.length;
//
// for (i = 0; i < length; i++) {
//   buttons[i].addEventListener('click', function() {
//     new Audio('sounds/tom-1.mp3').play();
//   });
// }


////////// THIS points to the the sender element::::
// var
// buttons = document.querySelectorAll('.drum')
// i = 0,
// length = buttons.length;
//
// for (i = 0; i < length; i++) {
//   buttons[i].addEventListener('click', function() {
//     // rets the sender button
//     // eg. <button class="s drum">s</button>
//     console.log(this);
//   });
// }


// ////////// use THIS to access ELEMENT attributes::::::
// var
// buttons = document.querySelectorAll('.drum')
// i = 0,
// length = buttons.length;
//
// for (i = 0; i < length; i++) {
//   buttons[i].addEventListener('click', function() {
//     this.style.color = 'white';
//   });
// }



// ////////// use THIS, innerHTML, SWITCH, AUDIO ::::::
// var
// buttons = document.querySelectorAll('.drum')
// i = 0,
// length = buttons.length;
//
// for (i = 0; i < length; i++) {
//   buttons[i].addEventListener('click', function() {
//
//     var key = this.innerHTML;
//     switch (key) {
//       case 'w':
//         new Audio('sounds/tom-1.mp3').play();
//         break;
//       case 'a':
//         new Audio('sounds/tom-2.mp3').play();
//         break;
//       case 's':
//         new Audio('sounds/tom-3.mp3').play();
//         break;
//       case 'd':
//         new Audio('sounds/tom-4.mp3').play();
//         break;
//       case 'j':
//         new Audio('sounds/snare.mp3').play();
//         break;
//       case 'k':
//         new Audio('sounds/crash.mp3').play();
//         break;
//       case 'l':
//         new Audio('sounds/kick-bass.mp3').play();
//         break;
//       default:
//         console.log(key);
//         break;
//     }
//
//   });
// }



////////// pass KEY (THIS.innerHTML) to audio play func for both CLICK and KEYDOWN listeners ::::::
// CLICK for each BUTTON
var
buttons = document.querySelectorAll('.drum')
i = 0,
length = buttons.length;

for (i = 0; i < length; i++) {
  buttons[i].addEventListener('click', function() {
    makeSound(this.innerHTML);
    buttonAnim(this.innerHTML);
  });
}

// KEYDOWN for whole PAGE
document.addEventListener('keydown', function(event) {
  makeSound(event.key);
  buttonAnim(event.key);
});

// action
function makeSound(key) {
  switch (key) {
    case 'w':
      new Audio('sounds/tom-1.mp3').play();
      break;
    case 'a':
      new Audio('sounds/tom-2.mp3').play();
      break;
    case 's':
      new Audio('sounds/tom-3.mp3').play();
      break;
    case 'd':
      new Audio('sounds/tom-4.mp3').play();
      break;
    case 'j':
      new Audio('sounds/snare.mp3').play();
      break;
    case 'k':
      new Audio('sounds/crash.mp3').play();
      break;
    case 'l':
      new Audio('sounds/kick-bass.mp3').play();
      break;
    default:
      console.log(key);
      break;
  }
}

function buttonAnim(key) {
  var activeButton = document.querySelector('.' + key);
  if(activeButton) {
    activeButton.classList.toggle('pressed');
    setTimeout(function() {
      activeButton.classList.toggle('pressed');
    }, 100);
  }
}
