var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("Hello, What is your name? ");

console.log("Hello " + userName + ", lets see how much you know Saurav");
console.log("-------------------START-------------------");

var qnaData = [
    {
      question: "Where do i live?\n",
      answer: "Hazaribagh"
    },
    {
      question: "What is my favourite fast food?\n",
      answer: "Samosa"
    },
    {
      question: "Who is my favourite Superhero?\n",
      answer: "Flash"
    },
    {
      question: "Which is my favourite Anime?\n",
      answer: "Hunter X Hunter"
    }
  ];