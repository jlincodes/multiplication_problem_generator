let num1 = Math.floor(Math.random()*10+0);
let num2 = Math.floor(Math.random()*10+0);

document.getElementById("question").innerHTML = num1 + " x " + num2 + " = ";

document.getElementById('button').addEventListener('click', function() {
  let response = parseInt(document.getElementById("response").value);

  if (response === (num1 * num2)) {
    alert("Correct! Click 'OK' if you wish to try another problem.");
    window.location.reload();
  } else {
    alert("Sorry, that is incorrect. Please try again.");
    document.getElementById("answerForm").reset();
  }
});
