Example: Adding Content Dynamically
Here's how you can add content to the DOM dynamically once it is loaded.
In this example, we'll display today's date:

<html>
  <head>
    <script>
      window.onload = function() {
        const heading = document.createElement("h1");
        const date = document.createTextNode(new Date().toString());
        heading.appendChild(date);
        document.body.appendChild(heading);
      }
    </script>
  </head>
  <body>
  </body>
</html>


// Using JavaScript with the DOM
// In the examples above, we use JavaScript to interact with the DOM using methods
//  like createElement, createTextNode, and appendChild.

// We also use DOM events like onload to perform actions when specific events
// occur. Commonly used events include click, focus, and blur.
// Understanding the DOM is essential for web development, as it allows you to
//  create interactive and dynamic web pages by manipulating the structure and
//   content of HTML documents.

1. Finding Elements by ID

<div id="element-below-input"></div>

<script>
  var element = document.getElementById("element-below-input");
</script>

2. Finding Elements by Tag Name

<img src="image1path" alt="image1">
<img src="image2path" alt="image2">

<script>
  var images = document.getElementsByTagName("img");
</script>

3. Finding Elements by Class Name
<a class="our-link" href="link1">Link1</a>
<a class="our-link" href="link2">Link2</a>

<script>
  var links = document.getElementsByClassName("our-link");
</script>


4. Finding Elements by CSS Selectors

<a class="link" href="link1">Link1</a>
<a class="link" href="link2">Link2</a>
<span class="link">Made to look like link</span>
<span class="link">Also Made to look like link</span>

<script>
  var dummylinks = document.querySelectorAll("span.link");
</script>

In this example, span.link selects all span elements with the class link.
Attributes vs. Properties
Attributes: These are defined in the HTML markup and specify initial values for elements.
Properties: These are part of the DOM objects and represent the current state of elements.
When a browser processes an HTML document, it creates corresponding DOM properties for standard attributes. Some attributes apply to all elements, while others are specific to certain elements.

For example, id and class apply to all elements, while type is specific to inputs and buttons.

Common Properties
classList: A list of classes assigned to an element. It's an array-like object.
className: A string of classes assigned to an element, separated by spaces if there are multiple classes.
id: A string representing the ID assigned to an element.
innerHTML: The inner content of the element, including nested elements, in string form.
Common Methods
addEventListener: Listens for a specified event and calls a function when that event occurs. Events can include click, mousedown, mouseup, focus, blur, etc.
getBoundingClientRect: Returns the height, width, left, and top values of an element relative to the browser.
hasAttribute: Checks if an element has a specific attribute.
removeAttribute: Removes a specified attribute from an element.
removeEventListener: Removes an event listener from an element.
scroll: Scrolls to an element's position.
**Example **
Here's an example demonstrating the use of some properties and methods:

<div id="div1" class="class1 class2"><span>hello</span></div>
<input id="input" type="text">
<button>Button</button>

<script>
  var element = document.getElementById("div1");

  console.log(element.classList); // ["class1", "class2"]
  console.log(element.className); // "class1 class2"
  console.log(element.id); // "div1"
  console.log(element.innerHTML); // "<span>hello</span>"

  // Example of using a method
  element.addEventListener('click', function() {
    alert('Div clicked!');
  });
</script>


Working with Classes
While classes are often associated with styling elements using CSS, they can also be leveraged in JavaScript to perform actions on elements with specific classes. This allows for dynamic interactions and modifications on a web page.

Using Classes for Styling
Classes are commonly used to apply styles to elements. Multiple class names can be assigned to an HTML element, separated by spaces. Here's an example:

<head>
  <style>
    .menu-item {
      background-color: black;
      color: white;
    }

    .menu-item.active {
      background-color: white;
      color: black;
    }
  </style>
</head>
<body>
  <ul>
    <li class="menu-item">Menu 1</li>
    <li class="menu-item active">Menu 2</li>
    <li class="menu-item">Menu 3</li>
  </ul>
</body>

Manipulating Classes with JavaScript
To interact with elements based on their classes, you can use JavaScript. For example, you might want to add an active class to a menu item when it's clicked and remove it from others.

Example: Adding and Removing Classes
Here's how you can modify the previous example to achieve this behavior:

<head>
  <style>
    .menu-item {
      background-color: black;
      color: white;
    }

    .menu-item.active {
      background-color: white;
      color: black;
    }
  </style>
  <script>
    function menuClicked(currentElement) {
      const menuItems = document.getElementsByClassName("menu-item");

      for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove('active');
      }

      currentElement.classList.add("active");
    }
  </script>
</head>
<body>
  <ul>
    <li class="menu-item" onclick="menuClicked(this)">Menu 1</li>
    <li class="menu-item active" onclick="menuClicked(this)">Menu 2</li>
    <li class="menu-item" onclick="menuClicked(this)">Menu 3</li>
  </ul>
</body>


Explanation

getElementsByClassName(): This method is used to select all elements with a specific class name.
classList.remove(): Removes a class from an element.
classList.add(): Adds a class to an element.
onclick Event: Triggers the menuClicked function when a menu item is clicked. While the above code works, there are ways to optimize it. Consider using event delegation or modern JavaScript features like forEach to improve performance and readability.


Creating Nodes
JavaScript provides several ways to create HTML elements dynamically. The most commonly used method is document.createElement.

document.createElement("tagname"); // tagname can be any valid HTML tag
const newElement = document.createElement("div");
newElement.textContent = "Hello, World!";
document.body.appendChild(newElement);



Traversing the DOM
Sometimes, you may not know the exact element you want to manipulate, but you know its relationship to other elements. JavaScript provides methods to traverse the DOM tree.

Example:

<ul class="subjects">
  <li>Maths</li>
  <li class="fav-subject">Science</li>
  <li>English</li>
</ul>

<script>
  const subjects = document.querySelector(".subjects");

  console.log(subjects.firstElementChild); // First element of the list
  console.log(subjects.lastElementChild); // Last element of the list

  const favSub = document.querySelector(".fav-subject");

  console.log(favSub.previousElementSibling); // Element before favorite subject
  console.log(favSub.nextElementSibling); // Element after favorite subject
  console.log(favSub.parentElement); // Parent of favorite subject (entire list)
</script>

Node Traversal Methods:

ele.childNodes
ele.firstChild
ele.lastChild
ele.previousSibling
ele.nextSibling
ele.parentNode

Removing Nodes
Removing elements from the DOM is another common task. For example,
you might want to remove a login link once a user has logged in.

const favSub = document.querySelector(".fav-subject");
favSub.remove(); // Removes element from DOM
