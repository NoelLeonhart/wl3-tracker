var chestColors = ["grey", "red", "green", "blue"]

window.onload =  function () {
    updateMap();
}

function updateMap () {
    for (var i = 0; i < levels.length; i++) {
        console.log("inside for loop i is " + i)
        document.getElementById("level-" + i).className = "node tooltip node-" + levels[i].canComplete();
        for (var k = 0; k < chestColors.length; k++) {
            if (levels[i].chestlist["chest-" + k].available()) {
                document.getElementById("level-" + i + "-" + chestColors[k]).className =
                "chest-" + chestColors[k] + " available";
            } else if (!levels[i].chestlist["chest-" + k].available()) {
                document.getElementById("level-" + i + "-" + chestColors[k]).className =
                "chest-" + chestColors[k] + " unavailable";
            }
        }
    }
}