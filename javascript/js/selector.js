const hari = 1;
let hasil;

switch (hari) {
    case 1:
        hasil = "Senin";
        break;

        case 2:
            hasil = "Selasa";
            break;

            case 3:
                hasil = "Rabu";
                break;

                case 4:
                    hasil = "Kamis";
                    break;

                    case 5:
                        hasil = "Jum'at";
                        break;

                        case 6:
                            hasil = "Sabtu";
                            break;

                            case 7:
                                hasil = "Minggu";
                                break;

    default:
        hasil = "Hari tidak ada";
        break;
}

console.log(hasil);

const bln = "april";
let bulan;

switch (bln) {
    case "januari":
    bulan = 1;
    break;

    case "februari":
    bulan = 2;
     break;

     case "maret":
    bulan = 3;
     break;   
                
        case "april":
        bulan = 4;
        break;

    default:
        bulan = "belum terdaftar";
        break;
}

console.log(bulan);