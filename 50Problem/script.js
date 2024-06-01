// step-1: making a question
const questions = [
  {
    question: "What is your name?",
    options: ["Ram", "Sita", "Gita", "Mita"],
    answer: "Gita",
  },
  {
    question: "What is your age?",
    options: ["12", "13", "14", "50"],
    answer: "12",
  },
];

// step-2: targeting elements
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, #option_1, #option_2, #option_3, #option_4"
  );

const submitBtn = document.querySelector("#submit");
let currentQuiz = 0;
let score = 0;

// step-3: load quiz function
const loadQuiz = () => {
  const { question, options, answer } = questions[currentQuiz];
  questionElm.innerText = question;
  options.forEach((option, index) => {
    return (window[`option_${index + 1}`].innerText = option);
  });
};
loadQuiz();

// step-4: get the answer here

function getSelectedOption() {
  // let ans_index;
  // answerElm.forEach((curOption, index) => {
  //   if (curOption.checked) {
  //     ans_index = index;
  //   }
  // });
  // return ans_index;
  let answerElement = Array.from(answerElm);
  return answerElement.findIndex((curElem) => curElem.checked);
}

function deSelected() {
  answerElm.forEach((currElm) => (currElm.checked = false));
}

submitBtn.addEventListener("click", () => {
  const { options, answer } = questions[currentQuiz];
  const selectedOptionIndex = getSelectedOption();
  if (options[selectedOptionIndex] === answer) {
    score++;
  }

  if (currentQuiz < questions.length - 1) {
    currentQuiz++;
    deSelected();
    loadQuiz();
  } else {
    console.log(`Your score is ${score}`);
  }
});
