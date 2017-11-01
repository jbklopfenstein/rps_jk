// <!-- Get the header element
// Get all the section elements
// Get the section element with class="current"
// Get the section that comes after the current section
// Get the h2 node from the section before the 'current' section
// Get the div that contains the section that has an h2 with a class of 'highlight'
// Get all the sections that contain an H2 (using a single statement); -->

var header = document.getElementsByTagName('header');
console.log(header);

var sections = document.getElementsByTagName('section');
console.log(sections);

var sectionCurrent = document.querySelector('section.current');
console.log(sectionCurrent);

var sectionAfterCurrent = sectionCurrent.nextElementSibling;
console.log(sectionAfterCurrent);

var firsth2node = sectionCurrent.previousElementSibling.getElementsByTagName('h2');
console.log(firsth2node);

var highlight = document.querySelector('h2.highlight').parentElement.parentElement;
console.log(highlight);
// var highlightParentSection = highlight.parent;
// console.log(highlightParentSection);
// var highlightdiv = highlight.parent;
// console.log(highlightdiv);

var allh2s = document.querySelectorAll('h2');
console.log(allh2s);
for (var i = 0; i < allh2s.length; i++) {
  console.log(allh2s[i].parentElement);
}

// var allh2s = document.querySelectorAll('h2');
// console.log(allh2s);
// var all2sections = Array.from(allh2s);
// console.log(all2sections);
