function submitQuiz(ev) {
    var checkWords = document.getElementById('quizColumn2').childNodes;
    var numCorrect = 0;
    for (var i = 0; i < checkWords.length; i++) {
        if (checkWords[i].nodeName == "DIV") {
            if (checkWords[i].getAttribute('word') == wordIfMatched(checkWords[i].childNodes)) {
                numCorrect++;
            }
        }
    }
    window.alert("Number correct: " + numCorrect);
    return numCorrect;
}

function wordIfMatched(row) {
    var numSpan = 0;
    var latestWord = "";
    for (var i = 0; i < row.length; i++) {
        if (row[i].nodeName == "SPAN") {
            numSpan++;
            latestWord = row[i].innerHTML;
        }
    }
    if (numSpan == 2) {
        return latestWord;
    } else {
        return null;
    }
}