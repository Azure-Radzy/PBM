

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
