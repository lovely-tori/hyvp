// Registro
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
    const logoutButton = document.getElementById("logoutButton");
    const userName = document.getElementById("userName");
  
    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const user = {
          firstName: document.getElementById("firstName").value,
          lastName: document.getElementById("lastName").value,
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
          gender: document.getElementById("gender").value,
        };
        localStorage.setItem(user.email, JSON.stringify(user));
        alert("¡Registro exitoso!");
        window.location.href = "login.html";
      });
    }
  
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const user = JSON.parse(localStorage.getItem(email));
  
        if (user && user.password === password) {
          localStorage.setItem("currentUser", email);
          window.location.href = "dashboard.html";
        } else {
          alert("Correo o contraseña incorrectos");
        }
      });
    }
  
    if (userName) {
      const currentUser = localStorage.getItem("currentUser");
      if (currentUser) {
        const user = JSON.parse(localStorage.getItem(currentUser));
        userName.textContent = user.firstName;
      } else {
        window.location.href = "index.html";
      }
    }
  
    if (logoutButton) {
      logoutButton.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        window.location.href = "index.html";
      });
    }
  });
  