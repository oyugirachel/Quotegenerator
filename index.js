// Created by Rachel oyugi

alert("Keep enjoying the quotes😂😂😂")
var quotes=[


{"quoteText":"Act as if what you do makes a difference",
"Author":"William James"}
,
{"quoteText":"Success is not final, failure is not fatal: it is the courage to continue that counts",
"Author" :"Winston Churchill"}
,
{"quoteText":"Never bend your head. Always hold it high. Look the world straight in the eye.",
"Author":"Helen Keller"}
,

{"quoteText" :"It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
"Author":"William James"}
,
{"quoteText":"Life is like riding a bicycle. To keep your balance, you must keep moving",
"Author":"Albert Einstein"}
,
{"quoteText":"Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
"Author":"Ella Fitzgerald"}
,
{"quoteText":"Limit your always  and your nevers ",
"Author":"Amy Poehler​​"}
,
{"quoteText":"Nothing is impossible. The word itself says I'm possible!",
"Author":"Audrey Hepburn"}
,
{"quoteText":"You are never too old to set another goal or to dream a new dream.",
"Author":"C.S. Lewis"}
,
{"quoteText":"Try to be a rainbow in someone else's cloud.",
"Author":"Maya Angelou"}
,
{"quoteText":"You do not find the happy life. You make it",
"Author":"Camilla Eyring Kimball"}
,
{"quoteText":"Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
"Author":"Deep Roy"}


,
];

function changeColor(){
  var color=["#7FF00","#FF7F50","#DC143C","#0FFFF","#B8860B","#006400","#B008B","#483D8B","#FF00FF","#4B0082","#FFDEAD","#DAA520"];
  var c=color[Math.floor(Math.random()*color.length)];
  $('body').css('background-color',c);
  $('.btn').css('background-color',c);
  $('.txt ,.fa-quote-left').css('color',c);
}

function myFunction(){
  var a=Math.floor(Math.random()*quotes.length);
  
  $("#text").text(quotes[a].quoteText);
  $("#author").text('-'+quotes[a].Author);
  
  $("#quotes-box").effect('bounce'); 
}


$(document).ready(function(){
  myFunction();
  changeColor();
 
  $("#button").on("click",function(){
    myFunction();
    changeColor();   
  });
  
  $("#tweet-me").on("click",function(){
    var quote=$("p").text();
    window.open("https://twitter.com/intent/tweet?text="+quote);
  });
});