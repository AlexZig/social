const body = document.querySelector('body');
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  body.classList.add('dark');
  body.style.setProperty('--color', '#222222');
  } else {
  body.classList.add('light');
  body.style.setProperty('--color', '#f7f7f7');
}