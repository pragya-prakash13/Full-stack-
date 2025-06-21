document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = e.target.username.value;
  const password = e.target.password.value;

  try {
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.text();

    if (response.ok) {
      alert("Registration successful!");
      window.location.href = "sundown_clone/index.html";
    } else {
      alert(data || "Registration failed");
    }
  } catch (err) {
    console.error(err);
    alert("Server error. Please try again later.");
  }
});
