import { answers } from "./QuizMain.js";
export function displayQuestion(q, curr) {
    var div = document.getElementById("quizDisplay");
    div.innerText = "";
    const numbering = document.createElement('div');
    numbering.classList.add('lgbg');
    numbering.innerHTML = (curr + 1) + "/5";
    div.appendChild(numbering);
    const questionDisplay = document.createElement('div');
    questionDisplay.innerText = q[curr].question;
    questionDisplay.classList.add("lgbg");
    div.appendChild(questionDisplay);
    //every answer with the same onclick function
    for (let i = 0; i < q[curr].answers.length; i++) {
        const element = q[curr].answers[i];
        const answerDisplay = document.createElement('div');
        answerDisplay.innerText = element;
        answerDisplay.classList.add("answer", "1");
        // add color if an answer has been given already;
        if (answers[curr] === i && answers[curr] !== -1) {
            answerDisplay.classList.add('gbg');
        }
        answerDisplay.addEventListener("click", event => {
            //remove class from all answers
            const allAnswers = document.querySelectorAll('div.answer');
            allAnswers.forEach(btn => btn.classList.remove('gbg'));
            //add bbg class to new selected
            event.currentTarget.classList.add("gbg");
            //add to answers
            answers[curr] = i;
        });
        div.appendChild(answerDisplay);
    }
    return div;
}
