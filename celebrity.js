//TRIED TO HAVE THE NEXT FACT SHOWN BY CLICKING THE SUBMIT BUTTON...
/*function showFact() {
    const fact2 = document.getElementById("fact1-2");
    const fact3 = document.getElementById("fact1-3");
    const fact4 = document.getElementById("fact1-4");
    const fact5 = document.getElementById("fact1-5");
    const fact6 = document.getElementById("fact1-6");
    if (fact2.style.visibility === "hidden") {
        fact2.style.visibility = "visible";
    } else if (fact3.style.visibility === "hidden") {
        fact3.style.visibility = "visible";
    } else if (fact4.style.visibility === "hidden") {
        fact4.style.visibility = "visible";
    } else if (fact5.style.visibility === "hidden") {
        fact5.style.visibility = "visible";
    } else if (fact6.style.visibility === "hidden") {
        fact6.style.visibility = "visible";
    } else {
        fact6.style.visibility = "hidden";
    }
}*/
const fact1 = document.getElementById("fact1-1");
const fact2 = document.getElementById("fact1-2");
const fact3 = document.getElementById("fact1-3");
const fact4 = document.getElementById("fact1-4");
const fact5 = document.getElementById("fact1-5");
const fact6 = document.getElementById("fact1-6");
let points = 6;

//SHOW FACT WHEN THE FACT BUTTON IS PRESSED
function showFact2() {
    if (fact2.style.visibility === "hidden") {
        fact2.style.visibility = "visible";
    } else {
        fact2.style.visibility = "visible";
    }
}

function showFact3() {
    if (fact3.style.visibility === "hidden") {
        fact3.style.visibility = "visible";
    } else {
        fact3.style.visibility = "visible";
    }
}

function showFact4() {
    if (fact4.style.visibility === "hidden") {
        fact4.style.visibility = "visible";
    } else {
        fact4.style.visibility = "visible";
    }
}

function showFact5() {
    if (fact5.style.visibility === "hidden") {
        fact5.style.visibility = "visible";
    } else {
        fact5.style.visibility = "visible";
    }
}

function showFact6() {
    if (fact6.style.visibility === "hidden") {
        fact6.style.visibility = "visible";
    } else {
        fact6.style.visibility = "visible";
    }
}

//CALCULATE PLAYER POINTS
function calcPoints() {
    let input = document.getElementById("guess").value;
    if (fact6.style.visibility === "visible") {
        points -= 1;
    }
    if (fact5.style.visibility === "visible") {
        points -= 1;
    }
    if (fact4.style.visibility === "visible") {
        points -= 1;
    }
    if (fact3.style.visibility === "visible") {
        points -= 1;
    }
    if (fact2.style.visibility === "visible") {
        points -= 1;
    }
    if (points == 1 && input != "timothee chalamet") {
        points -= 1;
    }

    //DISPLAY POINTS
    document.getElementById("points").innerHTML = points;
    return
}


//Failed attempt at creating the stats
function stats() {
    let celebCorrect;
    let celebIncorrect;
    if (points > 0) {
        celebCorrect += 1;
    }
    if (points < 1) {
        celebIncorrect += 1;
    }

    alert ("Correct: " + celebCorrect + " Incorrect: " + celebIncorrect);
}