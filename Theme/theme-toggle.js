document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  // Check local storage for the user's preferred theme
  const storedTheme = localStorage.getItem("theme");
  let darkMode = storedTheme === "dark";

  const applyTheme = () => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
    } else {
      document.documentElement.classList.remove("dark");
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
    }

    // Save the theme preference to local storage
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  };

  // Apply the initial theme based on local storage or user preference
  applyTheme();

  // Toggle the theme when the button is clicked
  themeToggleBtn.addEventListener("click", () => {
    darkMode = !darkMode;
    applyTheme();
  });
});