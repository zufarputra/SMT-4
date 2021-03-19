import React, { useState } from "react";
import { link } from "../Axios/link";
import useGet from "../Hook/useGet";

const Detail = () => {
  let today = new Date().toISOString().slice(0, 10);

  const [awal, setawal] = useState("2021-03-01");
  const [akhir, setAkhir] = useState(today);
  const [isi] = useGet(`/detail/${awal}/${akhir}`);

  return (
    <div>
      <div className="row">
        <div>
          <h2>Detail Penjualan</h2>
        </div>
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
                  <td>No</td>
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
