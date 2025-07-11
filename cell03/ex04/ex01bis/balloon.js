$(document).ready(function () {
  let size = 200;
  const maxSize = 420;
  const minSize = 200;
  const balloon = $('#meubalao');
  const colors = ['red', 'green', 'blue'];
  let colorIndex = 0;

function updateBalloon() {
  balloon.css({
    width: size + 'px',
    height: size + 'px',
    backgroundColor: colors[colorIndex]
});
}

balloon.on('click', function () {
  size += 10;
  colorIndex = (colorIndex + 1) % colors.length;

  if (size > maxSize) {
    alert("O Balao explodiu!");
    size = minSize;
    colorIndex = 0;
  }
  updateBalloon();
})

balloon.on('mouseleave', function () {
  if (size > minSize) {
    size -= 5;
  }

  colorIndex = (colorIndex - 1 + colors.length) % colors.length;
  updateBalloon();
})

balloon.on('mouseenter', function () {
  colorIndex = (colorIndex - 1 + colors.length) % colors.length;
  updateBalloon();
})

  updateBalloon(); /*  criacao inicial do balao */

}); // entre o document().ready() e o final nao se colocam pontos nas funcoes. so no final
