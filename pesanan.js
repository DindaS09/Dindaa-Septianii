const pesanan = JSON.parse(localStorage.getItem("pesanan"));

const detail = document.getElementById("detail-pesanan");

if(!pesanan){

window.location.href="produk.html";

}

let html = "";

pesanan.produk.forEach(item=>{

html +=`

<div class="item">

<span>${item.nama} (${item.jumlah}x)</span>

<span>Rp ${(item.harga*item.jumlah).toLocaleString()}</span>

</div>

`;

});

html +=`

<hr><br>

<p><b>Nama :</b> ${pesanan.nama}</p>

<p><b>No HP :</b> ${pesanan.telepon}</p>

<p><b>Alamat :</b> ${pesanan.alamat}</p>

<p><b>Pembayaran :</b> ${pesanan.pembayaran}</p>

<p><b>Tanggal :</b> ${pesanan.tanggal}</p>

<div class="total">

Total :
Rp ${pesanan.total.toLocaleString()}

</div>

`;

detail.innerHTML = html;

/* Menyimpan ke riwayat */

let riwayat = JSON.parse(localStorage.getItem("riwayat")) || [];

riwayat.push(pesanan);

localStorage.setItem("riwayat", JSON.stringify(riwayat));

localStorage.removeItem("pesanan");