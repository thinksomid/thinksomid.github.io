// $(document).ready(function() {
//   // All JS/jQuery must be inside this function to skip errors in case HTML BODY is not loaded yet
//
//   // // to test JS file link save this line and refresh the html page:
//   // alert('testing js link.');
//   // //to test JQUERY link, refresh html page and try $("h1") in chrome dev tools"
//   // // if loaded: fn.init [h1#...]
//   // // if not loaded: <h1 ...">...</h1>
var
level = 0,
// started = false,
gamePattern = [],
userClickedPattern = [],
buttonColours = ["red", "blue", "green", "yellow"];


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


function playSound(name) {
  new Audio('sounds/' + name + '.mp3').play();
}


function updateLevelTitle(message) {
  $('#level-title').html(message);
}


function nextSequence() {
  var randomNumber = getRandomIntInclusive(0, 3);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log('gamePattern', gamePattern);

  var randomChosenButton = $("#" + randomChosenColour);
  // randomChosenButton.animate({opacity: 0}, 50).animate({opacity: 1}, 100); //OK
  randomChosenButton.fadeIn(50).fadeOut(100).fadeIn(100); //OK

  playSound(randomChosenColour);

  level ++;
  updateLevelTitle('Level ' + level);
}


function flashCss(targetName, cssClass, duration) {
  target = $(targetName);

  if (!!target) {
    // target.attr('class', target.attr('class') + ' ' + cssClass); //OK
    // target.toggleClass(cssClass); //OK but err on game over
    if (!target.hasClass(cssClass)) target.addClass(cssClass); //OK
    // console.log( target.attr('class') );

    setTimeout(function() {
      // target.toggleClass(cssClass);
      if (target.hasClass(cssClass)) target.removeClass(cssClass); //OK?????
      // console.log( target.attr('class') );
    }, duration);
  }
}


function animatePress(currentColour) {
  flashCss('#' + currentColour, 'pressed', 100);
}


$('.btn').on('click', function(event) {
  if (gamePattern.length < 1) { //OK
  // if (!started) { //OK
    return;
  }

  // var userChosenColour = event.target.id; //OK
  // var userChosenColour = $(event.target).attr('id'); //OK
  // var userChosenColour = this.id; //OK
  var userChosenColour = $(this).attr('id'); //OK
  userClickedPattern.push(userChosenColour);
  // console.log(userChosenColour);
  console.log('userClickedPattern', userClickedPattern);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  // setTimeout coz animatePress needs 100ms otherwise btn remains grey if game over
  setTimeout(function() {
    checkAnswer(userClickedPattern.length-1);
  }, 100);
});


$(document).on('keydown', function() {
  // console.log(event); //OK
  // console.log(event.target); //OK
  // console.log(event.key); //OK

  // if (!started) { //OK
  if (gamePattern.length < 1) { //OK
    updateLevelTitle('Level 0');
    setTimeout(function() {
      nextSequence();
      // started = true;
    }, 500);
  }
});


function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}


function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  // started = false;
}


function checkAnswer(currentLevel) {
  // console.log('gamePattern', gamePattern);
  // console.log('userClickedPattern', userClickedPattern);
  console.log('currentLevel', currentLevel);

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log('success current click.');

    //if (userClickedPattern.length === gamePattern.length){
    if (arrayEquals(userClickedPattern, gamePattern)) {
      console.log('correct whole sequence!');
      updateLevelTitle('Wait for next level...');

      setTimeout(function() {
        nextSequence();
        userClickedPattern = [];
        console.log('reset user sequence.');
        console.log('userClickedPattern', userClickedPattern);
      }, 1000);
    }

  } else {

    console.log('wrong current click.');

    playSound('wrong');

    flashCss('body', 'game-over', 200);

    updateLevelTitle('Game Over, Press Any Key to Restart.');

    startOver();

  }
}
// });
