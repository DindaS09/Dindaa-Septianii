// ================================
// DATA PRODUK
// ================================

const products = [

{
    id:1,
    nama:"Bolu Coklat Premium",
    kategori:"Coklat",
    harga:90000,
    rating:"⭐⭐⭐⭐⭐",
    gambar:"bolu coklat.jpg",
    deskripsi:"Bolu coklat premium dengan coklat asli yang lembut."
},

{
    id:2,
    nama:"Bolu blueberry Premium",
    kategori:"blueberry",
    harga:65000,
    rating:"⭐⭐⭐⭐⭐",
    gambar:"bolu blueberry.jpg",
    deskripsi:"Bolu blueberry premium dengan blueberry asli yang lembut."
},

{
    id:3,
    nama:"Bolu Keju kukus",
    kategori:"Keju",
    harga:70000,
    rating:"⭐⭐⭐⭐⭐",
    gambar:"bolu keju kukus.jpg",
    deskripsi:"Bolu keju dengan taburan keju melimpah."
},

{
    id:4,
    nama:"Bolu Strawberry",
    kategori:"Strawberry",
    harga:68000,
    rating:"⭐⭐⭐⭐",
    gambar:"bolu stawberrry.jpg",
    deskripsi:"Bolu strawberry segar dengan aroma buah asli."
},

{
    id:5,
    nama:"Bolu pandan strawberry",
    kategori:"Pandan",
    harga:40000,
    rating:"⭐⭐⭐⭐⭐",
    gambar:"bolu pandan stowberry.jpg",
    deskripsi:"Bolu pandan premium dengan rasa strawberry yang manis, lembut, dan lezat."
},

{
    id:6,
    nama:"Bolu Pisang",
    kategori:"Pisang",
    harga:60000,
    rating:"⭐⭐⭐⭐⭐",
    gambar:"bolu pisang.jpg",
    deskripsi:"Bolu pisang homemade yang lembut."
},

{
    id:7,
    nama:"Bolu Red Velvet",
    kategori:"red velvet",
    harga:75000,
    rating:"⭐⭐⭐⭐⭐",
    gambar:"bolu redvelvet.jpg",
    deskripsi:"Red Velvet premium dengan cream cheese."
},

{
    id:8,
    nama:"Bolu Pandan",
    kategori:"Pandan",
    harga:55000,
    rating:"⭐⭐⭐⭐",
    gambar:"bolu pandan.jpg",
    deskripsi:"Bolu pandan harum dan lembut."
},

{
    id:9,
    nama:"Bolu Blueberry lemon",
    kategori:"Strawberry",
    harga:82000,
    rating:"⭐⭐⭐⭐⭐",
    gambar:"bolu blueberry lemon.jpg",
    deskripsi:"Bolu blueberry dengan topping lemon segar."
},

{
    id:10,
    nama:"Bolu keju strawberry",
    kategori:"keju",
    harga:57000,
    rating:"⭐⭐⭐⭐⭐",
    gambar:"bolu keju stobery.jpg",
    deskripsi:"Bolu keju dengan topping strawberry yang manis."
},

{
    id:11,
    nama:"Bolu Coklat lumer",
    kategori:"coklat",
    harga:72000,
    rating:"⭐⭐⭐⭐⭐",
    gambar:"coklat lumer.jpg",
    deskripsi:"Bolu coklat dengan topping coklat batang yang manis."
},

{
    id:12,
    nama:"Bolu Tiramisu",
    kategori:"tiramisu",
    harga:80000,
    rating:"⭐⭐⭐⭐⭐",
    gambar:"bolu tiramisu.jpg",
    deskripsi:"Perpaduan kopi dan coklat yang nikmat."
}

];

// ================================
// TAMPILKAN PRODUK
// ================================

const produkList = document.getElementById("produk-list");

function tampilProduk(data){

produkList.innerHTML="";

data.forEach((produk)=>{

produkList.innerHTML += `

<div class="card">

<img src="${produk.gambar}" alt="${produk.nama}">

<div class="card-body">

<span class="kategori">${produk.kategori}</span>

<h3>${produk.nama}</h3>

<div class="harga">
Rp ${produk.harga.toLocaleString("id-ID")}
</div>

<div class="rating">
${produk.rating}
</div>

<p>${produk.deskripsi}</p>

<div class="button-group">

<button class="detail"
onclick="detailProduk(${produk.id})">

Detail

</button>

<button class="cart"
onclick="tambahKeranjang(${produk.id})">

Tambah

</button>

</div>

</div>

</div>

`;

});

}

tampilProduk(products);

// ================================
// SEARCH
// ================================

document
.getElementById("search")
.addEventListener("keyup",function(){

const keyword=this.value.toLowerCase();

const hasil=products.filter((produk)=>

produk.nama.toLowerCase().includes(keyword)

);

tampilProduk(hasil);

});

// ================================
// FILTER KATEGORI
// ================================

document
.getElementById("kategori")
.addEventListener("change",function(){

const kategori=this.value;

if(kategori==="Semua"){

tampilProduk(products);

}else{

const hasil=products.filter((produk)=>

produk.kategori===kategori

);

tampilProduk(hasil);

}

});

// ================================
// KERANJANG
// ================================

// Ambil data keranjang dari Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Tampilkan jumlah keranjang saat halaman dibuka
updateCart();

// ================================
// TAMBAH KE KERANJANG
// ================================

function tambahKeranjang(id){

    const produk = products.find(p => p.id === id);

    // Cek apakah produk sudah ada di keranjang
    const produkDiKeranjang = cart.find(item => item.id === id);

    if(produkDiKeranjang){

        // Jika sudah ada, tambah jumlah
        produkDiKeranjang.jumlah++;

    }else{

        // Jika belum ada, tambahkan produk baru
        cart.push({
            ...produk,
            jumlah:1
        });

    }

    // Simpan ke Local Storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update badge keranjang
    updateCart();

    alert(produk.nama + " berhasil ditambahkan ke keranjang.");

}

// ================================
// UPDATE BADGE KERANJANG
// ================================

function updateCart(){

    let total = 0;

    cart.forEach(item => {

        total += item.jumlah;

    });

    const cartCount = document.getElementById("cart-count");

    if(cartCount){

        cartCount.textContent = total;

    }

}

// ================================
// DETAIL
// ================================

function detailProduk(id){

const produk=products.find((p)=>p.id===id);

alert(

"Nama : "+produk.nama+

"\nKategori : "+produk.kategori+

"\nHarga : Rp "+produk.harga.toLocaleString("id-ID")+

"\n\n"+produk.deskripsi

);

}

const kategoriDipilih = localStorage.getItem("kategoriDipilih");

if(kategoriDipilih){

    document.getElementById("kategori").value = kategoriDipilih;

    tampilProduk();

    localStorage.removeItem("kategoriDipilih");

}