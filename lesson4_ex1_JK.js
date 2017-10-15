function outer(){
  var a = "hello";
  var b = {
    name: "mike"
  };
  console.log(a);
  console.log(b);
  function inner() {
    var a = "buhbye"
    var b = {
      name: "charlie"
    }
   console.log(a);
   console.log(b);
  }

  inner(a,b);
  console.log(a);
  console.log(b);
}

outer();
