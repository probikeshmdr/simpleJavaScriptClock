function digitalClock() {
  date = new Date();
  var hours = date.getHours() + "";
  var minutes = date.getMinutes() + "";
  var seconds = date.getSeconds() + "";
  var day = date.getDay();
  if (hours.length < 2) {
    hours = "0" + hours;
  }
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }
  var weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var clockDetails =
    weekDays[day] + " " + hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").innerHTML = clockDetails;
}
digitalClock();
setInterval(digitalClock, 1000);
