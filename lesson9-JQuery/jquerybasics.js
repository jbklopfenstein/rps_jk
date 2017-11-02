// Load jQuery (using a CDN)
// Get the top-level header element
// Get all the section elements
// Get the section element with class="current"
// Get the section that comes after the current section
// Get the h2 node from the section before the 'current' section
// Get the div that contains the section that has an h2 with a class of 'highlight'
// Get all the sections that contain an H2 and store them in an Array

var self = $(this);
var head = $("h1");
console.log(head);
var sects = $("section").find("*");
console.log(sects);
var sectCurrentClass = $(".current")
console.log(sectCurrentClass)
console.log(sectCurrentClass.next())
console.log(sectCurrentClass.prev().find("h2")[0]);
var highClass = $(".highlight")
console.log(highClass.parent().parent())
var h2Array = $("h2").find("*")
console.log(h2Array)
// var h2Array = Array.from($("section").find("h2"))
