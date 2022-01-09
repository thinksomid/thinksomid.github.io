function getRandom(max) {
  //+1 to start from 1
  return Math.floor((Math.random() * max) +1);
}

function getDice() {
  return getRandom(6);
}

var
randomNumber1 = getDice(),
randomNumber2 = getDice();

// images\dice1.png WRONG html \  images/dice1.png CORRECT js /
document.querySelector('.img1').setAttribute('src', 'images/dice' + randomNumber1 + '.png')
document.querySelector('.img2').setAttribute('src', 'images/dice' + randomNumber2 + '.png')

document.querySelector('h1').innerHTML = randomNumber1 > randomNumber2
                                          ? 'P1 wins!'
                                          : (randomNumber1 < randomNumber2
                                              ? 'P2 wins!'
                                              : (randomNumber1 === randomNumber2
                                                  ? 'Draw!'
                                                  : 'Refresh Me'));
