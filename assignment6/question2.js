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

var scoredg = game.scored;
for (let i = 0; i < scoredg.length; i++) {
    console.log(`Goal ${i+1}:${scoredg[i]}`);
}

var oddarr = game.odds;
var averageodd = 0;
for (var val in oddarr) {
    averageodd += oddarr[val];
}
console.log("average odd:" + averageodd / 3);
for (var val in oddarr) {
    if (val === "x") {
        console.log("Odd of draw:" + oddarr[val]);
    } else {
        console.log(`odd of victory${game[val]}:${oddarr[val]}`);
    }

}