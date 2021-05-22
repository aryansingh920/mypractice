function randomnumber() {
  let randomnumber = 0;
  for (let i = 0; i <= 10; i++) {
    randomnumber = Math.random();
  }
  randomnumber = (Math.floor(randomnumber * 6)) + 1;
  return (randomnumber)
}
function changedice() {
  let dice1 = randomnumber();
  let dice2 = randomnumber();
  $('.img1').slideUp(50).slideDown(50).slideUp(50).slideDown(50).slideUp(50).slideDown(50).attr("src", `images/dice${dice1}.png`);
  $('.img2').slideUp(50).slideDown(50).slideUp(50).slideDown(50).slideUp(50).slideDown(50).slideUp(50).slideDown(50).attr("src", `images/dice${dice2}.png`);
  document.querySelector('.p1').textContent = `${(document.querySelector('.player1name').value)} `;
  document.querySelector('.p2').textContent = `${(document.querySelector('.player2name').value)} `;
  if (dice1 > dice2) {
    document.querySelector('h1').textContent = `🚩 ${(document.querySelector('.player1name').value)} Wins`;
  } else if (dice1 < dice2) {
    document.querySelector('h1').textContent = `${(document.querySelector('.player2name').value)} Wins 🚩`;
  } else {
    document.querySelector('h1').textContent = "🏳️ It's a tie roll again 🏳️";
  }
}
function startgame() {
  document.querySelector('#loader').style.visibility = 'hidden';
  document.querySelector('#maingame').style.visibility = 'visible';
}
