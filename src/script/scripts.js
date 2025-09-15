const toggleTheme = document.getElementById("toggle-theme");
const rootHtml = document.documentElement;

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");

  if (currentTheme === "dark") {
    rootHtml.setAttribute("data-time", "light");
  } else {
    rootHtml.setAttribute("data-time", "dark");
  }

  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);
