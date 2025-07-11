$(document).ready(function() {
  $('#changecolor').click(function() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log ("Nova cor de background -->", randomColor);
    $('body').css('background-color', randomColor);
  });
});

