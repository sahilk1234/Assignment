const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];
for (let i = 0; i < dogs.length; i++) {
    dogs[i]["recommendedFood"] = ((dogs[i]["weight"] ** 0.75) * 28);
}
var ownersEatTooMuch = [];
var ownersEatTooLittle = [];
var okamountdogs = [];
var isamoutequal = false;
for (let i = 0; i < dogs.length; i++) {
    let owner = dogs[i]["owners"];
    for (let j = 0; j < owner.length; j++) {
        if (owner[j] == "Sarah") {
            if (dogs[i]["curFood"] > dogs[i]["recommendedFood"]) {
                console.log("Sarah's dog eating to much");
            } else {
                console.log("Sarah's dog eating to little")
            }
        }
    }
    if (dogs[i]["curFood"] > (dogs[i]["recommendedFood"] * 0.90) && dogs[i]["curFood"] < (dogs[i]["recommendedFood"] * 1.10)) {
        okamountdogs.push(dogs[i]);
    }
    if (dogs[i]["curFood"] == dogs[i]["recommendedFood"]) {
        if (isamoutequal == false) {
            isamoutequal = true;
        }
    }
    if (dogs[i]["curFood"] > dogs[i]["recommendedFood"]) {
        for (var j = 0; j < owner.length; j++) {
            ownersEatTooMuch.push(owner[j]);
        }
    } else {
        for (var j = 0; j < owner.length; j++) {
            ownersEatTooLittle.push(owner[j]);
        }
    }
}
var eatToolittleString = "";
for (var i = 0; i < ownersEatTooLittle.length - 1; i++) {
    eatToolittleString += `${ownersEatTooLittle[i]} and `;
}
eatToolittleString += `${ownersEatTooLittle[ownersEatTooLittle.length-1]}'s dogs eat too little!`;
var eatTooMuchString = "";
for (var i = 0; i < ownersEatTooMuch.length - 1; i++) {
    eatTooMuchString += `${ownersEatTooMuch[i]} and `;
}
eatTooMuchString += `${ownersEatTooMuch[ownersEatTooMuch.length-1]}'s dogs eat too much!`;
console.log(eatToolittleString);
console.log(eatTooMuchString);
console.log("whether there is any dog eating exactly the amount of food that is recommended:" + isamoutequal);
if (okamountdogs.length > 0) {
    console.log("whether there is any dog eating an okay amount of food:true");
} else {
    console.log("whether there is any dog eating an okay amount of food:false");
}
console.log(okamountdogs);
var dogtarray = dogs;
dogtarray.sort((a, b) => {
    return a.curFood - b.curFood;
});
console.log("sorted on curfood:");
console.log(dogtarray);