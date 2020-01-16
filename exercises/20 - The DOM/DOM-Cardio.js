// Make a div

const wrapperDiv = document.createElement(`div`);

// add a class of wrapper to it

wrapperDiv.classList.add(`wrapper`);

// put it into the body

document.body.insertAdjacentElement(`afterbegin`, wrapperDiv);

// make an unordered list

const ul = document.createElement(`ul`);

// add three list items with the words "one, two three" in them
// put that list into the above wrapper

const li1 = document.createElement(`li`);
li1.innerText = `one`;

const li2 = document.createElement(`li`);
li2.innerText = `two`;

const li3 = document.createElement(`li`);
li3.innerText = `three`;

wrapperDiv.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

// create an image

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

const img = document.createElement(`img`);
img.src = `https://picsum.photos/500`;
img.width = `250`;
img.classList.add(`cute`);
img.alt = `Cute Puppy`;

wrapperDiv.append(img);

console.log(wrapperDiv);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

const html = `
  <div>
    <p>Orum lipsum I am paragraph 1</p>
    <p>Lipsum orum I am the 2nd paragraph</p>
  </div>
  `;

ul.insertAdjacentHTML(`beforebegin`, html);

// add a class to the second paragraph called warning

const p = document.querySelectorAll(`p`);

p[1].classList.add(`warning`);

// remove the first paragraph

p[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  return `
      <div class="playerCard">
        <h2>${name} - ${age}</h2>
        <p>They are ${height} and ${age} years old.
        In Dog years this person would be ${age * 9}.
        That would be a tall dog!
        <button class="button">Delete Card</button>
        </p>
      </div>
    `;
}

// make a new div with a class of cards

const cards = document.createElement(`div`);
cards.classList.add(`cards`);

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element

let playerCardHTML;

playerCardHTML = generatePlayerCard(`Jane`, 12, `5' 0"`);
cards.insertAdjacentHTML(`afterbegin`, playerCardHTML);

playerCardHTML = generatePlayerCard(`Doug`, 11, `5' 3"`);
cards.insertAdjacentHTML(`beforeend`, playerCardHTML);

playerCardHTML = generatePlayerCard(`Susan`, 13, `5' 2"`);
cards.insertAdjacentHTML(`beforeend`, playerCardHTML);

playerCardHTML = generatePlayerCard(`Robin`, 12, `5' 4"`);
cards.insertAdjacentHTML(`beforeend`, playerCardHTML);

wrapperDiv.insertAdjacentElement(`afterbegin`, cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener

function deleteCard(event) {
  const buttonClicked = event.target;

  buttonClicked.closest(`.playerCard`).remove();
}

const deleteButton = document.querySelectorAll(`.button`);
deleteButton.forEach(button => button.addEventListener(`click`, deleteCard));
