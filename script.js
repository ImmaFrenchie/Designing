var seconds = 0;
var minutes = 0;
var hours = 0;
var selected_options = "12";

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

  select_time.addEventListener("change", (event) => {
    selected_options = event.target.value;
  });

  if (selected_options === "12") {
    if (hours >= 12) {
      span_hours.innerHTML = hours - 12;
      span_ampm.innerHTML = "PM";
    } else {
      span_ampm.innerHTML = "AM";
    }
    span_ampm.style.display = "inline";
    span_minutes.HTML = minutes;
    span_seconds.HTML = seconds;
  } else {
    span_hours.innerHTML = hours;
    span_ampm.style.display = "none";
  }
}
setInterval(clock, 1000);
