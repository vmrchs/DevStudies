document.addEventListener("DOMContentLoaded", () => {
  // card options
  const cardArray = [
    {
      name: "cat1",
      img: "images/cat1.jpg",
    },
    {
      name: "cat1",
      img: "images/cat1.jpg",
    },
    {
      name: "cat2",
      img: "images/cat2.jpg",
    },
    {
      name: "cat2",
      img: "images/cat2.jpg",
    },
    {
      name: "cat3",
      img: "images/cat3.jpg",
    },
    {
      name: "cat3",
      img: "images/cat3.jpg",
    },
    {
      name: "cat4",
      img: "images/cat4.jpg",
    },
    {
      name: "cat4",
      img: "images/cat4.jpg",
    },
    {
      name: "cat5",
      img: "images/cat5.jpg",
    },
    {
      name: "cat5",
      img: "images/cat5.jpg",
    },
    {
      name: "cat6",
      img: "images/cat6.jpg",
    },
    {
      name: "cat6",
      img: "images/cat6.jpg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenID = [];
  let cardsWon = [];

  // create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/BG.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  // check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneID = cardsChosenID[0];
    const optionTwoID = cardsChosenID[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("IT'S A MATCH!");
      cards[optionOneID].setAttribute("src", "images/blank.jpg");
      cards[optionTwoID].setAttribute("src", "images/blank.jpg");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneID].setAttribute("src", "images/BG.jpg");
      cards[optionTwoID].setAttribute("src", "images/BG.jpg");
      alert("Sorry, try again...");
    }
    cardsChosen = [];
    cardsChosenID = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "CONGRATULATIONS! You found them all.";
    }
  }

  // flip cards
  function flipCard() {
    let cardID = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenID.push(cardID);
    this.setAttribute("src", cardArray[cardID].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
