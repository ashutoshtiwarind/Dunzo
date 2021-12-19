const students = [
    {
        img: 'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1615706454124_product_5d10ebabc9e8386c3c52875f_1.jpg',
        name: 'Pineapple',
        qty: '1',
        price: '170',

    },
    {
        img: 'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1615706908945_product_5d5ff56f4fce012c1d04a1a0_1.jpg',
        name: 'Raw Papaya',
        qty: '1',
        price: '60',

    },
    {
        img: 'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/bDg1STI5bS9tSEZTYXJGVldFWHUrQT09-product_image.jpg',
        name: 'Elaichi banana',
        qty: '1',
        price: '68',

    },
    {
        img: 'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1615700299553_product_5bd2cef973cdab7135874ebc_1.jpg',
        name: 'cheeku',
        qty: '1',
        price: '64',

    },
    {
        img: 'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/SW5yL0s5eWk1NUlNc0l0VWJpckYyZz09-product_image.jpg',
        name: 'guava',
        qty: '1',
        price: '48',

    },
    {
        img: 'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/dkxmWE1KeWx6ZTV5dmRFWUFDVnQrUT09-product_image.jpg',
        name: 'Paneer',
        qty: '1',
        price: '75',

    },
]

var bool = [
    {
        value:true,
    }
]

if (localStorage.getItem('students') == null) {
    localStorage.setItem('students', JSON.stringify(students))

}
function appendStudents(data) {
    let parent_div = document.getElementById('parent')


    parent_div.innerHTML = null

    data.forEach(function (el) {
        let div = document.createElement('div')
        let img = document.createElement('img');
        img.src = el.img;

        let p_name = document.createElement('p');
        p_name.innerHTML = el.name;

        let p_qty = document.createElement('p');
        p_qty.innerHTML = el.qty;

        let p_price = document.createElement('p');
        p_price.innerHTML = el.price;

        let btn = document.createElement('button');
        // btn.className="remove-btn";
        // btn.style.BackgroundColor = "teal";
        btn.textContent = 'Remove';
        btn.style.display = "block";
        div.append(img, p_name, p_qty, p_price)
    });
}

appendStudents(JSON.parse(localStorage.getItem('students')))


let x = document.getElementById("parent");

function addToCart(val) {
    let students = JSON.parse(localStorage.getItem("students"));
    var obj = students[val];
    let array;
    array = localStorage.getItem('cart');
    if (array == null) {
        array = [];
    } else {

        array = JSON.parse(localStorage.getItem('cart'))
    }
    array.push(obj);
    localStorage.setItem('cart', JSON.stringify(array));
    window.location.reload();
}



let abc = JSON.parse(localStorage.getItem("cart"));
var data_div = document.getElementById('data1')
var m = 0;
var arr = [];
for (let i = 0; i < abc?.length; i++) {

let y = document.createElement("div");

let img = document.createElement("img");
img.src = abc[i].img;

let price = document.createElement("p");
price.innerHTML = `Price : ${abc[i].price}`;


let des = document.createElement("p");
des.innerHTML = `Qty : ${abc[i].qty}`;

let brand = document.createElement("p");
brand.innerHTML = `Brand :${abc[i].name} `;

m += Number(abc[i].price);
arr.push(abc[i].name)
}




function cartItem() {
let data = JSON.parse(localStorage.getItem("cart"));
var l = document.getElementById('display');
var n = document.getElementById('display1');
var k = document.getElementById('counter');
let g = document.getElementById('lblCartCount');
k.innerHTML = `Total Cart Items:${data?.length}`
if(data?.length > 3){
l.style.display ='inherit'
n.style.display ='inherit'
}

if(data?.length > 0){
   g.append(data.length);
   g.style.display = 'inherit';
}

let brand = document.getElementById('items');
var element = document.createElement('div')
html="";
for(i=0; i < arr.length; i++){
html += `<div id=${i+1}><span>➤ </span>${arr[i]}</div><button class="remove-btn" onclick=Remove(${i+1})>Remove</button>`
brand.innerHTML = `Items :${html}`;
}

var n = document.getElementById('priceD');
n.innerHTML = `<h3><b>Total Price : ₹ ${m}</b><h3>`;
}
cartItem()
var coupen = false;
function apply() {
var n = document.getElementById('priceD');
var coupen = document.getElementById('btnSave').value
if(coupen == "masai30"){
    n.innerHTML = `<h3><b>Total Price :₹ ${m-((m*30)/100)}</b></h3>`;
    if (localStorage.getItem('coupen') == null) {
    localStorage.setItem('coupen', JSON.stringify(bool))
}
}
else{
    alert('Invalid Coupen')
}
}


var count = 0;
function down() {
    count++;
    var k = document.getElementById('press');
    if (count % 2 == 1) {
        k.style.display = 'inherit';
    }
    else {
        k.style.display = 'none';
    }

}


// <!-- The Modal -->
var modal = document.getElementById('myModal')
var newModal = document.getElementById('myModal1')
var btn = document.getElementById("signbtn");
var btnloc = document.getElementById("locate");
var span = document.getElementById("close");
var span1 = document.getElementById("close1");
btnloc.onclick = function() {
document.body.style.overflow="hidden";
modal.style.display = "block";
}
span.onclick = function() {
document.body.style.overflow="visible";
// modal1.style.display = "none";
modal.style.display = "none";
}

span1.onclick = function() {
document.body.style.overflow="visible";
newModal.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal || event.target == newModal) {
document.body.style.overflow="visible"
modal.style.display = "none";
newModal.style.display = "none";
}
}
var pin1 = [];
function otp() {
var otp1 = document.getElementById('myInput1').value
var checkBox = document.getElementById("myCheck");
var btn1 = document.getElementById("key")
var btn2 = document.getElementById("key1")
var otp3 = document.getElementById('this')
console.log(otp3)
if(otp1.length == 10 && checkBox.checked == true){
    let pin = Math.floor(Math.random()*9000)+1000;
    otp3.style.display="inherit"
    btn1.style.display="none"
    btn2.style.display="inherit"
    console.log(pin)
    alert(pin);
    pin1.push(pin)
    
}
else{
    alert('Verify mobile Invalid or Check terms and conditions');
}

}
function otpNew(){
var otp2 = document.getElementById('myInput2').value
var btn1 = document.getElementById("key")
var btn2 = document.getElementById("key1")
var otp3 = document.getElementById('this')
if(pin1[pin1.length-1] == otp2){
    otp3.style.display="none"
    btn1.style.display="inherit"
    btn2.style.display="none"
    alert('login successfull')
    newModal.style.display = "none";
    }
}
function submit() {
var input = document.getElementById('myInput').value;
var change = document.getElementById('city');
 if(input.toLowerCase() == "pune, maharashtra, india" || input.toLowerCase() == "banglore, india" || input.toLowerCase() == "gurgaon, india" || input.toLowerCase() == "hayderabad, india" || input.toLowerCase() == "new delhi, india" || input.toLowerCase() == "chennai, india" || input.toLowerCase() == "mumbai, maharashtra, india")
 {   change.innerHTML= input;
    modal.style.display = "none";
}
else{
    alert('Dunzo services are not available at this location yet. Please update your location.')
}
}
var count1 = 0;
function user() {
count1++;
var k = document.getElementById("myDropdown")
if (count1 % 2 == 1) {
        k.style.display = 'inherit';
    }
    else {
        k.style.display = 'none';
    }
} 

function Remove(val){
let data = JSON.parse(localStorage.getItem("cart"));
var p = document.getElementById(val)
arr1=[];
for(i = 0; i < data.length; i++){
    if(i+1 != val){
        arr1.push(data[i])
    }
}
data = arr1;

localStorage.setItem('cart', JSON.stringify(arr1));
    window.location.reload();
}

function checkOut(){
window.location.href="/checkout&payment/checkout.html"
}