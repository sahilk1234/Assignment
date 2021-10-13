function checkDogs(julia, kate) {
    var tjulia = julia;
    tjulia.pop();
    tjulia.pop();
    tjulia.shift();
    var array = [];
    for (let i = 0; i < julia.length; i++) {
        array.push(julia[i]);
    }
    for (let i = 0; i < kate.length; i++) {
        array.push(kate[i]);
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 3) {
            console.log(`Dog number ${i+1} is still a puppy`)
        } else {
            console.log(`Dog number ${i+1} is an adult, and is ${array[i]} years old"`);
        }
    }
}
console.log("test case 1:")
var julia1 = [3, 5, 2, 12, 7];
var kate1 = [4, 1, 15, 8, 3];
checkDogs(julia1, kate1);
console.log("test case 2:")
var julia2 = [9, 16, 6, 8, 3];
var kate2 = [10, 5, 6, 1, 4];
checkDogs(julia2, kate2);