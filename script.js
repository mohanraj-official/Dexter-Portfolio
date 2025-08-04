// Theme Toggle
const toggleThemeBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

function setTheme(theme) {
  if (theme === "red") {
    root.style.setProperty("--bg-color", "#1A0000"); // Dark Red
    root.style.setProperty("--primary-color", "#D32F2F");
    localStorage.setItem("theme", "red");
  } else {
    root.style.setProperty("--bg-color", "#0A192F"); // Dark Steel Blue
    root.style.setProperty("--primary-color", "#00BFFF");
    localStorage.setItem("theme", "blue");
  }
}

toggleThemeBtn.addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme");
  const newTheme = currentTheme === "blue" ? "red" : "blue";
  setTheme(newTheme);
});

// On load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "blue";
  setTheme(savedTheme);
});
