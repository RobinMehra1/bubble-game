var timerr = 6;
var scoree = 0;
var rn = 0;
function makebubble() {
  var clutter = "";
  for (var i = 0; i < 144; i++) {
    rn = Math.floor(Math.random() * 10);
    clutter += `<div class=bubble>${rn}</div>`;
  }
  document.querySelector(".bs").innerHTML = clutter;
}
function settimer() {
  var t = setInterval(() => {
    if (timerr > 0) {
      timerr--;
      document.querySelector("#timer").textContent = timerr;
    } else {
      clearInterval(t);
      document.querySelector(".bs").innerHTML =
        "<h2>Game over</h2> <br>  your score is " +
        scoree +
        " <br> <h3>Tap refresh to restart</h3>";
    }
  }, 1000);
}
function scoreincreseby10() {
  scoree += 10;
  document.querySelector("#score").textContent = scoree;
}
function score() {
  rn = Math.floor(Math.random() * 10);
  var ht = (document.querySelector("#hit").textContent = rn);
  document.querySelector(".bs").addEventListener("click", (event) => {
    if (ht === Number(event.target.textContent)) {
      (document.querySelector("#hit").textContent = rn);
      scoreincreseby10();
      makebubble();
    } else {
      num;
    }
  });
}
score();
makebubble();
settimer();
