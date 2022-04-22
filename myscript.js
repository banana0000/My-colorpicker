var theInput = document.getElementById("mycolor");
var h2 = document.querySelector("h2");
var hex = document.getElementById("hex");

theInput.addEventListener("input", function () {
  var theColor = theInput.value;
  hex.innerHTML = theColor;
  hex.style.background = theColor;
  h2.style.color = theColor;
});
