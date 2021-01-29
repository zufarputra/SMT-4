$(document).ready(function () {
let id = "";
let pelanggan = "";
let alamat = "";
let telp = "";

$("#submit").click(function (e) { 
    e.preventDefault();
    id= $("#id").val();
    pelanggan = $("#pelanggan").val();
    alamat = $("#alamat").val();
    telp = $("#telp").val();

    if (id == "") {
        insertData();
    } else {
        updateData();
    }

    $("#id").val("");
    $("#pelanggan").val("");
    $("#alamat").val("");
    $("#telp").val("");



    $("#btn-tambah").click(function (e) { 
        e.preventDefault(e);
    
        $("#titel").html("<p>Tambah Data</p>");

        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");
    });

$("tbody").on("click",".btn-del", function () {
   let id = $(this).attr("data-id");
   if (confirm("Yakin akan Menghapus?")) {
    deleteData(id);
   }
    
});

$("tbody").on("click",".btn-ubah", function () {
    let id = $(this).attr("data-id");
    $("#titel").html("<p>Ubah Data</p>");
     selectUpdate(id);
 });

 function selectUpdate(id){
    let idpelangan = {
        idpelanggan : id
    }

    $.ajax({
        type: "pos",
        url: "php/selectupdate.php",
        cache:false,
        data: JSON.stringify(idpelangan),
     //    dataType: "dataType",
        success: function (response) {
            let data = JSON.parse(response);

            $("#id").val(data.idpelanggan);
            $("#pelanggan").val(data.pelanggan);
            $("#alamat").val(data.alamat);
            $("#telp").val(data.telp);
        }
    });
 }
    
});

    function selectData(){
        $.ajax({
            type: "get",
            url: "php/select.php",
            cache:false,
            dataType: "json",
            success: function (response) {
                let out = "";
                let No = 1;
                $.each(response, function (key, val) { 
                     out += `<tr>
                     <td>${No++}</td>
                     <td>${val.pelanggan}</td>
                     <td>${val.alamat}</td>
                     <td>${val.telp}</td>
                     <td><button type="button" class="btn btn-danger btn-del" data-id=${val.idpelanggan} >DEL</button></td>
                     <td><button type="button" class="btn btn-warning btn-ubah" data-id=${val.idpelanggan} >Ubah</button></td>
                     </tr>`;
                });

                $("#isidata").html(out);
            }
        });
    }
    function insertData(){
       let dataPelangan = {
           pelanggan : pelanggan,
           alamat : alamat,
           telp : telp
       }

       $.ajax({
           type: "pos",
           url: "php/insert.php",
           cache:false,
           data: JSON.stringify(dataPelangan),
        //    dataType: "dataType",
           success: function (response) {
               let out = `<p>${response}</p>`
               $("#msg").html(out);
           }
       });

       selectData();
    }
    function deleteData(id){
            let idpelangan = {
                idpelanggan : id
            }
     
            $.ajax({
                type: "pos",
                url: "php/delete.php",
                cache:false,
                data: JSON.stringify(idpelangan),
             //    dataType: "dataType",
                success: function (response) {
                    let out = `<p>${response}</p>`
                    $("#msg").html(out);
                }
            });
     
            selectData();
         
    }
    function updateData(){
        let dataPelangan = {
            idpelanggan : id,
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        }
 
        $.ajax({
            type: "pos",
            url: "php/update.php",
            cache:false,
            data: JSON.stringify(dataPelangan),
         //    dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(out);
            }
        });
 
        selectData();
    }

    selectData();
});