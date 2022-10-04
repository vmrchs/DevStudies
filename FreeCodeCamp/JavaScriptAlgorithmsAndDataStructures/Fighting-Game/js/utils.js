function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.hitBox.position.x + rectangle1.hitBox.width >=
      rectangle2.position.x &&
    rectangle1.hitBox.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.hitBox.position.y + rectangle1.hitBox.height >=
      rectangle2.position.y &&
    rectangle1.hitBox.position.y <= rectangle2.position.y + rectangle2.height
  );
}

function determineWinner({ player, enemy, timerID }) {
  clearTimeout(timerID);
  document.querySelector("#displayText").style.display = "flex";
  if (player.health === enemy.health) {
    document.querySelector("#displayText").innerHTML = "TIE";
  } else if (player.health > enemy.health) {
    document.querySelector("#displayText").innerHTML = "Player 1 WINS!";
  } else if (enemy.health > player.health) {
    document.querySelector("#displayText").innerHTML = "Player 2 WINS!";
  }
}

let timer = 60;
let timerID;
function countDown() {
  if (timer > 0) {
    timerID = setTimeout(countDown, 1000);
    timer--;
    document.querySelector("#timer").innerHTML = timer;
  }

  if (timer === 0) {
    determineWinner({ player, enemy, timerID });
  }
}
