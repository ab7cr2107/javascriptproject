document.getElementById("login").onclick = function () {
    const username = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const fullname = document.getElementById("text").value;
    if (username === "admin@user.com" && pass === "123456") {
      window.location.href = "home.html"
    } else {
      Toastify({
        text: "Login Unsuccessfull",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    }
  }
