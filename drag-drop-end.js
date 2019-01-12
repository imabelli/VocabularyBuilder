window.greGlobalData = {
    myWords: [{ ID: '1', Word: 'good', Definition: 'not bad' },
    { ID: '2', Word: 'bad', Definition: 'not good' },
    { ID: '3', Word: 'funny', Definition: 'encourages laughter' }
], alreadyLoadedFromStorage: false
};

(function loadDataFromLocalStorage() {
    if (!window.greGlobalData.alreadyLoadedFromStorage) {
        if (localStorage && localStorage.getItem("storedWords")) {
            var allWordsStr = localStorage.getItem("storedWords");
            window.greGlobalData.myWords = JSON.parse(allWordsStr);
            window.greGlobalData.alreadyLoadedFromStorage = true;
        }
    }
})();

function init() {
    var sectionName = 'learn-';
    var panel = document.getElementById("column1");
    panel.innerHTML = "";
    for (var i = 0; i < greGlobalData.myWords.length; i++) {
        var row = document.createElement('div');
        row.className = 'row';

        panel.appendChild(row);

        
        var span = document.createElement('span');
        span.textContent = greGlobalData.myWords[i].Word;
        span.setAttribute("draggable", "true");
        span.setAttribute("style", "margin: auto;");
        span.ondragstart = drag;
        span.setAttribute("id", sectionName + greGlobalData.myWords[i].Word);
        row.append(span);

    }

    panel = document.getElementById("column2");
    panel.innerHTML= "";
    for (var i = 0; i < greGlobalData.myWords.length; i++) {
        var row = document.createElement('div');
        row.className = 'row';

        panel.appendChild(row);
        
        var span = document.createElement('span');
        span.setAttribute("style", "margin: auto;");
        row.setAttribute("word", greGlobalData.myWords[i].Word);
        row.ondragover = allowDrop;
        row.ondrop = drop;
        span.textContent = greGlobalData.myWords[i].Definition;
        row.append(span);
    }
};
