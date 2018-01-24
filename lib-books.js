function book(name,author,genre){
  this.name=name;
  this.author=author;
  this.genre=genre;
}
var list="numberofbooks";
var list1=prompt("Hii.what do you want?");
if(list1==list){
  alert("number of books in the library are=3");
}else{
  alert("sorry!i didnt get you.press enter to get a book details");
}
book.prototype.details=function(){
  return "Name: " +this.name+"<br/>"+"Author: "+this.author+"<br/>"+"Genre: "+this.genre;
 }
var book1=new book("live-love-laugh","deepikapadukone","motivational");
 var book2=new book("life-of-a-champion","ranveersingh","motivational");
var book3=new book("I-too-had-a-love-story","james","lovestory");
var box=prompt("enter the name of the book.(eg:book1,book2)");
switch(box){
  case"book1": document.write(book1.details());
              break;
  case "book2": document.write(book2.details());
              break;
  case "book3": document.write(book3.details());
              break;
  default: document.write("sorry!this book doesn't exits");  
}







