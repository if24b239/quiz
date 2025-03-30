var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { promises as fs } from 'fs';
export function addScore(user, score) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // get existing data
            const existing = yield fs.readFile('LeaderBoard.json', 'utf-8');
            var dahta = JSON.parse(existing);
            var hit = false;
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
            yield fs.writeFile('LeaderBoard.json', JSON.stringify(dahta, null, 2));
        }
        catch (error) {
            console.error("Error writing and or reading file");
        }
    });
}
export function displayLeaderboard() {
}
export function performance(questions, answers) {
    return 1;
}
