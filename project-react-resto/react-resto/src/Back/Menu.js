import useGet from "../Hook/useGet";
import { useState, useEffect } from "react";
import useDelete from "../Hook/useDelete";
import { useForm } from "react-hook-form";
import { link } from "../Axios/link";

const Menu = () => {
  const [isi] = useGet("/menu");
  const { hapus, pesan, setPesan } = useDelete("/menu/");
  const { register, handleSubmit, reset, errors, setValue } = useForm();
  const [kategori, setKategori] = useState([]);
  const [gambar, setGambar] = useState([]);
  const [idkategori, setIdkategori] = useState([]);
  const [pilihan, setPilihan] = useState(true);
  const [idmenu, setIdmenu] = useState("");

  useEffect(() => {
    let ambil = true;
    async function fetchData() {
      const res = await link.get("/kategori");
      if (ambil) {
        setKategori(res.data);
      }
    }
    fetchData();
    return () => {
      ambil = false;
    };
  }, [kategori]);

  let no = 1;

  function simpan(data) {
    const formData = new FormData();
    formData.append("idkategori", data.idkategori);
    formData.append("menu", data.menu);
    formData.append("harga", data.harga);
    formData.append("gambar", data.gambar[0]);

    if (pilihan) {
      link.post("/menu", formData).then((res) => setPesan(res.data.pesan));
    } else {
      link
        .post("/menu/" + idmenu, formData)
        .then((res) => setPesan(res.data.pesan));
      setPilihan(true);
    }

    reset();
  }

  async function showData(id) {
    const res = await link.get("/menu/" + id);
    setValue("menu", res.data[0].menu);
    setValue("harga", res.data[0].harga);
    setGambar(<img src={res.data[0].gambar} alt="" height="200" width="250" />);
    setIdkategori(res.data[0].idkategori);
    setIdmenu(res.data[0].idmenu);
    setPilihan(false);
  }

  return (
    <div>
      <div className="row">
        <h2>Data Menu</h2>
      </div>
      <div className="row">
        <div>
          <p>{pesan}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <form onSubmit={handleSubmit(simpan)}>
            <div className="mb-3">
              <div className="mb-3">
                <label htmlFor="kategori" className="form-label">
                  kategori
                </label>
                <select
                  name="idkategori"
                  ref={register}
                  className="form-control"
                >
                  {kategori.map((val, index) =>
                    val.idkategori === idkategori ? (
                      <option key={index} selected value={val.idkategori}>
                        {val.kategori}
                      </option>
                    ) : (
                      <option key={index} value={val.idkategori}>
                        {val.kategori}
                      </option>
                    )
                  )}
                </select>
              </div>
              <label htmlFor="menu" className="form-label">
                Menu
              </label>
              <input
                type="text"
                className="form-control"
                name="menu"
                placeholder="kategori"
                ref={register({ required: true })}
              />
              {errors.kategori && "Kategori harus di isi!"}
            </div>
            <div className="mb-3">
              <label htmlFor="harga" className="form-label">
                Harga
              </label>
              <input
                type="text"
                className="form-control"
                name="harga"
                placeholder="harga"
                ref={register}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gambar" className="form-label">
                Gambar
              </label>
              <input
                type="file"
                className="form-control"
                name="gambar"
                ref={register}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="kategori" className="form-label"></label>
              <input type="submit" className="btn btn-dark" name="submit" />
            </div>
          </form>
        </div>
        <div className="col-4">{gambar}</div>
      </div>
      <div className="row">
        <table className="table mt-4">
          <thead>
            <tr>
              <th>No</th>
              <th>Kategori</th>
              <th>Menu</th>
              <th>Gambar</th>
              <th>Harga</th>
              <th>Hapus</th>
              <th>Ubah</th>
            </tr>
          </thead>
          <tbody>
            {isi.map((val, index) => (
              <tr key={index}>
                <td>{no++}</td>
                <td>{val.kategori}</td>
                <td>{val.menu}</td>
                <td>
                  <img src={val.gambar} height="100" width="150" alt="" />
                </td>
                <td>{val.harga}</td>
                <td>
                  <button
                    className="btn btn-dark"
                    onClick={() => hapus(val.idmenu)}
                  >
                    Hapus
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => showData(val.idmenu)}
                  >
                    Ubah
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Menu;
