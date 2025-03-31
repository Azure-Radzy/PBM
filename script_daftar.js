// Menangani perubahan pada pilihan "Tinggal Bersama"
document.getElementById('tinggal_bersama').addEventListener('change', function() {
    var tinggalBersama = document.getElementById('tinggal_bersama').value;
  
    if (tinggalBersama === "orang_tua") {
      document.getElementById('data-ayah').style.display = 'block';
      document.getElementById('data-ibu').style.display = 'block';
      document.getElementById('data-wali').style.display = 'none';
    } else if (tinggalBersama === "wali") {
      document.getElementById('data-ayah').style.display = 'none';
      document.getElementById('data-ibu').style.display = 'none';
      document.getElementById('data-wali').style.display = 'block';
    }
  });
  
  // Pindah ke langkah selanjutnya setelah mengisi Data Orang Tua / Wali
  document.getElementById('next-1').addEventListener('click', function() {
    document.getElementById('step-1').style.display = 'none';
    document.getElementById('step-2').style.display = 'block';
  });
  
  // Pindah ke langkah selanjutnya untuk Data Diri
  document.getElementById('next-2').addEventListener('click', function() {
    document.getElementById('step-2').style.display = 'none';
    document.getElementById('step-3').style.display = 'block';
  });
  
  // Pindah ke langkah selanjutnya untuk Seputar STKIP
  document.getElementById('next-3').addEventListener('click', function() {
    document.getElementById('step-3').style.display = 'none';
    document.getElementById('step-4').style.display = 'block';
  });
  document.addEventListener('DOMContentLoaded', function () {
    const profile = document.getElementById('profile');
    const toggleProfileBtn = document.getElementById('toggleProfileBtn');
    const toggleProfileBtn2 = document.getElementById('toggleProfileBtn2');

    // Tampilkan tombol toggle jika profil tersembunyi
    toggleProfileBtn.style.display = 'none';  // Awalnya tombol tidak terlihat
    if (profile.classList.contains('hidden')) {
        toggleProfileBtn.style.display = 'block'; // Tampilkan tombol jika profil tersembunyi
    }

    // Klik tombol untuk menampilkan/menyembunyikan profil
    toggleProfileBtn.addEventListener('click', function () {
        profile.classList.remove('hidden');
        toggleProfileBtn.style.display = 'none'; // Sembunyikan tombol setelah profil muncul
    });

    toggleProfileBtn2.addEventListener('click', function () {
        profile.classList.add('hidden');
        toggleProfileBtn.style.display = 'block'; // Tampilkan tombol saat profil disembunyikan
    });
});
document.getElementById('toggleProfileBtn').addEventListener('click', function() {
    const profile = document.getElementById('profile');
    if (profile.style.display === 'none') {
      profile.style.display = 'block';
    } else {
      profile.style.display = 'none';
    }
  });

  // Fungsi untuk menutup profil
  document.getElementById('toggleProfileBtn2').addEventListener('click', function() {
    const profile = document.getElementById('profile');
    profile.style.display = 'none';
  });