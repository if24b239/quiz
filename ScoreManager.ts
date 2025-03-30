import { QuestionData } from './QuestionType';
import LeaderBoard from './LeaderBoard.json';
import { promises as fs } from 'fs';

interface data {
    user: string,
    score: number
}

export async function addScore(user: string, score: number) {
    try {
        // get existing data
        const existing = await fs.readFile('LeaderBoard.json', 'utf-8');
        var dahta: data[] = JSON.parse(existing);
        var hit: boolean = false;

        // adds score if user exists
        dahta.forEach(element => {
            if (element.user === user && !hit) {
                element.score += score;
                hit = true;
                return;
            }
        });

        // creates new user if user doesnt exist
        if (hit) {
            dahta.push({ user: user, score: score });
        }

        //write dahta into datadata
        await fs.writeFile('LeaderBoard.json', JSON.stringify(dahta, null, 2));

    } catch (error) {
        console.error("Error writing and or reading file");
    }
}

export function displayLeaderboard(): any {

}

export function performance(questions: QuestionData[], answers: number[]): number {

    return 1;
}

