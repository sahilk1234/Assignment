a = [2, 4, 8, 9, 10, 2, 5, 10, 12, 89];
var output = [];
var k = 0;
var map = [];
a.sort((a, b) => a - b);
for (let i = 0; i < a.length; i++) {
    if (map[a[i]] != 1) {
        output.push(a[i]);
        map[a[i]] = 1;
    }
}
console.log("question3:" + output);