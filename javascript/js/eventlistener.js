function coba(){
    a = document.querySelector(".isi");
    a.innerHTML = "Belajar eventlistener bro";
    console.log("coba listener");
}

//judul.addEventListener("click", coba);

//judul.onmouseover = coba;

judul.onmouseover = function(){
    console.log("coba function anonymous");
}