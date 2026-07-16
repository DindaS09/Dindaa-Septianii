const user = JSON.parse(localStorage.getItem("userLogin"));

if (user) {

    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("registerBtn").style.display = "none";

    document.getElementById("userInfo").style.display = "flex";
    document.getElementById("welcomeUser").textContent = "👤 " + user.nama;
}

document.getElementById("logoutBtn")?.addEventListener("click", function () {

    localStorage.removeItem("userLogin");

    window.location.href = "login.html";

});