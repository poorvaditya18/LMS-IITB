const loginUser = async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const data = {
    username,
    password,
  };
  console.log(data);

  // login api call ->
  const response = await fetch("https://poorvaditya.onrender.com/apiRoutes/user/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  // result -> data= token
  if (result.status) {
    localStorage.setItem("token", result.token);
    localStorage.setItem("role", result.role);
    localStorage.setItem("username", result.username);
    localStorage.setItem("userId", result.userId);
    if (result.role === "librarian") window.location.href = "/templates/librarian.html";
    else if (result.role === "member") window.location.href = "/templates/member.html";
    else window.location.href = "./error.html";
  }
  console.log(result);
};

// signupUser
const signupUser = async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;
  const data = {
    username,
    password,
    role,
  };
  console.log(data);

  // signup api call ->
  const response = await fetch("https://poorvaditya.onrender.com/apiRoutes/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log(result);
  if (result.success) {
    if (result.status) {
      alert(result.error || result.message);
      window.location.href = "/templates/login.html";
    } else {
      alert(result.error || result.message);
    }
  }
};

const loginForm = document.getElementById("auth-login");
const signupForm = document.getElementById("auth-signup");
if (loginForm) {
  loginForm.addEventListener("submit", loginUser);
}
if (signupForm) {
  signupForm.addEventListener("submit", signupUser);
}
