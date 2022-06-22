const body = document.querySelector('body');
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  body.classList.add('dark');
  body.style.setProperty('--colorBG', '#222222');
  body.style.setProperty('--colorText', '#f7f7f7');
  } else {
  body.classList.add('light');
  body.style.setProperty('--colorBG', '#f7f7f7');
  body.style.setProperty('--colorText', '#222222');
}