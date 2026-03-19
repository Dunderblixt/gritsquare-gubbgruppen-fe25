document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");

  if (!darkModeToggle) return;

  // Funktion för att uppdatera ikonen
  function updateIcon() {
    darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  }

  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
  updateIcon(); // Uppdatera ikonen efter initial laddning

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "darkMode",
      document.body.classList.contains("dark-mode") ? "enabled" : "disabled"
    );
    updateIcon(); // Uppdatera ikonen efter toggle
  });
});