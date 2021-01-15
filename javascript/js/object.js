const objek = {
    nama : "Zufar Putra",
    telp : 081293233,

    buah : ["melon", "kelapa", "semangka"],

    coba : function() {
        return "coba function dalam objek";
    },

    boleh : true,
    "tulis" : 20333,

}

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.boleh);
console.log(objek.coba());
console.log(objek.buah[1]);
console.log(objek["tulis"]);