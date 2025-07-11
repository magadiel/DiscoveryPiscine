function changeBackground() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log ("Nova cor de background -->", randomColor);
  document.body.style.backgroundColor = randomColor;
}
