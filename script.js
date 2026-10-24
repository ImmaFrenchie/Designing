var seconds = 0;
var minutes = 0;
var hours = 0;

function clock() {
  var span_hours = document.getElementById("hours");
  var span_minutes = document.getElementById("minutes");
  var span_seconds = document.getElementById("seconds");
  var span_ampm = document.getElementById("ampm");
  var select_time = document.getElementById("time");
  var present_time = new Date();
  var seconds = String(present_time.getSeconds()).padStart(2, "0");
  var minutes = String(present_time.getMinutes()).padStart(2, "0");
  var hours = String(present_time.getHours()).padStart(2, "0");

  span_hours.innerHTML = hours;
  span_minutes.innerHTML = minutes;
  span_seconds.innerHTML = seconds;
}
setInterval(clock, 1000);
