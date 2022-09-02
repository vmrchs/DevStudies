document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const scoreDisplay = document.querySelector("span");
  const startBtn = document.querySelector(".start");

  const width = 10;
  let currentIndex = 0; // first div in our grid
  let appleIndex = 0; //
  let currentSnake = [2, 1, 0]; // the div in our grid being 2 (or the HEAD), and 0 being the end (TAIL), with all 1's being the body from now on
  let direction = 1;
  let score = 0;
  let speed = 0.9;
  let intervalTime = 0;
  let interval = 0;

  // start and restart the game
  function startGame() {
    currentSnake.forEach((index) => squares[index].classList.remove("snake"));
    squares[appleIndex].classList.remove("apple");
    clearInterval(interval);
    score = 0;
    randomApple();
    direction = 1;
    scoreDisplay.innerText = score;
    intervalTime = 1000;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentSnake.forEach((index) => squares[index].classList.add("snake"));
    interval = setInterval(moveOutcomes, intervalTime);
  }

  // function that deals with ALL the move outcomes of the snake
  function moveOutcomes() {
    // deals with snake hitting border and hitting itself
    if (
      (currentSnake[0] + width >= width * width && direction === width) || // if snake hits bottom
      (currentSnake[0] % width === width - 1 && direction === 1) || // if snake hits right wall
      (currentSnake[0] % width === 0 && direction === -1) || // if snake hits left wall
      (currentSnake[0] - width < 0 && direction === -width) || // if snake hits the top
      squares[currentSnake[0] + direction].classList.contains("snake") // if snakes hits itself
    ) {
      return clearInterval(interval); // this will clear the interval if any of the above happen
    }
    // snake movement if not interacting with anything
    const tail = currentSnake.pop(); // removes the last item from the array and shows it
    squares[tail].classList.remove("snake"); // removes the class of snake from the TAIL
    currentSnake.unshift(currentSnake[0] + direction); // gives direction to the HEAD of the array
    // the unshift seems to be particularly important here, as it allows us to update the array length
    // deals with snake getting apple
    if (squares[currentSnake[0]].classList.contains("apple")) {
      squares[currentSnake[0]].classList.remove("apple");
      squares[tail].classList.add("snake"); // so after we popped the tail from the array, we add the removed apple to the tail array
      currentSnake.push(tail); // and then push the now enlarged tail back into the snake
      randomApple();
      score++;
      scoreDisplay.textContent = score;
      clearInterval(interval);
      intervalTime = intervalTime * speed; // after the snake gets an apple we use this operation to increase its speed
      interval = setInterval(moveOutcomes, intervalTime); // and update the speed through the interval variable
    }
    squares[currentSnake[0]].classList.add("snake");
  }

  // generate new apple once apple is eaten
  function randomApple() {
    do {
      appleIndex = Math.floor(Math.random() * squares.length);
    } while (squares[appleIndex].classList.contains("snake")); // making sure apple does not appear in a square that already has the snake
    squares[appleIndex].classList.add("apple");
  }

  // assign function to keycodes
  function control(e) {
    squares[currentIndex].classList.remove("snake"); // we begin by removing the snake class from all squares

    if (e.keyCode === 39) {
      direction = 1; // if we press the right arrow on keyboard, snake will move right one div
    } else if (e.keyCode === 38) {
      direction = -width; // if we press the up arrow, the snake will go back its width, appearing to go up
    } else if (e.keyCode === 37) {
      direction = -1; // if we press the left arrow, the snake will go left one div
    } else if (e.keyCode === 40) {
      direction = +width; // if we press the down arrow, the snake head will instantly appear in the div ten divs from where you are now
    }
  }

  document.addEventListener("keyup", control);
  startBtn.addEventListener("click", startGame);
});
