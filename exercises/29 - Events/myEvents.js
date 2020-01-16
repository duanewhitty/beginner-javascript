const butts = document.querySelector(`.butts`);
const coolButton = document.querySelector(`.cool`);

function handleClick() {
  console.log(`IT GOT CLICKED!!!`);
}

butts.addEventListener(`click`, handleClick);
coolButton.addEventListener(`click`, handleClick);

butts.removeEventListener(`click`, handleClick);

const buyButtons = document.querySelectorAll(`button.buy`);

function buyItem() {
  console.log(`BUYING ITEM`);
}

console.log(buyButtons);

buyButtons.forEach(button => button.addEventListener(`click`, buyItem));
