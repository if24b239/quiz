import { Question } from './QuestionType';
import { QuestionData } from './QuestionType';

// help (╥﹏╥)
function getRandomElements(array: Question[], diff: number): QuestionData[] {
    console.log(array, diff);
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    console.log(shuffled, diff);
    // Return first 'count' elements
    return shuffled.slice(0, 5).map((q: Question): QuestionData => {
        return {
            question: q.question,
            answers: q.answers,
            correctIndex: q.correctIndex,
            diff: diff
        }
    });

}

export async function loadQuestions(diff: string): Promise<QuestionData[]> {

    const response = await fetch('./Questions.json');
    const QuestionJSON = await response.json();

    var randomQuestions: QuestionData[] = [];

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
};