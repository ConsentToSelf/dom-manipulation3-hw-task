// first

/*
Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:

<ul>

<li><a href="#">Link1</a></li>

...

<li class=”new-item”>item 5</li>

<li class=”new-item”>item 6</li>

</ul>

Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
*/

let list = document.querySelector("ul");
// const filteredList = [...list.children];
// const current = list.children.length;
// function getNewDom(args) {
//   const fragment = document.createDocumentFragment();
//   let child = document.createElement("a");
//   args.forEach((element, index) => {
//     element = document.createElement("li");
//     child = document.createElement("a");
//     child.href = "#";
//     child.textContent = `Link${index + current + 1}`;
//     element.appendChild(child);
//     element.classList.add("new-item");
//     fragment.appendChild(element);
//   });
//   list.appendChild(fragment);
// }
// getNewDom(filteredList);

// second

/*
В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку один - strong).
*/

// const fragment = document.createDocumentFragment();
const link = document.querySelectorAll("a");

link.forEach((elem) => {
  const strong = document.createElement("strong");
  strong.textContent = "Hi guys!";
  elem.appendChild(strong);
});
