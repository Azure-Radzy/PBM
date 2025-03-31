// Menangani perubahan pada pilihan "Tinggal Bersama"
document.getElementById('tinggal_bersama').addEventListener('change', function() {
  var tinggalBersama = document.getElementById('tinggal_bersama').value;

  // Menampilkan dan menyembunyikan form sesuai dengan pilihan
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

// Fungsi untuk menampilkan langkah berikutnya
function showStep(stepNumber) {
// Sembunyikan semua langkah
document.querySelectorAll('div[id^="step-"]').forEach(stepDiv => {
  stepDiv.style.display = 'none';
});

// Tampilkan langkah yang sesuai
document.getElementById(`step-${stepNumber}`).style.display = 'block';

// Update URL dengan format yang diinginkan
const romanNumerals = ['I', 'II', 'III', 'IV'];  // Array untuk nomor Romawi
const stepRoman = romanNumerals[stepNumber - 1];  // Ambil nomor Romawi sesuai step
const newUrl = `https://azure-radzy.github.io/PBM/daftar-mahasiswa.html/${stepRoman}`;
history.pushState(null, '', newUrl); // Mengubah URL di browser
}

// Cek URL saat halaman pertama kali dimuat dan tampilkan langkah yang sesuai
window.onload = function() {
const path = window.location.pathname;
const romanNumerals = ['I', 'II', 'III', 'IV'];

// Mencocokkan URL dengan nomor Romawi dan menampilkan langkah yang sesuai
romanNumerals.forEach((roman, index) => {
  if (path.includes(roman)) {
    showStep(index + 1);
  }
});
};

// Event listener untuk tombol Next (step 1, 2, 3)
document.getElementById('next-1').addEventListener('click', function() {
showStep(2); // Berpindah ke langkah 2
});

document.getElementById('next-2').addEventListener('click', function() {
showStep(3); // Berpindah ke langkah 3
});

document.getElementById('next-3').addEventListener('click', function() {
showStep(4); // Berpindah ke langkah 4
});

// Fungsi untuk toggle profil
document.getElementById('toggleProfileBtn').addEventListener('click', function() {
  const profile = document.getElementById('profile');
  profile.style.display = (profile.style.display === 'none') ? 'block' : 'none';
  this.style.display = 'none'; // Menyembunyikan tombol toggle setelah profil tampil
});

// Fungsi untuk menutup profil
document.getElementById('toggleProfileBtn2').addEventListener('click', function() {
  const profile = document.getElementById('profile');
  profile.style.display = 'none';
  document.getElementById('toggleProfileBtn').style.display = 'block'; // Tampilkan tombol toggle saat profil disembunyikan
});
