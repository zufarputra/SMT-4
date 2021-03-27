import React, { useState } from "react";
import { link } from "../Axios/link";
import useGet from "../Hook/useGet";
import { useForm } from "react-hook-form";

const Detail = () => {
  let today = new Date().toISOString().slice(0, 10);
  let no = 1;

  const [awal, setawal] = useState("2021-03-01");
  const [akhir, setAkhir] = useState(today);
  const [isi] = useGet(`/detail/${awal}/${akhir}`);
  const { register, handleSubmit, setValue, errors } = useForm();

  function cari(data) {
    setawal(data.tawal);
    setAkhir(data.takhir);
  }

  return (
    <div>
      <div className="row">
        <div>
          <h2>Detail Penjualan</h2>
        </div>
      </div>
      <div className="row">
        <form onSubmit={handleSubmit(cari)}>
          <div className="mb-3">
            <label htmlFor="tawal" className="form-label">
              Tanggal Awal
            </label>
            <input
              type="date"
              className="form-control"
              name="tawal"
              ref={register}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="takhir" className="form-label">
              Tanggal Akhir
            </label>
            <input
              type="date"
              className="form-control"
              name="takhir"
              ref={register}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="kategori" className="form-label"></label>
            <input type="submit" className="btn btn-dark" name="submit" />
          </div>
        </form>
      </div>
      <div className="row">
        <div>
          <table className="table mt-4">
            <thead>
              <tr>
                <th>No</th>
                <th>Faktur</th>
                <th>Tanggal Order</th>
                <th>Menu</th>
                <th>Harga</th>
                <th>Jumlah</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {isi.map((val, index) => (
                <tr key={index}>
                  <td>{no++}</td>
                  <td>{val.idorder}</td>
                  <td>{val.tglorder}</td>
                  <td>{val.menu}</td>
                  <td>{val.hargajual}</td>
                  <td>{val.jumlah}</td>
                  <td>{val.jumlah * val.hargajual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Detail;
