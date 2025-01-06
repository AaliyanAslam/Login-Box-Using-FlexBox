// console.log(data.data[0].username);

function login() {
  let data = {
    data: [
      {
        username: "aaliyanaslam22@gmail.com",
        password: "aaliyan",
      },
    ],
  };
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let loginInfo = document.getElementById("loginInfo");
  let loader = document.getElementById("loader");
  let loginText = document.getElementById("loginText");

  if (email === data.data[0].username && pass === data.data[0].password) {
    loginText.innerHTML ="";
    loader.style.display = "block";
    loginInfo.style.color = "white";
    loginInfo.style.textAlign = "center";
    loginInfo.innerHTML = "Login Successful!";
    setTimeout(function() {
      window.location.href = "home.html";
    }, 3000);


  } else {
    loginInfo.innerHTML = "Invalid credentials!";
    setTimeout(function() {
      loginInfo.innerHTML = "";
    }, 500);
    loginInfo.innerHTML = "Invalid credentials!";
    setTimeout(function() {
      loginInfo.innerHTML =  "Invalid credentials!";
    }, 200);
    setTimeout(function() {
      loginInfo.innerHTML = "";
    }, 200);
    setTimeout(function() {
      loginInfo.innerHTML =  "Invalid credentials!";
    }, 300);
    loginInfo.style.color = "white";

  }
}
