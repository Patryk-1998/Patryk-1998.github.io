function clickme() {
    var e = Math.floor(6 * Math.random() + 1);
    (document.getElementById("result").innerHTML = "your roll is<br>" + +e),
        1 == e
            ? (document.getElementById("dice").src = "img/pic1.jpg")
            : 2 == e
            ? (document.getElementById("dice").src = "img/pic2.jpg")
            : 3 == e
            ? (document.getElementById("dice").src = "img/pic3.jpg")
            : 4 == e
            ? (document.getElementById("dice").src = "img/pic4.jpg")
            : 5 == e
            ? (document.getElementById("dice").src = "img/pic5.jpg")
            : 6 == e && (document.getElementById("dice").src = "img/pic6.jpg");
}
function noclick() {
    var e = ["Go on roll it please", "roll again", "don't roll"],
        i = Math.floor(Math.random() * e.length);
    console.log(i), alert(e[i]);
}