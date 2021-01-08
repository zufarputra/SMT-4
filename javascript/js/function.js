function coba (){
    let belajar = "Saya belajar";
    console.log(belajar);
    console.log("javascript itu bissmilah mudah");
}

coba();

function persegi (lebar,panjang){
    luas = panjang * lebar; 
    console.log(luas);
}


function out(){
    return console.log("output function");
}

function lingkaran (r){
    luas = 3.14 * r * r;
    return luas;
}
const tinggi = 10;
let tabung  = lingkaran (10) * tinggi;
//console.log(tabung);

function lewat(a){
    return a;
}

console.log(lewat(7));