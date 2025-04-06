document.addEventListener("DOMContentLoaded", function () {
    var tinggalBersama = document.getElementById('tinggal_bersama');
    var dataAyah = document.getElementById('data-ayah');
    var dataIbu = document.getElementById('data-ibu');
    var dataWali = document.getElementById('data-wali');
  
    dataAyah.style.display = 'none';
    dataIbu.style.display = 'none';
    dataWali.style.display = 'none';
  
    tinggalBersama.addEventListener('change', function () {
      var value = tinggalBersama.value;
  
      if (value === "orang_tua") {
        dataAyah.style.display = 'block';
        dataIbu.style.display = 'block';
        dataWali.style.display = 'none';
      } else if (value === "wali") {
        dataAyah.style.display = 'none';
        dataIbu.style.display = 'none';
        dataWali.style.display = 'block';
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const jenisPendaftaran = document.getElementById("jenis_pendaftaran");
    const jalurPendaftaran = document.getElementById("jalur_pendaftaran");

    function updateJalurPendaftaran() {
        jalurPendaftaran.innerHTML = ""; 

        if (jenisPendaftaran.value === "undangan") {
            let option = document.createElement("option");
            option.value = "prestasi";
            option.textContent = "Prestasi";
            jalurPendaftaran.appendChild(option);
            jalurPendaftaran.disabled = true;
        } else {
            let jalurOptions = [
                { value: "zonasi", text: "Zonasi" },
                { value: "kurang_mampu", text: "Kurang Mampu" },
                { value: "prestasi", text: "Prestasi" }
            ];

            jalurOptions.forEach(opt => {
                let option = document.createElement("option");
                option.value = opt.value;
                option.textContent = opt.text;
                jalurPendaftaran.appendChild(option);
            });

            jalurPendaftaran.disabled = false;
        }
    }

    jenisPendaftaran.addEventListener("change", updateJalurPendaftaran);
    updateJalurPendaftaran();
});
