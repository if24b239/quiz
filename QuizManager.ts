import { Question } from './QuestionType'
import QuestionJSON from './Questions.json';

// help (╥﹏╥)
function getRandomElements(array: Question[]): Question[] {
    
    const shuffled = [...array];
    
    
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Return first 'count' elements
    return shuffled.slice(0, 5);
}



export function loadQuestions(diff: string): Question[] {

    var randomQuestions : Question[] = [];

    switch (diff) {
        case "easy":
            randomQuestions = getRandomElements(QuestionJSON.easy);
            break;
        case "medium":
            randomQuestions = getRandomElements(QuestionJSON.medium);
            break;
        case "hard":
            randomQuestions = getRandomElements(QuestionJSON.hard);
            break;

        default:
            console.error("idiot");
            break;
    }

    return randomQuestions;
};

QuestionJSON.easy.forEach((element: Question) => {
    
});