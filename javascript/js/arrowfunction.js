let fungsi = function (nama){
    console.log("Belajar function" + nama);
};

fungsi("Kijang");

let contoh = (nama) => {
    console.log("Belajar Function" + nama);
};

contoh("Kambing");

let tambah = function (a,b){
    return a + b;
}

console.log(tambah(2,3));

let plus = (a,b) => a+b;

console.log(plus(4,2));

let hasil = a => a * 2;

console.log(hasil(4));


let lagi =() => console.log("coba lagi");

lagi();

let belajar = () =>{
    console.log("baris pertama");
    console.log("baris kedua");
    console.log("baris ketiga");
    console.log("baris keempat");
}

belajar();

let nilai = 6;

let uji = nilai < 7 ? () => (predikat = "gagal") :() => (predikat = "lulus");
console.log(uji());