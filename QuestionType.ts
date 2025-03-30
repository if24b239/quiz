import { loadQuestions } from "./QuizManager";

export interface Question {
    question: string;
    answers: string[];
    correctIndex: number;
}

export interface QuestionData extends Question {
    diff: number;
}