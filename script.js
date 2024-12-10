
// const questions = [
//   {
//     question: "Which is the largest animal in the world?",
//     answers: [
//       { text: "Shark", correct: false },
//       { text: "Blue Whale", correct: true },
//       { text: "Elephant", correct: false },
//       { text: "Giraffe", correct: false },
//     ],
//   },
//   {
//     question: "Which is the largest desert in the world?",
//     answers: [
//       { text: "Kalahari", correct: false },
//       { text: "Gobi", correct: false },
//       { text: "Sahara", correct: false },
//       { text: "Antarctica", correct: true },
//     ],
//   },
//   {
//     question: "Which is the smallest continent in the world?",
//     answers: [
//       { text: "Asia", correct: false },
//       { text: "Australia", correct: true },
//       { text: "Arctic", correct: false },
//       { text: "Africa", correct: false },
//     ],
//   },
//   {
//     question: "Which is the smallest country in the world?",
//     answers: [
//       { text: "Vatican City", correct: true },
//       { text: "Bhutan", correct: false },
//       { text: "Nepal", correct: false },
//       { text: "Sri Lanka", correct: false },
//     ],
//   },
// ];

// const questionElement = document.getElementById("question");
// const answerButton = document.getElementById("answer_button");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//   currentQuestionIndex = 0;
//   score = 0;
//   nextButton.innerHTML = "Next";
//   nextButton.style.display = "none";
//   showQuestion();
// }

// function showQuestion() {
//   const currentQuestion = questions[currentQuestionIndex];
//   let questionNo = currentQuestionIndex + 1;
//   questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//   // Clear existing buttons
//   answerButton.innerHTML = "";

//   currentQuestion.answers.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn");
//     button.addEventListener("click", () => selectAnswer(answer));
//     answerButton.appendChild(button);
//   });
// }

// function selectAnswer(answer) {
//   if (answer.correct) score++;
//   Array.from(answerButton.children).forEach((button) => {
//     button.disabled = true;
//     if (button.innerHTML === answer.text) {
//       button.style.background = answer.correct ? "green" : "red";
//     }
//   });
//   nextButton.style.display = "block";
// }

// nextButton.addEventListener("click", () => {
//   currentQuestionIndex++;
//   if (currentQuestionIndex < questions.length) {
//     showQuestion();
//     nextButton.style.display = "none";
//   } else {
//     questionElement.innerHTML = `Quiz Completed! Your score is ${score}/${questions.length}`;
//     answerButton.innerHTML = "";
//     nextButton.innerHTML = "Try Again";
//     nextButton.style.display = "block";
//   }
// });

// startQuiz();

const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Sri Lanka", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer_button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  nextButton.style.display = "none";
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // Clear existing buttons
  answerButton.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer));
    answerButton.appendChild(button);
  });
}

function selectAnswer(answer) {
  if (answer.correct) score++;
  Array.from(answerButton.children).forEach((button) => {
    button.disabled = true;
    if (button.innerHTML === answer.text) {
      button.style.background = answer.correct ? "green" : "red";
    }
  });
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (nextButton.innerHTML === "Try Again") {
    // Restart the quiz
    startQuiz();
  } else {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
      nextButton.style.display = "none";
    } else {
      // End of the quiz
      questionElement.innerHTML = `Quiz Completed! Your score is ${score}/${questions.length}`;
      answerButton.innerHTML = "";
      nextButton.innerHTML = "Try Again";
      nextButton.style.display = "block";
    }
  }
});

// Start the quiz initially
startQuiz();
