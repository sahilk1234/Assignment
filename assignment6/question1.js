const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'
    ],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//task 1
player1 = game.players[0];
player2 = game.players[1];
console.log("task1");
console.log(player1);
console.log(player2);
//task 2
console.log("task 2");
gk = player1[0];
fieldPlayer = player1;
fieldPlayer.shift();
console.log("goal keeper:" + gk);
console.log("field players:" + fieldPlayer);
//task 3
console.log("task 3");
allPlayer = player1;
player2.forEach(element => {
    allPlayer.push(element);
});
console.log(allPlayer);
//task 4
console.log("task 4")
players1Fina = player1;
players1Fina.push("Thiago");
players1Fina.push("Coutinho");
players1Fina.push("Perisic")
console.log(players1Fina);

//task 6
function printGoals(...arg) {
    var playergoal = game.scored;
    for (var val of arg) {
        var count = 0;
        for (let i = 0; i < playergoal.length; i++) {
            if (val === playergoal[i]) {
                count++;
            }
        }
        console.log(val + ":" + count);
    }
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
//task 7
function godd(n) {
    function sodd(m) {
        return m > n
    }
    return sodd;
}
var outputodd = godd(game.odds.team1);
if (outputodd(game.odds.team2) == true) {
    console.log("odd winner" + game.team1);
} else {
    console.log("odd winner:" + game.team2);
}