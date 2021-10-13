var val = [];
var perform1 = ["bob", "alice", "jhon"];
val["dance"] = 0;
val["sing"] = 1;
val["act"] = 2;
innerHTML = ""
var output = [Array(3).fill(0), Array(3).fill(0), Array(3).fill(0)];
var s = "";
candidates = document.querySelector(".candidates");
candidate = candidates.querySelectorAll(".candidate");
for (let i = 0; i < candidate.length; i++) {
    candidate[i].querySelector("button").onclick = function() {
        let value = candidate[i].querySelector("select").value;
        if (!output[i][val[value]]) {
            output[i][val[value]] = 1;
        }
    }
}
var stage1 = document.querySelector(".stage1");
stage1.querySelector("button").onclick = function() {
    let value = stage1.querySelector("select").value;
    var i = val[value];
    for (let k = 0; k < 3; k++) {
        if (output[k][i] == 1) {
            comeToStage("stage1", value, perform(perform1[k], value));
        }
    }
    stage1.querySelector("#stage1").innerHTML = innerHTML;
    innerHTML = ""
}
var stage2 = document.querySelector(".stage2");
stage2.querySelector("button").onclick = function() {
    let value = stage2.querySelector("select").value;
    var i = val[value];
    for (let k = 0; k < 3; k++) {
        if (output[k][i] == 1) {
            comeToStage("stage2", value, perform(perform1[k], value));
        }
    }
    stage2.querySelector("#stage2").innerHTML = innerHTML;
    innerHTML = ""
}
var stage3 = document.querySelector(".stage3");
stage3.querySelector("button").onclick = function() {
    let value = stage3.querySelector("select").value;
    var i = val[value];
    for (let k = 0; k < 3; k++) {
        if (output[k][i] == 1) {
            comeToStage("stage3", value, perform(perform1[k], value));
        }
    }
    stage3.querySelector("#stage3").innerHTML = innerHTML;
    innerHTML = ""
}

function perform(performerName, performerAct) {
    return " & " + performerName + " is ready to do " + performerAct;
}

function comeToStage(stageName, activityName, perform) {
    this.innerHTML = this.innerHTML + "<br>" + stageName + " is reserved for activity " + activityName + perform;
}