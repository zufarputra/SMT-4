import Listsiswa from "./Listsiswa";


function Siswa() {
  const nama = ['zufar','vita','inyong']
    return (
      <div className="App">
        <Listsiswa judul={nama} />
        
      </div>
    );
  }
  
  export default Siswa;
  