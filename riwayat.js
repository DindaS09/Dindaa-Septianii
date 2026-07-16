// ===============================
// AMBIL DATA RIWAYAT
// ===============================

const riwayat = JSON.parse(localStorage.getItem("riwayat")) || [];

const riwayatList = document.getElementById("riwayat-list");

// ===============================
// JIKA RIWAYAT KOSONG
// ===============================

if (riwayat.length === 0) {

    riwayatList.innerHTML = `
        <div class="kosong">
            <i class="fa-solid fa-box-open"></i>

            <h2>Belum Ada Riwayat Pesanan</h2>

            <p>
                Yuk mulai belanja bolu favoritmu sekarang.
            </p>

            <a href="produk.html">
                Belanja Sekarang
            </a>
        </div>
    `;

} else {

    tampilRiwayat();

}

// ===============================
// TAMPILKAN RIWAYAT
// ===============================

function tampilRiwayat() {

    riwayatList.innerHTML = "";

    riwayat.forEach((pesanan, index) => {

        let produkHTML = "";

        pesanan.produk.forEach(item => {

            produkHTML += `
                <div class="produk-item">

                    <div>

                        <div class="nama-produk">
                            ${item.nama}
                        </div>

                        <div class="jumlah">
                            ${item.jumlah} x Rp ${item.harga.toLocaleString("id-ID")}
                        </div>

                    </div>

                    <div class="harga">
                        Rp ${(item.harga * item.jumlah).toLocaleString("id-ID")}
                    </div>

                </div>
            `;

        });

        riwayatList.innerHTML += `

        <div class="card-riwayat">

            <div class="header-card">

                <div class="kode">
                    Pesanan #${index + 1}
                </div>

                <div class="status">
                    ${pesanan.status || "Menunggu"}
                </div>

            </div>

            <div class="detail">

                <p>
                    <strong>Nama :</strong>
                    ${pesanan.nama}
                </p>

                <p>
                    <strong>Telepon :</strong>
                    ${pesanan.telepon}
                </p>

                <p>
                    <strong>Alamat :</strong>
                    ${pesanan.alamat}
                </p>

                <p>
                    <strong>Pembayaran :</strong>
                    ${pesanan.pembayaran}
                </p>

                <p>
                    <strong>Tanggal :</strong>
                    ${pesanan.tanggal}
                </p>

            </div>

            <div class="produk-list">

                ${produkHTML}

            </div>

            <div class="total">

                Total :
                Rp ${pesanan.total.toLocaleString("id-ID")}

            </div>

            <div class="button-group">

    <button class="btn btn-detail"
        onclick="cetakStruk(${index})">

        <i class="fa-solid fa-print"></i>
        Cetak Struk

    </button>

    <button class="btn btn-hapus"
        onclick="hapusRiwayat(${index})">

        <i class="fa-solid fa-trash"></i>
        Hapus

    </button>

</div>

        </div>

        `;

    });

}

// ===============================
// HAPUS RIWAYAT
// ===============================

function hapusRiwayat(index){

    if(confirm("Yakin ingin menghapus riwayat ini?")){

        riwayat.splice(index,1);

        localStorage.setItem(
            "riwayat",
            JSON.stringify(riwayat)
        );

        location.reload();

    }

}

function cetakStruk(index){

    const data = riwayat[index];

    let produk = "";

    data.produk.forEach(item=>{

        produk += `
        <tr>
            <td>${item.nama}</td>
            <td>${item.jumlah}</td>
            <td>Rp ${item.harga.toLocaleString("id-ID")}</td>
            <td>Rp ${(item.harga*item.jumlah).toLocaleString("id-ID")}</td>
        </tr>
        `;

    });

    const win = window.open("", "_blank");

    win.document.write(`
    <!DOCTYPE html>

    <html>

    <head>

    <title>Struk BoluKu</title>

    <style>

    body{

        font-family:Arial;

        padding:30px;

    }

    h2{

        text-align:center;

    }

    table{

        width:100%;

        border-collapse:collapse;

        margin-top:20px;

    }

    table,th,td{

        border:1px solid black;

    }

    th,td{

        padding:10px;

        text-align:center;

    }

    hr{

        margin:20px 0;

    }

    </style>

    </head>

    <body>

    <h2>BOLUKU</h2>

    <center>

    Toko Bolu Premium

    <br>

    Jl. Raya Bandung No.123

    </center>

    <hr>

    <p><b>Nama :</b> ${data.nama}</p>

    <p><b>No HP :</b> ${data.telepon}</p>

    <p><b>Alamat :</b> ${data.alamat}</p>

    <p><b>Pembayaran :</b> ${data.pembayaran}</p>

    <p><b>Tanggal :</b> ${data.tanggal}</p>

    <table>

    <tr>

    <th>Produk</th>

    <th>Qty</th>

    <th>Harga</th>

    <th>Subtotal</th>

    </tr>

    ${produk}

    </table>

    <h3 style="text-align:right">

    Total :

    Rp ${data.total.toLocaleString("id-ID")}

    </h3>

    <hr>

    <center>

    Terima kasih telah berbelanja di BoluKu

    </center>

    </body>

    </html>

    `);

    win.document.close();

    win.print();

}