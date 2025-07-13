document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
  
    if (signupForm) {
      signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const formData = new FormData(signupForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");
  
        if (password !== confirmPassword) {
          alert("Passwords do not match.");
          return;
        }
  
        // Save user to localStorage
        const user = { name, email, password };
        localStorage.setItem("delexUser", JSON.stringify(user));
  
        alert("Signup successful! Redirecting to login...");
        window.location.href = "login.html";
      });
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
  
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const formData = new FormData(loginForm);
        const email = formData.get("email");
        const password = formData.get("password");
  
        const storedUser = JSON.parse(localStorage.getItem("delexUser"));
  
        if (!storedUser) {
          alert("No user found. Please sign up first.");
          return;
        }
  
        if (email === storedUser.email && password === storedUser.password) {
          alert(`Welcome back, ${storedUser.name}!`);
  
          // ✅ Set session data
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("currentUser", storedUser.name);
  
          // ✅ Redirect to dashboard
          window.location.href = "userdashboard.html";
        } else {
          alert("Invalid email or password.");
        }
      });
    }
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logoutButton");
  
    if (logoutButton) {
      logoutButton.addEventListener("click", () => {
        localStorage.removeItem("delexUser");
        alert("You have been logged out.");
        window.location.href = "login.html"; // Redirect to login page
      });
    }
  });  