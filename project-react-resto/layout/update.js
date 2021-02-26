import {link} from './link.js';

export function ubah() {
    let id = 4;
    let data = {
    pelanggan : 'Alifia Callista',
    alamat : 'MCA Blok L.2 No.20',
    telp : '0897-0889-0988',
    keterangan : 'Pelanggan ke-10'
    };

    link.put('/pelanggan/'+id,data).then(res=>{
        console.log(res);
        let tampil = `<h1>${res.data.pesan}</h1>`;
    document.querySelector('#out').innerHTML = tampil;
    });
}