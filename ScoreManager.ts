import { QuestionData } from './QuestionType';
import LeaderBoard from './LeaderBoard.json';
import { promises as fs } from 'fs';

interface data {
    user: string,
    score: number
}

let leaderboard: data[] = [];

export function addScore(user: string, score: number) {
    
    let hit: Boolean = false;

    leaderboard.forEach(element => {
        if ( element.user === user) {
            element.score += score;
            hit = true;
            return;
        }
    });

    if (hit) return;

    leaderboard.push({
        user: user,
        score: score
    })
}

export function displayLeaderboard(): HTMLDivElement {
    let div = document.createElement('div');
    
    let sorted_leaderboard = leaderboard.sort((a, b) => b.score - a.score);

    sorted_leaderboard.forEach(element => {
        div.innerHTML += element.user + ": " + element.score + "<br>";
    });

    return div;
}

export function performance(questions: QuestionData[], answers: number[]): number {

    return 1;
}

