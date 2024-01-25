
// console.log(window);

// console.dir(window.document);

// console.log(document.body);
// console.log(document.links[0]);//underfile

// // document.body.innerHTML = '<h1>Hello from body</h1>';

// document.write('Hello from JS');

// document.getElementById('main').innerHTML = '<h1>Hello from main</h1>';

// document.querySelector('#main h1').innerText = "hello";

// let output;

// // document.all is deprecated
// output = document.all;
// output = document.all[11];
// output = document.all.length;

// // Everything in the html tags
// output = document.documentElement;

// // Head and body tags
// output = document.head;
// output = document.body;

// // HTMLCollection of everything in head/body
// output = document.head.children;
// output = document.body.children;

// // Random properties
// output = document.doctype;
// output = document.domain;
// output = document.URL;
// output = document.characterSet;
// output = document.contentType;

// // Get all forms
// output = document.forms;
// output = document.forms[0];
// output = document.forms[0].id;
// output = document.forms[0].method;
// output = document.forms[0].action;

// // Change a form id
// document.forms[0].id = 'new-id';

// // Get all links
// // output = document.links;
// // output = document.links[0];
// // output = document.links[0].href;
// // output = document.links[0].href = 'https://facebook.com';
// // output = document.links[0].id = 'google-link';
// // output = document.links[0].className = 'google-class';
// // output = document.links[0].classList;

// // Get all images
// output = document.images;
// output = document.images[0];
// output = document.images[0].src;

// // Turn an HTMLCollection into an array
// const forms = Array.from(document.forms);
// forms.forEach((form) => console.log(form));

// console.log(output);

// document.getElementById()

// console.log(document.getElementById('app-title'));

// // Get attributes
// console.log(document.getElementById('app-title').id);
// console.log(document.getElementById('app-title').className);
// console.log(document.getElementById('app-title').getAttribute('id'));

// // Set attributes
// document.getElementById('app-title').title = 'Shopping List';
// document.getElementById('app-title').setAttribute('class', 'title');

// const title = document.getElementById('app-title');

// Get/change content
// console.log(title.textContent);
// title.textContent = 'Hello World';
// title.innerText = 'Hello Again';
// title.innerHTML = '<strong>Shopping List</strong>';

// // Change styles
// title.style.color = 'red';
// title.style.backgroundColor = 'black';
// title.style.padding = '10px';
// title.style.borderRadius = '10px';

// // document.querySelector()

// // Use any CSS selector
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#app-title'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('input[type="text"]'));
// console.log(document.querySelector('li:nth-child(2)').innerText);

// const secondItem = document.querySelector('li:nth-child(2)');
// secondItem.innerText = 'Apple Juice';
// secondItem.style.color = 'red';

// // Use these methods on other elements
// const list = document.querySelector('ul');
// console.log(list);
// const firstItem = list.querySelector('li');
// firstItem.style.color = 'blue';
// querySelectorAll()
// Returns a NodeList

// const listItems = document.querySelectorAll('.item');

// // Access elements by index
// console.log(listItems[1].innerText);

// // Setting a color for specific element
// listItems[1].style.color = 'red';

// // We can use forEach() on a NodeList
// listItems.forEach((item, index) => {
//   item.style.color = 'red';

//   if (index === 1) {
//     item.remove();
//   }

//   if (index === 0) {
//     item.innerHTML = ` Oranges
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>`;
//   }
// });

// // getElementsByClassName()
// // Returns an HTMLCollection

// const listItems2 = document.getElementsByClassName('item');

// console.log(listItems2[2].innerText);

// const listItemsArray = Array.from(listItems2);

// listItemsArray.forEach((item) => {
//   console.log(item.innerText);
// });

// // getElementsByTagName()

// const listItems3 = document.getElementsByTagName('li');
// console.log(listItems3[0].innerText);

// let output;

// Get child elements from a parent

// const parent = document.querySelector('.parent');

// output = parent.children;

// output = parent.children[1].innerText;
// output = parent.children[1].className;
// output = parent.children[1].nodeName;

// parent.children[1].innerText = 'Child Two';
// parent.children[1].style.color = 'red';

// parent.firstElementChild.innerText = 'Child One';
// parent.lastElementChild.innerText = 'Child Three';

// // Get parent elements from a child

// const child = document.querySelector('.child');

// output = child.parentElement;
// child.parentElement.style.border = '1px solid #ccc';
// child.parentElement.style.padding = '10px';

// // Get sibling elements

// const secondItem = document.querySelector('.child:nth-child(2)');

// output = secondItem;
// output = secondItem.nextElementSibling;

// secondItem.nextElementSibling.style.color = 'green';
// secondItem.previousElementSibling.style.color = 'orange';

// console.log(output);
const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
  // className - Gets a string of all classes
  console.log(itemList.className);
  // Changing the classes with className
  text.className = 'card dark';

  // classList - Array of classes, which also has methods to add, remove, toggle and replace
  console.log(itemList.classList);

  // We can loop through the classes
  itemList.classList.forEach((c) => console.log(c));

  // Add, remove, toggle, replace
  text.classList.add('dark');
  text.classList.remove('card');
  text.classList.toggle('hidden');
  text.classList.replace('card', 'dark');

  // style property - Add styles to elements
  itemList.style.lineHeight = '3';

  items.forEach((item, index) => {
    item.style.color = 'red';

    if (index === 2) {
      item.style.color = 'blue';
    }
  });
}

document.querySelector('button').onclick = run;