var mainDiv = document.getElementById("rightDiv");
var address = document.getElementById("address")
var ord = document.getElementById("order")
var payment = document.getElementById("payment");
var dCash = document.getElementById("dunzoCash")
var support = document.getElementById("support")
var about = document.getElementById("about");


var ordCont = ` <img src="https://resources.dunzo.com/web-assets/prod/_next/static/images/no-orders-6c3bac2927db86fdbeebba58fa0e66de.png" alt="" >
<p id="pO">You dont have any active orders. Place your first order now!</p>
`
//After completion uncomment below function call.
orderfun();
// document.getElementById("order").addEventListener("click", orderfun)
ord.addEventListener("click", orderfun);
function orderfun(){
    address.style.backgroundColor="whitesmoke"
    ord.style.backgroundColor="whitesmoke"
    payment.style.backgroundColor="whitesmoke"

    dCash.style.backgroundColor="whitesmoke"
    about.style.backgroundColor="whitesmoke"
    support.style.backgroundColor="whitesmoke"

    mainDiv.innerHTML="";
    mainDiv.innerHTML=ordCont;
    ord.style.backgroundColor="white";
}

var addCon = `<div id="addD">
<img src="https://img.icons8.com/ios/50/000000/order-delivered.png"/>
<button>ADD NEW ADDRESS</button>
</div>`
address.addEventListener("click", call);
function call(){
    address.style.backgroundColor="whitesmoke"
    ord.style.backgroundColor="whitesmoke"
    payment.style.backgroundColor="whitesmoke"

    dCash.style.backgroundColor="whitesmoke"
    about.style.backgroundColor="whitesmoke"
    support.style.backgroundColor="whitesmoke"

    mainDiv.innerHTML="";
    mainDiv.innerHTML=addCon;
    address.style.backgroundColor="white"
}

var pMethod = `<div id="wDiv">
<div id="wallets">
  <h3>Wallets</h3>
  <div id="paytm">
    <img src="https://ik.imagekit.io/dunzo/tr:w-72,h-72,cm-pad_resize_payment_ico/icons/R4_Icons/payment/PayTM.png"/>   
    <p>Paytm</p>
  </div>
  <div id="simpl">
    <img src="https://ik.imagekit.io/dunzo/tr:w-72,h-72,cm-pad_resize_payment_ico/icons/R4_Icons/payment/Simpl.png" alt="">
    <p>
      Simpl
    </p>
  </div>
  <div id="dPayl">
    <img src="https://ik.imagekit.io/dunzo/tr:w-72,h-72,cm-pad_resize_payment_ico/icons/R4_Icons/payment/dunzo_icon.png" alt="">
    <p>Dunzo Pay Later</p>
  </div>
</div>
<div id="newCard">
  <h3>Saved cards</h3>
  <div id="addC">
    <h3>+</h3>
    <button>ADD NEW CARD</button>
    </div>
</div>
</div>`
payment.addEventListener("click", payMethod)
function payMethod(){
    address.style.backgroundColor="whitesmoke"
    ord.style.backgroundColor="whitesmoke"
    payment.style.backgroundColor="whitesmoke"

    dCash.style.backgroundColor="whitesmoke"
    about.style.backgroundColor="whitesmoke"
    support.style.backgroundColor="whitesmoke"

    mainDiv.innerHTML="";
    mainDiv.innerHTML=pMethod;
    payment.style.backgroundColor="white"
}

var dCashEle = `<div id="rightDivCon">
<div id="term">
  <p>Term & Conditions</p>
</div>
<div id="balance">
  <div id="bLeft">
    <p>Your Dunzo Cash Balance</p>
    <h1>₹0</h1>
  </div>
  <div id="bRight">
    <div id="sunImg">
      <img src="https://resources.dunzo.com/web-assets/prod/_next/static/images/sad-face-04bdc5d1557e32c04f1258575728d561.png" 
      alt="">
    </div>
    <div id="rRight">
      <p id="rrP1">Sorry, You are not eligible</p>
      <p id="rrP2">But don't worry, you will be eligible once you start using the Dunzo platform.</p>
    </div>
  </div>
</div>
<hr>
<div id="howWorks">
  <p>How it works</p>
  <div id="point1">
    <img src="https://ik.imagekit.io/dunzo/tr:w-48,h-48,cm-pad_resize_error_state/icons/ic_share.png" alt=""> 
    <p>Share the referral link with your friends</p>

  </div>
  <div id="point2">
    <img src="https://ik.imagekit.io/dunzo/tr:w-48,h-48,cm-pad_resize_error_state/icons/ic_click.png" alt="">
    <p>Your friend clicks on the link or signs up through the code</p>

  </div>
  <div id="point3">
    <img id="imgW" src="https://ik.imagekit.io/dunzo/tr:w-48,h-48,cm-pad_resize_error_state/icons/ic_cash.png" alt="">
    <p>Your friend gets ₹100 Dunzo Cash on sign up. You get ₹100 when they complete an order of ₹100 or more within 7 days. You can earn upto ₹1000 Dunzo Cash.</p>

  </div>
  
</div>
</div>`
dCash.addEventListener("click", dCashf)
function dCashf(){
    address.style.backgroundColor="whitesmoke"
    ord.style.backgroundColor="whitesmoke"
    payment.style.backgroundColor="whitesmoke"

    dCash.style.backgroundColor="whitesmoke"
    about.style.backgroundColor="whitesmoke"
    support.style.backgroundColor="whitesmoke"
    mainDiv.innerHTML="";
    mainDiv.innerHTML=dCashEle;
    dCash.style.backgroundColor="white"
}

support.addEventListener("click", spt)
function spt(){
    address.style.backgroundColor="whitesmoke"
    ord.style.backgroundColor="whitesmoke"
    payment.style.backgroundColor="whitesmoke"

    dCash.style.backgroundColor="whitesmoke"
    about.style.backgroundColor="whitesmoke"
    support.style.backgroundColor="whitesmoke"

    support.style.backgroundColor="white"
}

about.addEventListener("click", abt)
function abt(){
    address.style.backgroundColor="whitesmoke"
    ord.style.backgroundColor="whitesmoke"
    payment.style.backgroundColor="whitesmoke"
    
    dCash.style.backgroundColor="whitesmoke"
    about.style.backgroundColor="whitesmoke"
    support.style.backgroundColor="whitesmoke"

    // window.location.href="https://www.dunzo.com/about"
    // window.onload=".__blank"
    window.open(
        "https://www.dunzo.com/about", "_blank");
    about.style.backgroundColor="white";

}