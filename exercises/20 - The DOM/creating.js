console.log(`Does BrowserSync Really Work?`);

const myParagraph = document.createElement(`p`);
myParagraph.textContent = `I am a P`;
myParagraph.classList.add(`special`);
console.log(myParagraph);

const myImage = document.createElement(`img`);
myImage.src = `https://picsum.photos/500`;
myImage.alt = `Nice photo`;
console.log(myImage);

const myDiv = document.createElement(`div`);
myDiv.classList.add(`wrapper`);
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const heading = document.createElement(`h2`);
heading.textContent = `Cool Things`;

myDiv.insertAdjacentElement(`afterbegin`, heading);

const newDiv = document.createElement(`div`);
newDiv.classList.add(`list`);

const listHeading = document.createElement(`h2`);
listHeading.textContent = `My List`;
newDiv.insertAdjacentElement(`afterbegin`, listHeading);

const myList = document.createElement(`ul`);
myList.classList.add(`uList`);

newDiv.appendChild(myList);

const li = document.createElement(`li`);
li.textContent = `3`;
myList.appendChild(li);

const li1 = document.createElement(`li`);
li1.textContent = `1`;
li.insertAdjacentElement(`beforebegin`, li1);

const li2 = document.createElement(`li`);
li2.textContent = `2`;
li1.insertAdjacentElement(`afterend`, li2);

const li5 = document.createElement(`li`);
li5.textContent = `5`;
li.insertAdjacentElement(`afterend`, li5);

const li4 = document.createElement(`li`);
li4.textContent = `4`;
li5.insertAdjacentElement(`beforebegin`, li4);

// console.log(myItem);

// myItem.textContent = `1`;
// .insertAdjacentElement(`afterbegin`, myItem);

document.body.appendChild(newDiv);
