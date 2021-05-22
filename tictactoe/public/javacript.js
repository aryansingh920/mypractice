let dda = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let player1;
let player2;
let player1choice, player2choice;
let gridcount;

function functionplayer1chosecross() {
  player1choice = 'x';
  player2choice = 'o';
  document.querySelector('.fordisable').innerHTML = 'Enter Player 2 name : <input class="player2name" type="text" placeholder="Player2"> <button class="btn btn1 btn-outline-success" type="button" disabled><i class="far fa-times fa-3x"></i></button> <button class="btn btn1 btn-info" type="button" ><i class="far fa-circle fa-3x"></i></button>';
  document.querySelector('.forable').innerHTML = 'Enter Player 1 name : <input class="player1name" type="text" placeholder="Player1"> <button onclick = "functionplayer1chosecross()" class="btn btn1 btn-success " type="button"><i class="far fa-times fa-3x"></i></button> <button onclick = "functionplayer1chosecircle()" class="btn btn1 btn-outline-info" type="button" disabled><i class="far fa-circle fa-3x"></i></button>';
  document.querySelector('.startgameclass').removeAttribute('disabled');
}

function functionplayer1chosecircle() {
  player2choice = 'x'
  player1choice = 'o'
  document.querySelector('.fordisable').innerHTML = 'Enter Player 2 name : <input class="player2name" type="text" placeholder="Player2"> <button class="btn btn1 btn-success" type="button" ><i class="far fa-times fa-3x"></i></button> <button class="btn btn1 btn-outline-info" type="button" disabled><i class="far fa-circle fa-3x"></i></button>';
  document.querySelector('.forable').innerHTML = 'Enter Player 1 name : <input class="player1name" type="text" placeholder="Player1"> <button onclick = "functionplayer1chosecross()" class="btn btn1 btn-outline-success " type="button" disabled><i class="far fa-times fa-3x"></i></button> <button onclick = "functionplayer1chosecircle()" class="btn btn1 btn-info" type="button" disabled><i class="far fa-circle fa-3x"></i></button>';
  document.querySelector('.startgameclass').removeAttribute('disabled');
}

function startgame() {
  document.querySelector('#loader').style.visibility = 'hidden';
  document.querySelector('#game').style.visibility = 'visible';
  player1 = (document.querySelector('.player1name').value);
  document.querySelector('.player1').textContent = `Player 1 : ${player1} - ${player1choice.toUpperCase()}`;
  player2 = (document.querySelector('.player2name').value);
  document.querySelector('.player2').textContent = `Player 2 : ${player2} - ${player2choice.toUpperCase()}`;
}

function function1(chance) {
  document.querySelector('.buttonmain1').innerHTML = `<i class="far fa-${chance} fa-8x"></i>`;
  document.querySelector('.buttonmain1').setAttribute('disabled', '');
  gridcount = 1;
  // return (gridcount);
}

function function2(chance) {
  document.querySelector('.buttonmain2').innerHTML = `<i class="far fa-${chance} fa-8x"></i>`;
  document.querySelector('.buttonmain2').setAttribute('disabled', '');
  gridcount = 2;
  // return (gridcount);
}

function function3(chance) {
  document.querySelector('.buttonmain3').innerHTML = `<i class="far fa-${chance} fa-8x"></i>`;
  document.querySelector('.buttonmain3').setAttribute('disabled', '');
  gridcount = 3;
  // return (gridcount);
}

function function4(chance) {
  document.querySelector('.buttonmain4').innerHTML = `<i class="far fa-${chance} fa-8x"></i>`;
  document.querySelector('.buttonmain4').setAttribute('disabled', '');
  gridcount = 4;
  // return (gridcount);
}

function function5(chance) {
  document.querySelector('.buttonmain5').innerHTML = `<i class="far fa-${chance} fa-8x"></i>`;
  document.querySelector('.buttonmain5').setAttribute('disabled', '');
  gridcount = 5;
  // return (gridcount);
}

function function6(chance) {
  document.querySelector('.buttonmain6').innerHTML = `<i class="far fa-${chance} fa-8x"></i>`;
  document.querySelector('.buttonmain6').setAttribute('disabled', '');
  gridcount = 6;
  // return (gridcount);
}

function function7(chance) {
  document.querySelector('.buttonmain7').innerHTML = `<i class="far fa-${chance} fa-8x"></i>`;
  document.querySelector('.buttonmain7').setAttribute('disabled', '');
  gridcount = 7;
  // return (gridcount);
}

function function8(chance) {
  document.querySelector('.buttonmain8').innerHTML = `<i class="far fa-${chance} fa-8x"></i>`;
  document.querySelector('.buttonmain8').setAttribute('disabled', '');
  gridcount = 8;
  // return (gridcount);
}

function function9(chance) {
  document.querySelector('.buttonmain9').innerHTML = `<i class="far fa-${chance} fa-8x"></i>`;
  document.querySelector('.buttonmain9').setAttribute('disabled', '');
  gridcount = 9;
  // return (gridcount);
}
let i = 0;

function mainfunction() {
  console.log(player1choice);
  console.log(player2choice);
  console.log(player1);
  console.log(player2);
  console.log(dda);
  while (win() === false) {
    i++;
    console.log(i);
    if (win() === true) {
      console.log('winner');
      break;
    }
    if (i % 2 !== 0) {
      if (player1choice === 'x') {
        // document.querySelector('#playerchanceindicator').textContent=`${player1}'s last chance`;
        switch (gridcount) {
          case 1: {
            function1('times');
            dda[0][0] = 'x';
            break;
          }
          case 2: {
            function2('times');
            dda[0][1] = 'x';
            break;
          }
          case 3: {
            function3('times');
            dda[0][2] = 'x';
            break;
          }
          case 4: {
            function4('times');
            dda[1][0] = 'x';
            break;
          }
          case 5: {
            function5('times');
            dda[1][1] = 'x';
            break;
          }
          case 6: {
            function6('times');
            dda[1][2] = 'x';
            break;
          }
          case 7: {
            function7('times');
            dda[2][0] = 'x';
            break;
          }
          case 8: {
            function8('times');
            dda[2][1] = 'x';
            break;
          }
          case 9: {
            function9('times');
            dda[2][2] = 'x';
            break;
          }
          default:
            break;
        }
      } else if (player1choice === 'o') {
        switch (gridcount) {
          case 1: {
            function1('circle');
            dda[0][0] = 'o';
            break;
          }
          case 2: {
            function2('circle');
            dda[0][1] = 'o';
            break;
          }
          case 3: {
            function3('circle');
            dda[0][2] = 'o';
            break;
          }
          case 4: {
            function4('circle');
            dda[1][0] = 'o';
            break;
          }
          case 5: {
            function5('circle');
            dda[1][1] = 'o';
            break;
          }
          case 6: {
            function6('circle');
            dda[1][2] = 'o';
            break;
          }
          case 7: {
            function7('circle');
            dda[2][0] = 'o';
            break;
          }
          case 8: {
            function8('circle');
            dda[2][1] = 'o';
            break;
          }
          case 9: {
            function9('circle');
            dda[2][2] = 'o';
            break;
          }
          default:
            break;
        }
      }
      break;
    } else {
      if (player2choice === 'x') {
        // document.querySelector('#playerchanceindicator').textContent=`${player2}'s last chance`;
        switch (gridcount) {
          case 1: {
            function1('times');
            dda[0][0] = 'x';
            break;
          }
          case 2: {
            function2('times');
            dda[0][1] = 'x';
            break;
          }
          case 3: {
            function3('times');
            dda[0][2] = 'x';
            break;
          }
          case 4: {
            function4('times');
            dda[1][0] = 'x';
            break;
          }
          case 5: {
            function5('times');
            dda[1][1] = 'x';
            break;
          }
          case 6: {
            function6('times');
            dda[1][2] = 'x';
            break;
          }
          case 7: {
            function7('times');
            dda[2][0] = 'x';
            break;
          }
          case 8: {
            function8('times');
            dda[2][1] = 'x';
            break;
          }
          case 9: {
            function9('times');
            dda[2][2] = 'x';
            break;
          }
          default:
            break;
        }
      } else if (player2choice === 'o') {
        switch (gridcount) {
          case 1: {
            function1('circle');
            dda[0][0] = 'o';
            break;
          }
          case 2: {
            function2('circle');
            dda[0][1] = 'o';
            break;
          }
          case 3: {
            function3('circle');
            dda[0][2] = 'o';
            break;
          }
          case 4: {
            function4('circle');
            dda[1][0] = 'o';
            break;
          }
          case 5: {
            function5('circle');
            dda[1][1] = 'o';
            break;
          }
          case 6: {
            function6('circle');
            dda[1][2] = 'o';
            break;
          }
          case 7: {
            function7('circle');
            dda[2][0] = 'o';
            break;
          }
          case 8: {
            function8('circle');
            dda[2][1] = 'o';
            break;
          }
          case 9: {
            function9('circle');
            dda[2][2] = 'o';
            break;
          }
          default:
            break;
        }
      }
      break;
    }
  }

}


function win() {
  console.log(player1choice);
  console.log(player2choice);
  console.log(player1);
  console.log(player2);
  console.log(dda);
  let flag;
  if ((dda[0][0] === 'o' && dda[0][1] === 'o' && dda[0][2] === 'o') || (dda[0][0] === 'x' && dda[0][1] === 'x' && dda[0][2] === 'x')) {
    document.querySelector('.line1').style.visibility = 'visible';
    flag = true;
  } else if ((dda[1][0] === 'o' && dda[1][1] === 'o' && dda[1][2] === 'o') || (dda[1][0] === 'x' && dda[1][1] === 'x' && dda[1][2] === 'x')) {
    document.querySelector('.line2').style.visibility = 'visible';
    flag = true;
  } else if ((dda[2][0] === 'o' && dda[2][1] === 'o' && dda[2][2] === 'o') || (dda[2][0] === 'x' && dda[2][1] === 'x' && dda[2][2] === 'x')) {
    document.querySelector('.line3').style.visibility = 'visible';
    flag = true;
  } else if ((dda[0][0] === 'o' && dda[1][0] === 'o' && dda[2][0] === 'o') || (dda[0][0] === 'x' && dda[1][0] === 'x' && dda[2][0] === 'x')) {
    document.querySelector('.line4').style.visibility = 'visible';
    flag = true;
  } else if ((dda[0][1] === 'o' && dda[1][1] === 'o' && dda[2][1] === 'o') || (dda[0][1] === 'x' && dda[1][1] === 'x' && dda[2][1] === 'x')) {
    document.querySelector('.line5').style.visibility = 'visible';
    flag = true;
  } else if ((dda[0][2] === 'o' && dda[1][2] === 'o' && dda[2][2] === 'o') || (dda[0][2] === 'x' && dda[1][2] === 'x' && dda[2][2] === 'x')) {
    document.querySelector('.line6').style.visibility = 'visible';
    flag = true;
  } else if ((dda[0][0] === 'o' && dda[1][1] === 'o' && dda[2][2] === 'o') || (dda[0][0] === 'x' && dda[1][1] === 'x' && dda[2][2] === 'x')) {
    document.querySelector('.line7').style.visibility = 'visible';
    flag = true;
  } else if ((dda[0][2] === 'o' && dda[1][1] === 'o' && dda[2][0] === 'o') || (dda[0][2] === 'x' && dda[1][1] === 'x' && dda[2][0] === 'x')) {
    document.querySelector('.line8').style.visibility = 'visible';
    flag = true;
  } else {
    flag = false;
  }
  return flag;
}
