const jsQuizQuestionsAll = [
  {
    question:
      "What will be the output of the following code?\n\nlet a = 10;\nconst a = 10;\nconsole.log(a);",
    options: [
      { id: 1, text: "10", isCorrect: false },
      { id: 2, text: "Error: Variable a is already declared", isCorrect: true },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "null", isCorrect: false },
    ],
  },
  {
    question:
      "What will be the output of the following code?\n\nlet a = 5;\nlet b = 10;\nconsole.log(a + b);",
    options: [
      { id: 1, text: "15", isCorrect: true },
      { id: 2, text: "510", isCorrect: false },
      { id: 3, text: "NaN", isCorrect: false },
      { id: 4, text: "undefined", isCorrect: false },
    ],
  },
  {
    question: "What does the 'let' keyword do in JavaScript?",
    options: [
      { id: 1, text: "Creates a constant variable", isCorrect: false },
      { id: 2, text: "Creates a block-scoped variable", isCorrect: true },
      { id: 3, text: "Creates a global variable", isCorrect: false },
      { id: 4, text: "Creates a function", isCorrect: false },
    ],
  },
  {
    question: "What is the result of 2 + '2' in JavaScript?",
    options: [
      { id: 1, text: "22", isCorrect: true },
      { id: 2, text: "4", isCorrect: false },
      { id: 3, text: "NaN", isCorrect: false },
      { id: 4, text: "undefined", isCorrect: false },
    ],
  },
  {
    question:
      "What will be the output of the following code?\n\nconsole.log( typeof NaN );",
    options: [
      { id: 1, text: "number", isCorrect: true },
      { id: 2, text: "NaN", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "object", isCorrect: false },
    ],
  },
  {
    question:
      "Which of the following methods can be used to add elements to an array in JavaScript?",
    options: [
      { id: 1, text: "push()", isCorrect: true },
      { id: 2, text: "concat()", isCorrect: false },
      { id: 3, text: "splice()", isCorrect: false },
      { id: 4, text: "pop()", isCorrect: false },
    ],
  },
  {
    question:
      "What will be the output of the following code?\n\nconst obj = { a: 1, b: 2 }; \nconsole.log(obj.c);",
    options: [
      { id: 1, text: "undefined", isCorrect: true },
      { id: 2, text: "null", isCorrect: false },
      { id: 3, text: "Error", isCorrect: false },
      { id: 4, text: "NaN", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: [
      { id: 1, text: "Refers to the global object", isCorrect: false },
      { id: 2, text: "Refers to the object that called the function", isCorrect: true },
      { id: 3, text: "Refers to the function itself", isCorrect: false },
      { id: 4, text: "Refers to the constructor function", isCorrect: false },
    ],
  },
  {
    question: "Which method is used to convert a JSON string into an object in JavaScript?",
    options: [
      { id: 1, text: "JSON.parse()", isCorrect: true },
      { id: 2, text: "JSON.stringify()", isCorrect: false },
      { id: 3, text: "JSON.toObject()", isCorrect: false },
      { id: 4, text: "parseJSON()", isCorrect: false },
    ],
  },
  {
    question: "What does '===' operator do in JavaScript?",
    options: [
      { id: 1, text: "Compares both value and type", isCorrect: true },
      { id: 2, text: "Compares only the value", isCorrect: false },
      { id: 3, text: "Assigns a value", isCorrect: false },
      { id: 4, text: "Checks equality after type coercion", isCorrect: false },
    ],
  },
  {
    question: "What is the result of the following code?\n\nconsole.log([] == []);",
    options: [
      { id: 1, text: "true", isCorrect: false },
      { id: 2, text: "false", isCorrect: true },
      { id: 3, text: "undefined", isCorrect: false },
      { id: 4, text: "NaN", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is not a valid way to define a function in JavaScript?",
    options: [
      { id: 1, text: "function myFunction() {}", isCorrect: false },
      { id: 2, text: "let myFunction = function() {}", isCorrect: false },
      { id: 3, text: "const myFunction = () => {}", isCorrect: false },
      { id: 4, text: "function: myFunction() {}", isCorrect: true },
    ],
  },
  {
    question: "What is the purpose of the 'setTimeout()' function in JavaScript?",
    options: [
      { id: 1, text: "Delays the execution of a function", isCorrect: true },
      { id: 2, text: "Sets a timer", isCorrect: false },
      { id: 3, text: "Repeats a function at regular intervals", isCorrect: false },
      { id: 4, text: "Clears the function execution", isCorrect: false },
    ],
  },
];


export const jsQuizQuestions = [];

for (let i = 0; i < 5; i++){
  let randomQuestion;
  // If the question is already in the array don't add it again do +
  do {
    randomQuestion = jsQuizQuestionsAll[Math.floor(Math.random() * jsQuizQuestionsAll.length)]
  }
  while(jsQuizQuestions.includes(randomQuestion)){
    jsQuizQuestions.push(randomQuestion);
  }
}