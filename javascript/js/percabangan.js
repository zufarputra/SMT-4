if (true) {
    console.log("dijalankan ketika benar");
} else {
    console.log("dijalankanketika salah");
}

let nilai = 60;
let standar = 60;
let baik = "Lulus";
let gagal = "Tidak Lulus";
let batasatas = 100;
let batasbawah = 0;
let peringatan = "Nilai Salah";

if (nilai <= batasatas && nilai >= batasbawah) {
    if (nilai >= standar) {
        console.log(baik);
    } else {
        console.log(gagal);
    }
} else {
    console.log(peringatan);
}

