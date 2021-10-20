a = [2, 4, 8, 9, 10, 2, 5, 10, 12, 89];
a.sort((a, b) => a - b);
arrMap = [];
a = a.filter((ele) => {
    if (!arrMap[ele]) {
        arrMap[ele] = 1;
        return true;
    }
    return false;
});
console.log("question3:" + a);