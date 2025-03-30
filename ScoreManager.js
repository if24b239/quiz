let leaderboard = [];
export function addScore(user, score) {
    let hit = false;
    leaderboard.forEach(element => {
        if (element.user === user) {
            element.score += score;
            hit = true;
            return;
        }
    });
    if (hit)
        return;
    leaderboard.push({
        user: user,
        score: score
    });
}
export function displayLeaderboard() {
    let div = document.createElement('div');
    let sorted_leaderboard = leaderboard.sort((a, b) => b.score - a.score);
    sorted_leaderboard.forEach(element => {
        div.innerHTML += element.user + ": " + element.score + "<br>";
    });
    return div;
}
export function performance(questions, answers) {
    return 1;
}
