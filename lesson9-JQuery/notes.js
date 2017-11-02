Caveats
jQuery lets you do a lot with this DOM manipulation pattern, but it is not maintainable. Its fast, easy, and a one way road to hell.
Only use jQuery for quick and dirty demos.
Otherwise, use native DOM API as much as you can.
If what you're doing is too hard with native DOM, bring in a real framework like Backbone. Don't use jQuery if you want it to be maintainable.

-------------------------------------
Just like querySelectorAll:
var elements = $('#myDivWithAnId .css .query');

You can also further refine using a filter:
var elements = $('#myDivWithAnId .css .query').filter(function(){
	return this.innerHTML === 'myElement';
});

Attaching event handlers:
------
HTML:
<div id="firstDiv">
    <button id="myButton" name="button">Click ME</button>
</div>
<div id="someOtherElement">
    <h3>hello world</h3>
</div>

JS:
$('#myButton').on('click', function(event){
	//Invoked when #myButton gets a click event
	this.innerHTML = "button clicked";
})

Alternatively, you might see this syntax:
Just like $('#myElement').on('event', handlerFunction)... except this refers to the element.

$('#myButton').click(function(event){
	//Invoked when #myButton gets a click event
	this.innerHTML = "button clicked";
})

----------SO INSTEAD OF document.<method>.<method>...  ITS A DOLLAR SIGN?

Manipulating DOM
Just like innerHTML, appendChild etc, but more powerful.

$('#myButton').on('click', function(event){
	//Update button html
	$(this).html("button clicked");

	//Create a new element
	var newEl = '<a>look at me!</a>';

	//Append new element
	$('#someOtherElement').append(newEl);

	//Add an attribute
	$('#someOtherElement').append(newEl).attr({'href' : 'http://techtalentsouth.com'})

	//Remove it
	newEl.remove();

})

--------------------

this:
in jQuery:
  $(this).html("button clicked");
is equal to:
  this.innerHTML = 'button clicked'

  try console.log($(this)) inside one of your functions and inspect the result
  var self = $(this);
  $(this) will return a DOM element.
  It is important to remember that everytime jQuery sees $(this), it will lookup the DOM element, which can impact performance over time.
  To address the issue of multiple lookups, you can store $(this) in a variable so the object is now stored as a reference in memory, like so

var self = $(this);

YES, THIS IS SIMILAR TO THE CLOSURE HACK. WHICH I DONT USE, I WAS USING .BIND INSTEAD.

Bringing it all together

$('#myButton').click(function(event){
    var self = $(this);

    self.html('FOO')

    $('#someOtherElement').css('background-color', 'green');

    console.log('button clicked!');

    self.css('color', 'red');
 });

--------------------------

Document.ready
Most of your jQuery scripts should be loaded on the DOMs document.ready event.
Pass a function into jQuery object to run it on DOM ready.

$(document).ready(function() {
  console.log('this runs second');
})

console.log('this runs first');

This makes sure the document exists before your code tries to manipulate it.
-------------------------
############################################################################

jQuery Next Steps
Updating Styles and Classes

//Edit an inline style
$('#myButton').css({color: 'red'});

Better...

Add a CSS Class
$('#myButton').addClass('newClass');

Remove a CSS Class
$('#myButton').removeClass('newClass');

------------------------
Chaining
All jQuery commands return a jQuery object, which means you can call multiple functions in a row. This is called "chaining"

$( "#content" )
    .find( "h3" )
    .eq( 2 )
        .html( "new text for the third h3!" )
        .end() // Restores the selection to all h3s in #content
    .eq( 0 )
        .html( "new text for the first h3!" );

--------------------
DOM Traversal
You can search for elements up and down the DOM tree. There are many methods to search for parents, siblings, and children
that you can read about. A few examples:

<div class="grandparent">
    <div class="parent">
        <div class="child">
            <span class="subchild"></span>
        </div>
    </div>
    <div class="surrogateParent1"></div>
    <div class="surrogateParent2"></div>
</div>

// Parents - Selecting all the parents of an element that match a given selector:
// returns [ div.parent ]
$( "span.subchild" ).parents( "div.parent" );

// Siblings - Find the next or previous sibling
// returns [ div.surrogateParent1 ]
$( "div.parent" ).next();

// Children, Grandchildren - Search down the tree
// returns [ div.child, div.parent, div.surrogateParent1, div.surrogateParent2 ]
$( "div.grandparent" ).find( "div" );

---------------------------
Animations
jQuery has convenience methods for basic animation. Most of the time, you should do animations using CSS,
 but jQuery animations are used quite often.

HTML:
<html>
  <head>
    <link id="" rel="stylesheet" href="main.css" media="screen" title="no title" charset="utf-8">
  </head>
  <body>
      <div id="box"></div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
      <script src="main.js" charset="utf-8"></script>
  </body>
</html>

CSS:
#box {
  background-color: aqua;
  width: 300px;
  height: 200px;
  margin: 200px auto;
}

JS:
//Animate fade out
$('#box').fadeOut();

//Animate fadeIn
$('#box').fadeIn();

//Slide and remove element
$('#box').slideUp('slow');

// Custom effects with .animate()
$( "#box" ).animate(

	//properties to animate
	{opacity: 0.25},

    // Duration
    300,

    // Callback to invoke when the animation is finished
    function() {
        console.log( "done!" );
    }
);
----
jQuery Plugins
jQuery lets you extend it:

$.fn.greenify = function() {
    this.css( "color", "green" );
};

$( "a" ).greenify();
```
You can download and use many jQuery plugins. Problems:
You don't know what they're actually doing.
They don't know what each other are doing

jQueryUI
Is a library of plugins that let you create UI widgets

Datepicker
autocomplete
menu
progress bar
etc.
You can install jQueryUI manually into your project by downloading it directly from the jQueryUI website
or
you can utilize a CDN (recommended)
