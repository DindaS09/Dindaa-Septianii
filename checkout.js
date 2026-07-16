let cart = JSON.parse(localStorage.getItem("cart")) || [];

const items = document.getElementById("checkout-items");

const total = document.getElementById("total");

let grandTotal=0;

cart.forEach(item=>{

grandTotal += item.harga*item.jumlah;

items.innerHTML +=`

<div class="item">

<div>

<b>${item.nama}</b>

<br>

${item.jumlah} x Rp ${item.harga.toLocaleString()}

</div>

<div>

Rp ${(item.harga*item.jumlah).toLocaleString()}

</div>

</div>

`;

});

total.innerHTML="Rp "+grandTotal.toLocaleString();

document.getElementById("pesan").onclick=function(){

const nama=document.getElementById("nama").value;

const telepon=document.getElementById("telepon").value;

const alamat=document.getElementById("alamat").value;

const pembayaran=document.getElementById("pembayaran").value;

if(nama==""||telepon==""||alamat==""||pembayaran==""){

alert("Lengkapi data terlebih dahulu.");

return;

}

const pesanan={

nama,

telepon,

alamat,

pembayaran,

produk:cart,

total:grandTotal,

tanggal:new Date().toLocaleString()

};

localStorage.setItem("pesanan",JSON.stringify(pesanan));

localStorage.removeItem("cart");

window.location.href="pesanan.html";

}