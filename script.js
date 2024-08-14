var countDownDate = new Date().getTime() + (13 * 24 * 60 * 60 * 1000) + (17 * 60 * 60 * 1000) + (19 * 60 * 1000);

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in elements with class="time"
  document.querySelectorAll('.time')[0].textContent = days;
  document.querySelectorAll('.time')[1].textContent = hours;
  document.querySelectorAll('.time')[2].textContent = minutes;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.querySelectorAll('.time')[0].textContent = "00";
    document.querySelectorAll('.time')[1].textContent = "00";
    document.querySelectorAll('.time')[2].textContent = "00";
  }
}, 1000);