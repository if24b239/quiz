var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d, _e, _f;
import { loadQuestions } from "./QuizManager.js";
import { displayQuestion } from "./QuestionRenderer.js";
var allQuestions = [];
export let currentQuestion = 0;
export let answers = [-1, -1, -1, -1, -1];
function initQuestions(diff) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            answers = [-1, -1, -1, -1, -1];
            allQuestions = yield loadQuestions(diff);
            console.log("Questions loaded");
        }
        catch (error) {
            console.log("bitch");
        }
    });
}
(_a = document.getElementById('starteasy')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (event) => __awaiter(void 0, void 0, void 0, function* () {
    yield initQuestions("easy");
    currentQuestion = 0;
    displayQuestion(allQuestions, currentQuestion);
}));
(_b = document.getElementById('startmedium')) === null || _b === void 0 ? void 0 : _b.addEventListener("click", (event) => __awaiter(void 0, void 0, void 0, function* () {
    yield initQuestions("medium");
    currentQuestion = 0;
    displayQuestion(allQuestions, currentQuestion);
}));
(_c = document.getElementById('starthard')) === null || _c === void 0 ? void 0 : _c.addEventListener("click", (event) => __awaiter(void 0, void 0, void 0, function* () {
    yield initQuestions("hard");
    currentQuestion = 0;
    displayQuestion(allQuestions, currentQuestion);
}));
// 👂
(_d = document.getElementById('next')) === null || _d === void 0 ? void 0 : _d.addEventListener("click", event => {
    if (currentQuestion >= 4) {
        console.log("MAX");
        return;
    }
    currentQuestion++;
    displayQuestion(allQuestions, currentQuestion);
});
(_e = document.getElementById('last')) === null || _e === void 0 ? void 0 : _e.addEventListener("click", (event) => __awaiter(void 0, void 0, void 0, function* () {
    if (currentQuestion <= 0) {
        console.log("MIN");
        return;
    }
    currentQuestion--;
    displayQuestion(allQuestions, currentQuestion);
}));
(_f = document.getElementById('done')) === null || _f === void 0 ? void 0 : _f.addEventListener("click", event => {
    let diff = allQuestions[0].diff;
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (allQuestions[i].correctIndex === answers[i]) {
            score += 1 + diff;
        }
    }
    console.log(score);
    let username = document.getElementById("user_name").value;
    //addScore(username, score);
});
