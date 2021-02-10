import { useState } from 'react';
import Tabel from "./Tabel";

function Menu() {
  const titel = "Daftar Menu";
    const [menus,setMenu] = useState( [
        {idmenu:7, idkategori:31, menu:"Jeruk", gambar:"jeruk.jpg", harga:5000},
        {idmenu:8, idkategori:31, menu:"Anggur", gambar:"anggur.jpg", harga:8000},
        {idmenu:9, idkategori:31, menu:"Pepaya", gambar:"pepaya.jpg", harga:7000},
        {idmenu:10, idkategori:31, menu:"Mangga", gambar:"mangga.jpg", harga:6000},
        {idmenu:15, idkategori:28, menu:"Ayam", gambar:"ayam.jpg", harga:8000},
        {idmenu:14, idkategori:29, menu:"Es Teh", gambar:"esteh.jpg", harga:3000}
    ]
    );
    return (
      <div className="App">
       <Tabel menu={menus} titel={titel} />
         <Tabel menu={menus.filter((data)=>(data.idkategori===1))} titel="Menu Buah" />
      </div>
    );
  }
  
  export default Menu;
  