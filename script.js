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

// third
/*
В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами).
В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.
*/

const fragment = document.createDocumentFragment();
const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1"
);
img.setAttribute("alt", "img");
fragment.appendChild(img);
document.body.insertAdjacentElement("afterbegin", img);
// img.src =
//   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1";

//