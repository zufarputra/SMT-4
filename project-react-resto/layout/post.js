import {link} from './link.js';

export function post (){
    let data = {
        pelanggan : 'Axios Blue Match',
        alamat : 'London AXios',
        telp : '9112344',
        keterangan : 'Fight!'
    }
    link.post('/pelanggan',data).then(res=>{
    //console.log(res);
    let tampil = `<h1>${res.data.pesan}</h1>`;
    document.querySelector('#out').innerHTML = tampil;
    });
}