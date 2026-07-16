document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const subjek = document.getElementById("subjek").value;
    const pesan = document.getElementById("pesan").value;

    const data = {
        nama,
        email,
        subjek,
        pesan,
        tanggal: new Date().toLocaleString("id-ID")
    };

    let pesanMasuk = JSON.parse(localStorage.getItem("pesanMasuk")) || [];

    pesanMasuk.push(data);

    localStorage.setItem("pesanMasuk", JSON.stringify(pesanMasuk));

    alert("Pesan berhasil dikirim. Terima kasih telah menghubungi BoluKu.");

    document.getElementById("contactForm").reset();

});