

// Jika belum ada data users di Local Storage
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(defaultUsers));
}

const users = JSON.parse(localStorage.getItem("users"));

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const user = users.find(user =>
        user.email === email &&
        user.password === password
    );

    if (user) {

        localStorage.setItem("user", JSON.stringify(user));

        alert("Login Berhasil!");

        localStorage.setItem("userLogin", JSON.stringify(user));

alert("Login berhasil!");

window.location.href = "index.html";

    } else {

        alert("Email atau Password salah!");

    }

});