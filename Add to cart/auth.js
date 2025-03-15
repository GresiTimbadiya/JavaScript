let users = JSON.parse(localStorage.getItem('users')) || [];

const registerUser = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (name == "" || email == "" || password == "") {
        alert("Please fill all the fields");
        return false;
    }

    let obj = {
        userid: Math.floor(Math.random() * 100000),
        name: name,
        email: email,
        password: password
    }

    let newdata = [...users, obj];
    localStorage.setItem("users", JSON.stringify(newdata));
    alert("User Registered Successfully");
    window.location.href = "./index.html";
}

const userLogin = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email == "" || password == "") {
        alert("Please fill all the fields");
        return false;
    }

    let checkUser = users.find((val) => {
        return val.email == email && val.password == password;
    })

    if (checkUser) {
        alert("Login Successfully");
        localStorage.setItem("currentuser", JSON.stringify(checkUser));
        window.location.href = "./product.html";
    } else {
        alert("Invalid email or password");
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
    }
}

const logout = () => {
    let checkUser = JSON.parse(localStorage.getItem("currentuser"));
    localStorage.removeItem("currentuser");
    window.location.href = "./index.html";
}

const login = () => {
    let checkUser = JSON.parse(localStorage.getItem("currentuser"));
    (!checkUser) ? window.location.href = "./index.html" : window.location.href = "./product.html";
}