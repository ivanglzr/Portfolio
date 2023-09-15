let toggleThemeBtn = document.querySelector("#toggle-theme-btn");

let toggleThemeIcon = document.querySelector("#toggle-theme-icon");
let toggleThemeSpan = document.querySelector("#toggle-theme-txt");

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (toggleThemeSpan.innerHTML.includes("Light")) {
    toggleThemeSpan.innerHTML = "Dark Theme";
    toggleThemeIcon.classList.add("fa-moon");
    toggleThemeIcon.classList.remove("fa-sun");
  } else {
    toggleThemeSpan.innerHTML = "Light Theme";
    toggleThemeIcon.classList.add("fa-sun");
    toggleThemeIcon.classList.remove("fa-moon");
  }
});
