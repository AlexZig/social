setTimeout(() => {
  const body = document.querySelector('body');
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.add('dark');
    body.style.setProperty('--colorBG', '#222222');
    body.style.setProperty('--colorText', '#f7f7f7');
    body.style.setProperty('--color1', 'rgb(0, 39, 122)');
    body.style.setProperty('--color2', 'rgb(0, 61, 63)');
    } else {
    body.classList.add('light');
    body.style.setProperty('--colorBG', '#f7f7f7');
    body.style.setProperty('--colorText', '#222222');
    body.style.setProperty('--color1', 'rgb(1, 68, 212)');
    body.style.setProperty('--color2', 'rgb(0, 210, 218)');
  }
}, 500);
