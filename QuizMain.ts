import { loadQuestions } from "./QuizManager.js";
import { addScore } from "./ScoreManager.js";
import { displayQuestion } from "./QuestionRenderer.js";
import { QuestionData } from "./QuestionType.js";

var allQuestions: QuestionData[] = [];
export let currentQuestion: number = 0;
export let answers: number[] = [-1,-1,-1,-1,-1];

async function initQuestions(diff: string) {
    try {
        answers = [-1, -1, -1, -1, -1];
        allQuestions = await loadQuestions(diff);
        console.log("Questions loaded");
    } catch (error) {
        console.log("bitch");
    }
}

document.getElementById('starteasy')?.addEventListener("click", async event => {

    await initQuestions("easy");

    currentQuestion = 0;
    displayQuestion(allQuestions, currentQuestion);

})

document.getElementById('startmedium')?.addEventListener("click", async event => {

    await initQuestions("medium");

    currentQuestion = 0;
    displayQuestion(allQuestions, currentQuestion);

})

document.getElementById('starthard')?.addEventListener("click", async event => {

    await initQuestions("hard");

    currentQuestion = 0;
    displayQuestion(allQuestions, currentQuestion);

})

// 👂
document.getElementById('next')?.addEventListener("click", event => {
    if (currentQuestion >= 4) {
        console.log("MAX");
        return;
    }
    currentQuestion++;

    displayQuestion(allQuestions, currentQuestion);
});

document.getElementById('last')?.addEventListener("click", async event => {
    if (currentQuestion <= 0) {
        console.log("MIN");
        return;
    }
    currentQuestion--;

    displayQuestion(allQuestions, currentQuestion);
})

document.getElementById('done')?.addEventListener("click", event => {
    let diff: number = allQuestions[0].diff;
    let score: number = 0;

    for (let i = 0; i < answers.length; i++) {
        
        if (allQuestions[i].correctIndex === answers[i]) {
            score += 1 + diff;
        }
    }

    console.log(score);

    let username: string = (document.getElementById("user_name") as HTMLInputElement).value;
    
    //addScore(username, score);
})