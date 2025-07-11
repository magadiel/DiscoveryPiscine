let size = 200;
const balloon = document.querySelector(".meubalao"); /* esta dependente da instaciacao da classe. Se nao a referencia fica nula. ver coment. html */
const colors = ["red", "green", "blue"];
let colorIndex = 0;

function updateBalloon() {
  balloon.style.width = size + "px";
  balloon.style.height = size + "px";
  balloon.style.backgroundColor = colors[colorIndex];
}

function handleClick() {
  size += 10;
  colorIndex = (colorIndex + 1) % colors.length;

  if (size > 420) {
    size = 200;
    colorIndex = 0;
    alert("O Balao explodiu!");
  }

  updateBalloon();
}

function handleMouseLeave() {
  if (size > 200) size -= 5;

  colorIndex = (colorIndex - 1 + colors.length) % colors.length;
  updateBalloon();
}


function handleMouseEnter() {
  
  colorIndex = (colorIndex - 1 + colors.length) % colors.length;
  updateBalloon();
}