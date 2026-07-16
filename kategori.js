// =====================================
// DATA KATEGORI
// =====================================

const kategori = [

{
    nama: "Bolu Coklat",
    jumlah: 2,
    gambar: "coklat lumer.jpg",
    kategori: "Coklat"
},

{
    nama: "Bolu Keju",
    jumlah: 2,
    gambar: "bolu keju kukus.jpg",
    kategori: "Keju"
},

{
    nama: "Bolu Strawberry",
    jumlah: 1,
    gambar: "bolu stawberrry.jpg",
    kategori: "Strawberry"
},

{
    nama: "Bolu Pisang",
    jumlah: 1,
    gambar: "bolu pisang.jpg",
    kategori: "Pisang"
},

{
    nama: "Bolu Red Velvet",
    jumlah: 1,
    gambar: "bolu redvelvet.jpg",
    kategori: "Coklat"
},

{
    nama: "Bolu Tiramisu",
    jumlah: 1,
    gambar: "bolu tiramisu.jpg",
    kategori: "Coklat"
}

];

// =====================================
// TAMPILKAN KATEGORI
// =====================================

const kategoriList = document.getElementById("kategori-list");

kategori.forEach(item => {

kategoriList.innerHTML += `

<div class="card">

    <img src="${item.gambar}" alt="${item.nama}">

    <div class="card-body">

        <h2>${item.nama}</h2>

        <p>${item.jumlah} Produk</p>

        <button onclick="lihatProduk('${item.kategori}')">

            Lihat Produk

        </button>

    </div>

</div>

`;

});

// =====================================
// PINDAH KE HALAMAN PRODUK
// =====================================

function lihatProduk(kategori){

    localStorage.setItem("kategoriDipilih", kategori);

    window.location.href = "produk.html";

}

// =====================================
// UPDATE ICON KERANJANG
// =====================================

function updateCart(){

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    cart.forEach(item => {

        total += item.jumlah;

    });

    const cartCount = document.getElementById("cart-count");

    if(cartCount){

        cartCount.textContent = total;

    }

}

updateCart();