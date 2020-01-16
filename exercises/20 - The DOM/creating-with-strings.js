const src = `https://picsum.photos/200`;
const desc = `Cute Pup`;

const myHTML = `
  <div class="wrapper">
    <h2>${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;

// Turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(document.querySelector(`.pizza`));

// document.body.appendChild(myFragment);
document.body.append(myFragment);
