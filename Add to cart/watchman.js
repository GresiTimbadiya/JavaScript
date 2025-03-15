let checkUser = JSON.parse(localStorage.getItem("currentuser"));

if (!checkUser) {
    window.location.href = "./index.html";
}