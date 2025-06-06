function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById("theme-icon");
  
    body.classList.toggle("dark");
  
    if (body.classList.contains("dark")) {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    } else {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  }
  