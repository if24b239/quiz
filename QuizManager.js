"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadQuestions = void 0;
const Questions_json_1 = __importDefault(require("./Questions.json"));
// help (╥﹏╥)
function getRandomElements(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // Return first 'count' elements
    return shuffled.slice(0, 5);
}
function loadQuestions(diff) {
    var randomQuestions = [];
    switch (diff) {
        case "easy":
            randomQuestions = getRandomElements(Questions_json_1.default.easy);
            break;
        case "medium":
            randomQuestions = getRandomElements(Questions_json_1.default.medium);
            break;
        case "hard":
            randomQuestions = getRandomElements(Questions_json_1.default.hard);
            break;
        default:
            console.error("idiot");
            break;
    }
    return randomQuestions;
}
exports.loadQuestions = loadQuestions;
;
Questions_json_1.default.easy.forEach((element) => {
});
