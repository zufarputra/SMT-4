import React from "react";
import { useParams } from "react-router-dom";
import Kategori from "./Kategori";
import Menu from "./Menu";
import Pelanggan from "./Pelanggan";
import Order from "./Order";
import Detail from "./Detail";

const Content = () => {
  const { isi } = useParams();
  let tampil;
  if (isi === "kategori") {
    tampil = <Kategori />;
  }
  if (isi === "menu") {
    tampil = <Menu />;
  }
  if (isi === "pelanggan") {
    tampil = <Pelanggan />;
  }
  if (isi === "order") {
    tampil = <Order />;
  }

  if (isi === "detail") {
    tampil = <Detail />;
  }

  return <>{tampil}</>;
};

export default Content;
