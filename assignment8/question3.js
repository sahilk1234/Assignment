var calcAverageHumanAge = (array) => {
    var cnt = 0;
    var output = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 2) {
            output += (16 + (array[i] * 4));
            cnt++;
        }
    }
    console.log(output / cnt);
}


calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);