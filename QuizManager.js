var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// help (╥﹏╥)
function getRandomElements(array, diff) {
    console.log(array, diff);
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    console.log(shuffled, diff);
    // Return first 'count' elements
    return shuffled.slice(0, 5).map((q) => {
        return {
            question: q.question,
            answers: q.answers,
            correctIndex: q.correctIndex,
            diff: diff
        };
    });
}
export function loadQuestions(diff) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('./Questions.json');
        const QuestionJSON = yield response.json();
        var randomQuestions = [];
        switch (diff) {
            case "easy":
                randomQuestions = getRandomElements(QuestionJSON.easy, 0);
                break;
            case "medium":
                randomQuestions = getRandomElements(QuestionJSON.medium, 1);
                break;
            case "hard":
                randomQuestions = getRandomElements(QuestionJSON.hard, 2);
                break;
            default:
                console.error("idiot");
                break;
        }
        return randomQuestions;
    });
}
;
