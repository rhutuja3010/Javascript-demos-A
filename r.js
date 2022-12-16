// var a=null
// console.log(Boolean(a))

// var n=require("readline-sync")
// var name1 = ("user input :");
var n=require("readline-sync")
var name1=n.question("enter user :")
// let text = "Hello World!";
// let result = text.toUpperCase();
for (var i = 0, _pj_a = name1.length; i < _pj_a; i += 1) {
  console.log(name1[i].toUpperCase());

  if (i === name1.length - 1) {
    console.log(name1[i].toLowerCase() * i);
  } else {
    console.log(name1[i].toLowerCase() * i);
  }
}