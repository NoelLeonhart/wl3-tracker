var music_item = [...document.querySelectorAll(".music-item")];
var key_item = [...document.querySelectorAll(".key-item")];
var up_item = [...document.querySelectorAll(".up-item")];
var un_item = [...document.querySelectorAll(".un-item")];
var item = [...document.querySelectorAll(".item")];
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
    })
    elem.addEventListener('click', e => {
        elem.style.filter = "grayscale(0%)";
    })
})