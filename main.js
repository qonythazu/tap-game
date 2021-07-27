var count = 0;
var task = [10, 20, 50, 75, 150, 250, 500, 1000, 10000];
var taskIndex = 0;
var gameDone = false;
var messages = ["Beginner Tapper", "Upper Beginner Tapper", "Cowboy Tapper", "Tap Boi", "Tapper Zapper", "Powerful Tapper", "Master Tapper", "Professor Tapper", "KING Tapper"]

var onWin = false;

function tapping() {
    if(!gameDone) {
        count++
        var confirmed = document.getElementById("confirmed");
        confirmed.innerHTML = "Taps Confirmed : " + count;

        if (count === task[taskIndex]) {
            var rank = document.getElementById("rank");
            rank.innerHTML = messages[taskIndex];

            taskIndex++;
            if (taskIndex != task.length) {
                document.getElementById("task").innerHTML = "Task: Reach " + task[taskIndex] + " taps";
            } else {
                document.getElementById("tapButton").style.display = 'none';
                gameDone = true;
            }
        }
    }
}

function init() {
    document.getElementById("task").innerHTML = "Task: Reach " + task[0] + " taps";

    document.getElementById("confirmed").innerHTML = "Taps Confirmed : 0";
}

function dark() {
    var dark = document.getElementById("darkSwitch");
    if (dark.innerHTML === "Dark Mode") {
        dark.innerHTML = "Light Mode";
    } else {
        dark.innerHTML = "Dark Mode";
    }

    var dark2 = document.body;
    dark2.classList.toggle("darkmode");
}

document.addEventListener(
    'DOMContentLoaded', init, false);
