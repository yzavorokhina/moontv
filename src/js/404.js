import '../scss/vendors/_bootstrap.scss';
import '../scss/vendors/_normalize.scss';
import '../scss/404.scss';

document.addEventListener('DOMContentLoaded', () => {
  console.log('404 page loaded with its styles');
});

/* MY TODO: make render for squares with map like in games: */
// const boxMap = "000X000"

/* Redirect to main page after some interval, variant1: */
// Start the timer: every 5 seconds, check if it's time to make a redirect:
// const redirectTimer = setInterval(() => {
//   // After 5 seconds, stop the timer and perform the redirect:
//   clearInterval(redirectTimer);
//   window.location.href = './index.html';
// }, 5000);

/* Redirect to main page after some interval, variant2: */
// setTimeout(() => {
//   window.location.href = './index.html';
// }, 5000); // redirect after 5 seconds (this is the maximum for user's comfort)