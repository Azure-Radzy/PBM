document.getElementById('jenis_pendaftaran').addEventListener('change', function() {
    const pindahanForm = document.getElementById('form-pindahan');
    if (this.value === 'pindahan') {
      pindahanForm.style.display = 'block';
    } else {
      pindahanForm.style.display = 'none';
    }
  });
  