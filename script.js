const btn = document.getElementById("button");
const body = document.getElementById("body");

// Add a click event listener to the body
btn.addEventListener("click", function() {
  const randomHexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = randomHexColor;
});
