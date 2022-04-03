var items = {
    "Lantern": false,
    "Magical Fire": false,
    "Torch": false,
    "First Gear": false,
    "Second Gear": false,
    "Warp Compact": false,
    "Jar": false,
    "Treasure Map": false,

    "Lead Overalls": false,
    "Pouch": false,
    "Eye of the Storm": false,
    "High Jump Boots": false,
    "Gold Magic": false
}

var levels = [
    {
        name: "out-of-the-woods",
        chestlist: {
            // Grey Chest
            'chest-0': {
                available: function () {
                    console.log("grey chest called")
                    return true;
                }
            },
            // Red Chest
            'chest-1': {
                available: function () {
                    console.log("red chest called")
                    return items["Lead Overalls"];
                }
            },
            // Green Chest
            'chest-2': {
                available: function () {
                    console.log("green chest called")
                    return (items["Eye of the Storm"] && items["Pouch"] 
                                && items["High Jump Boots"]);
                }
            },
            // Blue Chest
            'chest-3': {
                available: function () {
                    console.log("blue chest called")
                    return (items["Lead Overalls"] && items["High Jump Boots"]
                                && items["Gold Magic"]);
                }
            }
        },
        
        canGetChest: function () {
            return generalCanGetChest(this.chestlist);
        },
    
        canComplete: function () {
            if (this.chestlist["chest-0"].available() && this.chestlist["chest-1"].available()
                    && this.chestlist["chest-2"].available() && this.chestlist["chest-3"].available()) {
                        console.log("green")
                        return "green";
            } else if (this.chestlist["chest-0"].available() || this.chestlist["chest-1"].available()
                    || this.chestlist["chest-2"].available() || this.chestlist["chest-3"].available()) {
                        console.log("orange")
                        return "orange";
            } else {
                console.log("red")
                return "red";
            }
        }

    }
    
]

function generalCanGetChest(chestlist) {
    var canGet = 0;
    var unopened = 0;
    for (var key in chestlist) {
        if (chestlist.hasOwnProperty(key)) {
            if (!chestlist[key].isOpened) {
                unopened++;
            }

            if (!chestlist[key].isOpened && chestlist[key].isAvailable()) {
                canGet++;
            }
        }
    }

    if (unopened == 0) {
        return "opened";
    }
    if (canGet == unopened) {
        return "available";
    }
    if (canGet == 0) {
        return "unavailable";
    }
    return "possible";
}