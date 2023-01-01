const questions = [
  {
    Que: "Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    C: "JavaScript",
    d: "PHP",
    Correct: "a",
  },
  {
    Que: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    C: "1994",
    d: "none of the above",
    Correct: "b",
  },
  {
    Que: "What does CSS stands for?",
    a: "Hypertext markup language",
    b: "Cascading style sheet",
    C: "Json Object Notation",
    d: "Python",
    Correct: "b",
  },
  {
    Que: "What does HTML stands for?",
    a: "Hypertext markup language",
    b: "Cascading style sheet",
    C: "Json Object Notation",
    d: "Python",
    Correct: "a",
  },
];
let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  //   const data = question[index];
  //   console.log(data);
  const data = questions[index];
  quesBox.innerText = `${index + 1})${data.Que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};
const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};
const getAnswer = () => {
  let getAnswer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      //   console.log("yes");
      answer = input.value;
    } else {
      console.log("no");
    }
  });
  return answer;
};
const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};
const endQuiz = () => {
  document.getElementById("box").innerHTML = `
        <h3>Thank you for playing the quiz</h3>
        <h2>$(right)/$(total)are correct</h2>
    `;
};
//initial  call
loadQuestion();
