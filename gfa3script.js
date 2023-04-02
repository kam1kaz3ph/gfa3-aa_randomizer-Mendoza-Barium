var num1 = Math.round(Math.random() * 19) + 1;
var num2 = Math.round(Math.random() * 19) + 1;
var num3 = Math.round(Math.random() * 19) + 1;

document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;
document.getElementById("num3").innerHTML = num3;

var teams = ['Ferrari', 'Redbull', 'Mercedes'];
var wins = [num1, num2, num3];
var maxWins = Math.max(...wins);

var teamWithMostWins = "";
for (var i = 0; i < teams.length; i++) {
  if (wins[i] === maxWins) {
    if (teamWithMostWins === "") {
      teamWithMostWins = teams[i];
    } else {
      teamWithMostWins += " and " + teams[i];
    }
  }
}

document.getElementById("biggest-number").innerHTML = teamWithMostWins + " (" + maxWins + " wins)";

var letter = String.fromCharCode(96 + num1);
document.getElementById("letter").innerHTML = letter;

var minutes = num2 * num3;
var hours = Math.floor(minutes / 60);
var remainingMinutes = minutes % 60;
var time = hours + " hr " + remainingMinutes + " min";
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("time").innerHTML = time;

