function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    var sourceId = ev.dataTransfer.getData("text");
    var sourceWord = document.getElementById(sourceId).innerText;
    var targetWord = ev.target.getAttribute("word");
    if (sourceWord == targetWord) {
        ev.preventDefault();
        ev.target.appendChild(document.getElementById(sourceId));
    }
}
 
function dropAlwaysQuiz(ev) {
    var sourceId = ev.dataTransfer.getData("text");
    var sourceWord = document.getElementById(sourceId).innerText;
    var targetWord = ev.target.getAttribute("word");
    if (findSecondSpanChild(ev.target) != null) {
        var spanNode = findSecondSpanChild(ev.target);
        findFirstEmptyWordDiv().appendChild(spanNode);
    }
    ev.preventDefault();
    ev.target.appendChild(document.getElementById(sourceId));
}

function dropWordColIfEmpty(ev) {
    var sourceId = ev.dataTransfer.getData("text");
    if (ev.target.nodeName == "DIV" && ev.target.childNodes.length == 2) {
        /*dropAlwaysQuiz(ev);*/
        ev.preventDefault();
        ev.target.appendChild(document.getElementById(sourceId));
    }
}

function findFirstEmptyWordDiv() {
    var childNodes = document.getElementById("quizColumn1").childNodes;
    for (var i = 0; i < childNodes.length; i++) {
        var childNode = childNodes[i];
        console.log(childNode.nodeName);
        if (childNode.nodeName == "DIV" && findSecondSpanChild(childNode) == null) {
            return childNode;
        }
    }
    return null;
}

function findSecondSpanChild(inputNode) {
    var count = 0;
    for (var i = 0; i < inputNode.childNodes.length; i++) {
        if (inputNode.childNodes[i].nodeName == "SPAN") {
            count++;
            if (count === 2) {
                return inputNode.childNodes[i];
            }
        }
    }
    return null;
}


