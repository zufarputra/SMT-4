let tblmenu = [
    {idmenu:7, idkategori:31, menu:"Jeruk", gambar:"jeruk.jpg", harga:5000},
    {idmenu:8, idkategori:31, menu:"Anggur", gambar:"anggur.jpg", harga:8000},
    {idmenu:9, idkategori:31, menu:"Pepaya", gambar:"pepaya.jpg", harga:7000},
    {idmenu:10, idkategori:31, menu:"Mangga", gambar:"mangga.jpg", harga:6000},
    {idmenu:15, idkategori:28, menu:"Ayam", gambar:"ayam.jpg", harga:8000},
    {idmenu:14, idkategori:29, menu:"Es Teh", gambar:"esteh.jpg", harga:3000},
];

let tampil = tblmenu.map(function(kolom){
    return ` <div class="produk-content">
    <div class="image">
      <img src="/images/${kolom.gambar}" alt="">
    </div>
    <div class="titel">
      <h2>${kolom.menu}</h2>
    </div>
    <div class="deskripsi">
    </div>
    <div class="harga">
      <h2>Rp. ${kolom.harga}</h2>
    </div>

    <div class="btn-beli">
    <button data-idmenu="${kolom.idmenu}">Beli</button>
  </div>

  </div>`;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
  btnbeli[index].onclick = function (){
    //console.log(btnbeli[index].dataset["idmenu"]);
   // cart.push(btnbeli[index].dataset["idmenu"]);


    tblmenu.filter(function(a) {
if (a.idmenu==(btnbeli[index].dataset["idmenu"])) {
  cart.push(a);
  console.log(cart);
}
    });
  };
  
}

console.log(cart);

