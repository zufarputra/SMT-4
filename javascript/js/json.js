document.querySelector("#klik").addEventListener("click",tampil);

function tampil(){
    let url = "js/tblmenu.json";
    fetch(url)
    .then(function (res){
        return res.json();
    })
    .then(function (data){
        let output = "<h1>Data Menu</h1><table><th>Menu</th> <th>Harga</th> <th>Warna</th>";
        data.forEach(element => {
            output += `<tr>
            <td>${element.menu}</td>
            <td>${element.harga}</td>
            <td>${element.warna[0]}</td>
           </tr> `;
        });
        output += "</table>";
    })

    document.querySelector("#isi").innerHTML = output;
}






// let tblmenu = [
//     {
//     "idmenu" : 1,
//     "idkategori" : 1,
//     "menu" : "Apel Manadong",
//     "harga" : 4000,
//     "warna" : ["merah","hijau","ungu"],
//     "stok" : true,
//     "keterangan" : null
//     },
//     {
//         "idmenu" : 2,
//         "idkategori" : 2,
//         "menu" : "Semangka Manadong",
//         "harga" : 5000,
//         "warna" : ["merah","hijau","kuning"],
//         "stok" : false,
//         "keterangan" : null
//         },
// ];

// console.log(tblmenu[0].menu);