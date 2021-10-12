Object.prototype.isrectangle = function() {
    if (this.a === this.b) {
        return true;
    } else {
        return false;
    }
}

function rectangle(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}
var rect1 = new rectangle(4, 4, 4, 4);
var rect2 = new rectangle(4, 8, 4, 8);
console.log(rect1.isrectangle());
console.log(rect2.isrectangle());