//                  Exercise 1: REST
// Create buttons that do each of the tasks below
// Render the results to the page in html elements.
// Hide the results from the previous actions
// Get all posts
// Get post with id of 10
// Get the comments from post with id of 12
// note: comments are part of a different data model, you'll need to structure your endpoint to ask for all of the comments that belong to post #12
// Get all the posts from user with id of 2
// Create a new post and log the id generated for it by the server
// Replace the post with id of 12 and render the responseJSON
// Update the title of post with id of 12 and render responseJSON
// Delete the post with id of 12 and render a success message
// Display a list of posts.
// When the user clicks on a post, display all the comments from that post
// Display a link back to all posts

//Get all posts
$("#button1").on('click', function () {
  $.get("https://jsonplaceholder.typicode.com/posts", function(stuff) {
    console.log(stuff);
    var list = $('#11');
    stuff.forEach(function(post){
      var li = $('<li></li>');
      li.text(post.title);
      list.append(li);
    })
  })
})
//Get post with id of 10
$("#button2").on('click', function () {
  $.get("https://jsonplaceholder.typicode.com/posts", function(stuff) {
    console.log(stuff);
    var list = $('#11');
    stuff.forEach(function(post){
      var li = $('<li></li>');
      if (post.id === 10) {
        li.text(post.id + ' ' + post.title);
        list.append(li);
    }
    })
  })
})
//Get the comments from post with id of 12  note: comments are part of a different data model, you'll need to structure your endpoint to ask for all of the comments that belong to post #12
$("#button3").on('click', function () {
  $.get("https://jsonplaceholder.typicode.com/comments", function(stuff) {
    console.log(stuff);
    var list = $('#11');
    stuff.forEach(function(comment){
      var li = $('<li></li>');
      if (comment.postId === 12) {
        li.text(comment.postId + ' ' + comment.name + ' ' + comment.body);
        list.append(li);
    }
    })
  })
})
//Get all the posts from user with id of 2
$("#button4").on('click', function () {
  $.get("https://jsonplaceholder.typicode.com/posts?userId=2", function(stuff) {
    console.log(stuff);
    var list = $('#11');
    stuff.forEach(function(post){
      var li = $('<li></li>');
      li.text(post.title);
      list.append(li);
    })
  })
})

//Create a new post and log the id generated for it by the server

$("#button5").on('click', function () {
  var newPostTitle = prompt("Add new post title here");
  var newPostBody = prompt("Add new post body here");
  var titleData = new FormData();
  var bodyData = new FormData();
  bodyData.append( "json", JSON.stringify(newPostBody) );
  titleData.append( "json", JSON.stringify(newPostTitle) );

  fetch("https://jsonplaceholder.typicode.com/posts",
  {
    method: "POST",
    title: titleData,
    body: bodyData
  })
  .then(function(res){
    return res.json();
    console.log(res.json());  //why doesn't log this work?
  })
  .then(function(data){ alert( JSON.stringify( data.id ) );
  });
  // .then(function(data){ console.log( data.id );  <--log also doesnt work here
  // });
})

//Replace the post with id of 12 and render the responseJSON

$("#button6").on('click', function () {
  var newPost = prompt("Add replacement post body here");
  var data = new FormData();
  data.append( "json", JSON.stringify(newPost) );

  fetch("https://jsonplaceholder.typicode.com/posts/12",
  {
    method: "PUT",
    body: data
  })
  .then(function(res){ return res.json();
  })
  .then(function(data){ alert( JSON.stringify( data ) );
  });
  // .then(function(data){ console.log( data );
  // });
})

//Update the title of post with id of 12 and render responseJSON

$("#button7").on('click', function () {
  var newPost12Title = prompt("Add new title of post12 here");
  var titleData = new FormData();
  titleData.append( "json", JSON.stringify(newPost12Title) );

  fetch("https://jsonplaceholder.typicode.com/posts/12",
  {
    method: "PUT",
    title: titleData
  })
  .then(function(res){ return res.json();
  })
  .then(function(data){ alert( JSON.stringify( data ) );
  });
  // .then(function(data){ console.log( data );
  // });
})

//Delete the post with id of 12 and render a success message

$("#button8").on('click', function () {

  fetch("https://jsonplaceholder.typicode.com/posts/12",
  {
    method: "DELETE",
  })
  .then(function(res){ return res.json() + " success";
  })
  .then(function(data){ alert( JSON.stringify( data ) );
  });
  // .then(function(data){ console.log( data );
  // });
})

// Display a list of posts.
// When the user clicks on a post, display all the comments from that post
// Display a link back to all posts

$("#button9").on('click', function () {
  $.get("https://jsonplaceholder.typicode.com/posts", function(stuff) {
    console.log(stuff);
    var list = $('#11');
    stuff.forEach(function(post){
      var li = $('<li></li>');
      if (post.id === 10) {
        li.text(post.id + ' ' + post.title);
        list.append(li);
        $("#button10").on('click for comments', function (list) {  //not working
        })
      }
    })
  })
})


//          ANSWERS

// // 1) Get all posts
// $.get('http://jsonplaceholder.typicode.com/posts', function(data){
// 	console.log(data);
// });
//
// // 2) Get post with id of 10
// $.get('http://jsonplaceholder.typicode.com/post/10', function(data){
// 	console.log(data);
// });
//
// // 3) Get the comments from post with id of 12
// $.get('http://jsonplaceholder.typicode.com/post/12/comments', function(data){
// 	console.log(data);
// });
//
// // 4) Get all the posts from user with id of 2
// $.get('http://jsonplaceholder.typicode.com/user/2/posts', function(data){
// 	console.log(data);
// });
//
// // 5) Create a new post and log the id generated for it by the server
// $.post('http://jsonplaceholder.typicode.com/posts',{
// 	userId: 1,
// 	title: "My New Post",
// 	body: "This is the body"
// }, function(data){
// 	console.log(data.id)
// })
//
// // 6) Replace the post with id of 12
// $.ajax({
// 	method: 'PUT',
// 	url: 'http://jsonplaceholder.typicode.com/posts/12',
// 	data: {
// 		userId: 1,
// 		title: "New Post",
// 		body: "New post added"
// 	},
// 	complete: function(response){
// 		console.log(response.responseJSON);
// 	}
// })
//
// // 7) Update the title field of the post with id of 12
// $.ajax({
// 	method: 'PATCH',
// 	url: 'http://jsonplaceholder.typicode.com/posts/12',
// 	data: {
// title: "patched it"
// },
// 	complete: function(response){
// 		console.log(response.responseJSON);
// 	}
// })
//
// // 8) Delete the post with id of 12
// $.ajax({
// 	method: 'DELETE',
// 	url: 'http://jsonplaceholder.typicode.com/posts/12',
// 	complete: function(response){
// 		console.log(response.statusText);
// 	}
// })
