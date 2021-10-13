var val = [];
candidates = document.querySelector(".candidates");
candidate = candidates.querySelectorAll(".candidate");
var perform1 = [];
for (let i = 0; i < candidate.length; i++) {
    var po = candidate[i].querySelector("span").innerHTML;
    perform1.push(po);
}
console.log(perform1);
opt = candidate[0].querySelector("select");
for (var i = 0; i < opt.length; i++) {
    val[`${opt[i].value}`] = i;
}
console.log(opt.length);
console.log(val);
innerHTML = "";
var output = [];

for (let i = 0; i < candidate.length; i++) {
    output.push(Array(opt.length).fill(0))
}
var s = "";
for (let i = 0; i < candidate.length; i++) {
    candidate[i].querySelector("button").onclick = function() {
        let value = candidate[i].querySelector("select").value;
        if (!output[i][val[value]]) {
            output[i][val[value]] = 1;
        }
    }
}
mainstage = document.querySelector(".mainstage").querySelectorAll("div");
for (let p = 0; p < mainstage.length; p++) {
    let stage1 = document.querySelector(`.stage${p+1}`);
    stage1.querySelector("button").onclick = function() {
        let value = stage1.querySelector("select").value;
        let i = val[value];
        for (let k = 0; k < opt.length; k++) {
            if (output[k][i] == 1) {
                comeToStage(`stage${p+1}`, value, perform(perform1[k], value));
            }
        }
        stage1.querySelector(`#stage${p+1}`).innerHTML = innerHTML;
        innerHTML = ""
    }

}

function perform(performerName, performerAct) {
    return " & " + performerName + " is ready to do " + performerAct;
}

function comeToStage(stageName, activityName, perform) {
    this.innerHTML = this.innerHTML + "<br>" + stageName + " is reserved for activity " + activityName + perform;
}