let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const totalHarga = document.getElementById("total-harga");

function tampilKeranjang(){

    cartItems.innerHTML = "";

    let total = 0;

    if(cart.length===0){

        cartItems.innerHTML="<h2>Keranjang masih kosong.</h2>";
        totalHarga.innerHTML="Rp0";
        return;

    }

    cart.forEach((item,index)=>{

        total += item.harga * item.jumlah;

        cartItems.innerHTML +=`

        <div class="cart-item">

        <img src="${item.gambar}">

        <div class="info">

        <h3>${item.nama}</h3>

        <p>Rp ${item.harga.toLocaleString()}</p>

        <div class="qty">

        <button onclick="kurang(${index})">-</button>

        <span>${item.jumlah}</span>

        <button onclick="tambah(${index})">+</button>

        </div>

        </div>

        <button class="hapus"
        onclick="hapus(${index})">
        Hapus
        </button>

        </div>

        `;

    });

    totalHarga.innerHTML="Rp "+total.toLocaleString();

}

function tambah(index){

    cart[index].jumlah++;

    simpan();

}

function kurang(index){

    if(cart[index].jumlah>1){

        cart[index].jumlah--;

    }else{

        cart.splice(index,1);

    }

    simpan();

}

function hapus(index){

    cart.splice(index,1);

    simpan();

}

function simpan(){

    localStorage.setItem("cart",JSON.stringify(cart));

    tampilKeranjang();

}

document.getElementById("hapus-semua").onclick=function(){

    if(confirm("Kosongkan keranjang?")){

        cart=[];

        simpan();

    }

}

document.getElementById("checkout").onclick = function(){

    if(cart.length==0){
        alert("Keranjang masih kosong!");
        return;
    }

    window.location.href="checkout.html";

}

tampilKeranjang();