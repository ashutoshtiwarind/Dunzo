var modalBtn = document.querySelector(".modal-btn");
var modalBg = document.querySelector(".modal-bg");
var modalCl = document.querySelector(".modal-close");

modalBtn.addEventListener("click", function () {
    modalBg.classList.add("bg-active");
});

modalCl.addEventListener("click", function () {
    modalBg.classList.remove("bg-active");
});

// OTP part
var modalBtn1 = document.querySelector(".modal-btn1");
var modalBg1 = document.querySelector(".modal-bg1");
var modalCl1 = document.querySelector(".modal-close1");

modalBtn1.addEventListener("click", function () {
    modalBg1.classList.add("bg-active1");
});

modalCl1.addEventListener("click", function () {
    modalBg1.classList.remove("bg-active1");
});

// login 

function logIn() {
    var otpMob = document.getElementById("mob-otp").value;
    console.log(otpMob)
    if (otpMob == 654321) {
        alert("Login Successfully!");
        
        window.location.href = "afterLogin.html";
    }else{
        alert("Please chech your otp")
    }
    // document.getElementById('toggle').style.visibility = 'hidden';
}

// var hidden = false;
// function action() {
//     hidden = !hidden;
//     if (hidden) {
//         document.getElementById('togglee').style.visibility = 'hidden';
//     } else {
//         document.getElementById('togglee').style.visibility = 'visible';
//     }
// }