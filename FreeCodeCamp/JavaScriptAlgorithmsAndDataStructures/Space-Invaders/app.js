document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const resultDisplay = document.querySelector("#result");
  let width = 15;
  let currentShooterIndex = 202;
  let currentInvaderIndex = 0;
  let alienInvadersTakenDown = [];
  let result = 0;
  let direction = 1;
  let invaderID;

  // define alien invaders
  const alienInVaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39,
  ];

  // draw the alien invaders
  alienInVaders.forEach((invader) =>
    squares[currentInvaderIndex + invader].classList.add("invader")
  );

  // draw the shooter
  squares[currentShooterIndex].classList.add("shooter");

  // move the shooter long the line
  function moveShooter(e) {
    squares[currentShooterIndex].classList.remove("shooter");
    switch (e.keyCode) {
      case 37:
        if (currentShooterIndex % width !== 0) currentShooterIndex--;
        break;
      case 39:
        if (currentShooterIndex % width < width - 1) currentShooterIndex++;
        break;
    }
    squares[currentShooterIndex].classList.add("shooter");
  }
  document.addEventListener("keydown", moveShooter);

  // move alien invaders
  function moveInvaders() {
    const leftEdge = alienInVaders[0] % width === 0;
    const rightEdge =
      alienInVaders[alienInVaders.length - 1] % width === width - 1;

    if ((leftEdge && direction === -1) || (rightEdge && direction === 1)) {
      direction = width;
    } else if (direction === width) {
      if (leftEdge) direction = 1;
      else direction = -1;
    }

    for (let i = 0; i < alienInVaders.length; i++) {
      squares[alienInVaders[i]].classList.remove("invader");
    }

    for (let i = 0; i < alienInVaders.length; i++) {
      alienInVaders[i] += direction;
    }

    for (let i = 0; i < alienInVaders.length; i++) {
      if (!alienInvadersTakenDown.includes(i)) {
        squares[alienInVaders[i]].classList.add("invader");
      }
    }

    // decide a game over
    if (squares[currentShooterIndex].classList.contains("invader", "shooter")) {
      resultDisplay.textContent = "GAME OVER";
      squares[currentShooterIndex].classList.add("boom");
      clearInterval(invaderID);
    }
    for (let i = 0; i < alienInVaders.length; i++) {
      if (alienInVaders[i] > squares.length - (width - 1)) {
        resultDisplay.textContent = "GAME OVER";
        clearInterval(invaderID);
      }
    }
    if (alienInvadersTakenDown.length === alienInVaders.length) {
      resultDisplay.textContent = "YOU WIN";
      clearInterval(invaderID);
    }
  }

  invaderID = setInterval(moveInvaders, 500);

  // shoot at aliens
  function shoot(e) {
    let laserID;
    let currentLaserIndex = currentShooterIndex;
    // move the laser from the shooter to the alien invader
    function moveLaser() {
      squares[currentLaserIndex].classList.remove("laser");
      currentLaserIndex -= width;
      squares[currentLaserIndex].classList.add("laser");
      if (squares[currentLaserIndex].classList.contains("invader")) {
        squares[currentLaserIndex].classList.remove("laser");
        squares[currentLaserIndex].classList.remove("invader");
        squares[currentLaserIndex].classList.add("boom");

        setTimeout(
          () => squares[currentLaserIndex].classList.remove("boom"),
          150
        );
        clearInterval(laserID);

        const alienTakeDown = alienInVaders.indexOf(currentLaserIndex);
        alienInvadersTakenDown.push(alienTakeDown);
        result++;
        resultDisplay.textContent = result;
      }

      if (currentLaserIndex < width) {
        clearInterval(laserID);
        setTimeout(
          () => squares[currentLaserIndex].classList.remove("laser"),
          100
        );
      }
    }
    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 32) {
        laserID = setInterval(moveLaser, 100);
      }
    });
  }
  document.addEventListener("keyup", shoot);
});
