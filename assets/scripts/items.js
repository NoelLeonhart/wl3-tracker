
/*  Using this object will also work.
    Not sure how it will affect logic later. */
/* var items = {} */

var music_item = [...document.querySelectorAll(".music-item")];
var key_item = [...document.querySelectorAll(".key-item")];
var up_item = [...document.querySelectorAll(".up-item")];
var un_item = [...document.querySelectorAll(".un-item")];
var item = [...document.querySelectorAll(".item")];
var chest = [...document.querySelectorAll(".chest")];
var music_text = document.getElementById("whats-this-m");
var key_text = document.getElementById("whats-this-k");
var up_text = document.getElementById("whats-this-up");
var un_text = document.getElementById("whats-this-un");

music_item.forEach( function (elem) {
    var alt = this.alt;
    elem.addEventListener("mouseenter", e => {
        music_text.textContent = elem.alt;
    });
    elem.addEventListener("mouseleave", e => {
        music_text.textContent = "";
    });
});

key_item.forEach( function (elem) {
    var alt = this.alt;
    elem.addEventListener("mouseenter", e => {
        key_text.textContent = elem.alt;
    });
    elem.addEventListener("mouseleave", e => {
        key_text.textContent = "";
    });
});

up_item.forEach( function (elem) {
    var alt = this.alt;
    elem.addEventListener("mouseenter", e => {
        up_text.textContent = elem.alt;
    });
    elem.addEventListener("mouseleave", e => {
        up_text.textContent = "";
    });
});

un_item.forEach( function (elem) {
    var alt = this.alt;
    elem.addEventListener("mouseenter", e => {
        un_text.textContent = elem.alt;
    });
    elem.addEventListener("mouseleave", e => {
        un_text.textContent = "";
    });
});

item.forEach(function (elem) {
    elem.addEventListener('contextmenu', e => {
       elem.style.filter = "grayscale(100%)";
       e.preventDefault();
       items[elem.alt] = false;
       console.log(elem.alt + " has been set to: " + items[elem.alt]);
       console.log(items);
       updateMap();
    })
    elem.addEventListener('click', e => {
        elem.style.filter = "grayscale(0%)";
        items[elem.alt] = true;
        console.log(elem.alt + " has been set to: " + items[elem.alt]);
        updateMap();
    })
})

chest.forEach(function (elem) {
    elem.addEventListener('click', e => {
        elem.src = elem.src.replace('-closed.png', '-open.png');
     })
     elem.addEventListener('contextmenu', e => {
        elem.src = elem.src.replace('-open.png', '-closed.png');
        e.preventDefault();
     })
    // elem.addEventListener('mouseenter', e => {
    //     console.log(elem.src.replace('.png', '-open.png'))
    // })
})

function showItems () {
    console.log(items);
}