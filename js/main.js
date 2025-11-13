// Main JavaScript file

// Dark Mode functionality
function initializeDarkMode() {
  const themeToggle = document.getElementById("theme-toggle");

  if (!themeToggle) {
    console.error("Theme toggle button not found!");
    return;
  }

  // Check for saved theme or prefer OS setting
  const savedTheme = localStorage.getItem("theme");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const systemTheme = prefersDarkScheme.matches ? "dark" : "light";
  const currentTheme = savedTheme || systemTheme;

  // Apply the theme
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeToggle(currentTheme);

  // Toggle theme when button is clicked
  themeToggle.addEventListener("click", toggleTheme);

  // Listen for system theme changes
  prefersDarkScheme.addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      const newTheme = e.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      updateThemeToggle(newTheme);
    }
  });
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeToggle(newTheme);
}

function updateThemeToggle(theme) {
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
    themeToggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  }
}

// Modal functions
function openModal(title) {
  const modal = document.getElementById("modal");
  if (modal) {
    const panel = modal.querySelector(".panel");
    if (panel && title) {
      panel.innerHTML = `
                <h2>${title}</h2>
                <p>Property details will be displayed here.</p>
                <button class="btn" onclick="closeModal()">Close</button>
            `;
    }
    modal.classList.add("open");
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.classList.remove("open");
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("Initializing dark mode and modal functionality...");

  // Initialize dark mode
  initializeDarkMode();

  // Close modal when clicking outside
  const modal = document.getElementById("modal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
});
