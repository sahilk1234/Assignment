const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
]);

//task 1
var events = [];
var eventm = [];
gameEvents.forEach((val, key) => {
    if (!eventm[val]) {
        eventm[val] = 1;
        events.push(val);
    }
})
console.log("different events happened:" + events);
//task 2
gameEvents.forEach((val, key) => {
    if (key >= 64 && val == "Yellow card") {
        gameEvents.delete(key);
    }
})
console.log("task 2 after deletion:")
console.log(gameEvents);
//task 3
var average = 0;
var cnt = 0;
temp = 0;
gameEvents.forEach((val, key) => {
    if (key < 90) {
        average += (key - temp);

    } else {
        average += (90 - temp);
        average += (key - 90);
    }
    temp = key;
    cnt++;
})
console.log(" task 3:average:" + average / cnt);
//task 4
console.log("task 4:")
gameEvents.forEach((val, key) => {
    if (key > 45) {
        console.log(`[second half]${key}:${val}`);
    } else {
        console.log(`[first half]${key}:${val}`);
    }
})