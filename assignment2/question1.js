var arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function(k) {
        console.log('The index of this number is: ' + k);
    }, 2000, i);
}