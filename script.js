function switchForm(mode) {
  const loginBox = document.getElementById("form-box");
  const signupBox = document.getElementById("signup-box");

  if (mode === "signup") {
    loginBox.style.display = "none";
    signupBox.style.display = "block";
  } else {
    signupBox.style.display = "none";
    loginBox.style.display = "block";
  }
}
