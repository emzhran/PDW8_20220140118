// command dibawah berfungsi untuk memunculkan checkbox ktp ketika ktp dicentang
document.getElementById('KTP').addEventListener('change', function() {
    if (this.checked) {
      ktpInputWrapper.style.display = 'block';
      simInputWrapper.style.display = 'none';
    }
});

// command dibawah berfungsi untuk memunculkan checkbox sim ketika sim dicentang
document.getElementById('SIM').addEventListener('change', function() {
    if (this.checked) {
      simInputWrapper.style.display = 'block';
      ktpInputWrapper.style.display = 'none';
  }
});

// command yang berfungsi untuk mengembalikan nilai ketika menekan tombol submit
document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  var nama = document.getElementById('nama').value;
  var email = document.getElementById('email').value;
  var identitasType = document.querySelector('input[name="identitastype"]:checked').value;
  var identitasNumber = "";
  
  if (identitasType === "KTP") {
      identitasNumber = document.getElementById('ktpInput').value;
  } else if (identitasType === "SIM") {
      identitasNumber = document.getElementById('simInput').value;
  }
  
  var ticketType = document.querySelector('input[name="ticketType"]:checked').value;

  alert('Terima kasih! Tiket Anda berhasil dipesan.\nNama : ' + nama + '\nJenis Identitas : ' + identitasType + '\nNomor Identitas : ' + identitasNumber + '\nJenis Tiket : ' + ticketType + '\nUntuk melakukan pembayaran, silahkan Periksa Email anda : ' + email);
});
