var localStorage = window.localStorage;
var colorMode;

$(document).ready(function () {
  colorMode = document.documentElement.dataset.theme;
});

//Toggle website between light and dark mode.
function toggleColorMode() {
  if (colorMode === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateColorPreference('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    updateColorPreference('light');
  }
  location.reload();
}

function updateColorPreference(mode) {
  colorMode = mode;
  saveColorPreference(colorMode);
}

function saveColorPreference(mode) {
  localStorage.setItem('mode', mode);
}
