/*
const display = document.querySelector('#money'), button = document.querySelector('#b1');
let startmoney = 0;
localStorage.getItem(startmoney);

const reducer = startm => display.innerHTML = `Money : ${startm} $`;
reducer(startmoney);
button.addEventListener("click", () => { startmoney += 1; reducer(startmoney); })
localStorage.setItem(startmoney); */
//localStorage.clear();

var clicks = parseInt(localStorage.getItem('SomeNumber')) || 0;
    function countClicks() {
        clicks += 1;
        var test = localStorage.setItem("SomeNumber", clicks);
    document.getElementById("clicks").innerHTML = clicks;
    };
