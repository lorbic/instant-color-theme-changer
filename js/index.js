let root = document.documentElement;

let bg = "#ffffff";
let fg = "#15b9ff";

// function watchColorPicker(event) {
//   console.log(event.target.value);
//   root.style.setProperty("--color-primary", event.target.value);
//   fg = event.target.value;
//   saveColorScheme(fg, bg);
// }

// function watchColorPickerBg(event) {
//   console.log(event.target.value);
//   root.style.setProperty("--color-bg", event.target.value);
//   bg = event.target.value;
//   saveColorScheme(fg, bg);
// }

function loadColorScheme() {
  const fgc = window.localStorage.getItem("colorSchemeForeground");
  const bgc = window.localStorage.getItem("colorSchemeBackground");
  console.log(`FG: ${fgc}\nBG: ${bgc}`);

  const colorPicker = document.querySelector("#color");
  const colorPickerBg = document.querySelector("#colorbg");

  if (fgc && bgc) {
    fg = fgc;
    bg = bgc;
    root.style.setProperty("--color-primary", fgc);
    root.style.setProperty("--color-bg", bgc);
    colorPicker.setAttribute("value", fgc);
    colorPickerBg.setAttribute("value", bgc);
  } else {
    root.style.setProperty("--color-primary", fg);
    root.style.setProperty("--color-bg", bg);
    colorPicker.setAttribute("value", fg);
    colorPickerBg.setAttribute("value", bg);
  }
}

function saveColorScheme(fgc, bgc) {
  window.localStorage.setItem("colorSchemeForeground", fgc);
  window.localStorage.setItem("colorSchemeBackground", bgc);
}

function changeColorScheme(target) {
  const colorPickerFg = document.querySelector("#color");
  const colorPickerBg = document.querySelector("#colorbg");
  //   console.log(colorPickerFg.value);
  //   console.log(colorPickerBg.value);
  root.style.setProperty("--color-primary", colorPickerFg.value);
  root.style.setProperty("--color-bg", colorPickerBg.value);
  saveColorScheme(colorPickerFg.value, colorPickerBg.value);
  console.log("Colors Scheme Saved!");
}

window.addEventListener("DOMContentLoaded", (event) => {
  loadColorScheme();
  console.log("DOM fully loaded and parsed");

  //   const colorPicker = document.querySelector("#color");
  //   colorPicker.addEventListener("change", watchColorPicker, false);

  //   const colorPickerBg = document.querySelector("#colorbg");
  //   colorPickerBg.addEventListener("change", watchColorPickerBg, false);
});
