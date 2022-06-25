//Traversing the Dom
var itemList = document.querySelector('#items');
//Parent Node Property
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'orange';
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

//Parent Element Property
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'orange';
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);

//Child Node Property
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//First Child
// console.log(itemList.firstChild);

//First element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

//First Child
// console.log(itemList.lastChild);

//Last element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.color = 'blue';

//Siblings
//Next siblings
// console.log(itemList.nextSibling);
// //Next Element siblings
// console.log(itemList.nextElementSibling);//it does not have

//Previous sibling
// console.log(itemList.previousSibling);
// //previous element sibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = 'red';

//Creating DOM element
// create a div
var newDiv = document.createElement('div');

//Add a class
newDiv.className = 'hello';

//add a ID
newDiv.id = 'hello1';

// Add attribute
newDiv.setAttribute('title', 'Hello Div');

//Create a text node
var newDivText = document.createTextNode('Hello World');
//Add text to div
newDiv.appendChild(newDivText);
//inserting div to the html
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);
newDiv.style.fontSize = '45px';

console.log(newDiv);
