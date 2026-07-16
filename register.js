// Ambil data user yang sudah ada
let users = JSON.parse(localStorage.getItem("users")) || [];

const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const telepon = document.getElementById("telepon").value.trim();
    const password = document.getElementById("password").value;
    const konfirmasi = document.getElementById("konfirmasi").value;

    if (password !== konfirmasi) {
        alert("Konfirmasi password tidak sesuai!");
        return;
    }

    const emailSudahAda = users.find(user => user.email === email);

    if (emailSudahAda) {
        alert("Email sudah terdaftar!");
        return;
    }

    users.push({
        nama,
        email,
        telepon,
        password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Pendaftaran berhasil!");

    window.location.href = "login.html";

});