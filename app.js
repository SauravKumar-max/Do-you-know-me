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


  function quiz(questionGiven, answerGiven) {

    var useranswer = readlineSync.question(questionGiven + " ");
  
    if (useranswer.toUpperCase() === answerGiven.toUpperCase()) {
      score = score + 1;
      console.log('You are right.')
      console.log('Your Score:', score);
      console.log("----------------------------");
  
    } else {
      console.log('You are wrong, correct answer is:', answerGiven);
      console.log('Your Score:', score);
      console.log("----------------------------");
    }
  }


  for (var i = 0; i < qnaData.length; i++) {
    var questionAsked = qnaData[i];
    quiz(questionAsked.question, questionAsked.answer);
    if (i == qnaData.length - 1) {
      console.log(" Your Final Score is: ", score);
      console.log("--------------END------------");
    }
  }