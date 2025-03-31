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

// Fungsi untuk mendapatkan nilai parameter dari URL
function getQueryParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Fungsi untuk menampilkan langkah berdasarkan nomor langkah
function showStep(stepNumber) {
  // Sembunyikan semua langkah
  document.querySelectorAll('div[id^="step-"]').forEach(stepDiv => {
    stepDiv.style.display = 'none';
  });

  // Tampilkan langkah yang sesuai
  const stepElement = document.getElementById(`step-${stepNumber}`);
  if (stepElement) {
    stepElement.style.display = 'block';
  }
}

// Cek apakah ada parameter "step" dalam URL
const step = getQueryParameter('step');
if (step) {
  showStep(parseInt(step)); // Menampilkan langkah berdasarkan parameter step
} else {
  showStep(1); // Jika tidak ada, tampilkan langkah pertama
}

// Event listener untuk tombol Next (step 1, 2, 3)
document.getElementById('next-1').addEventListener('click', function() {
  showStep(2); // Berpindah ke langkah 2
  history.pushState(null, '', '?step=2'); // Update URL
});

document.getElementById('next-2').addEventListener('click', function() {
  showStep(3); // Berpindah ke langkah 3
  history.pushState(null, '', '?step=3'); // Update URL
});

document.getElementById('next-3').addEventListener('click', function() {
  showStep(4); // Berpindah ke langkah 4
  history.pushState(null, '', '?step=4'); // Update URL
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
