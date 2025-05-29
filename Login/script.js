const form = document.getElementById('login-form');
const errorMsg = document.getElementById('error-msg');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = form.username.value.trim();
  const password = form.password.value.trim();

  if (!username || !password) {
    errorMsg.textContent = 'Username dan password wajib diisi.';
    errorMsg.style.display = 'block';
    return;
  }

  // Tidak dicek kecocokan username/password, langsung login berhasil
  errorMsg.style.display = 'none';
  alert('Login berhasil!');
  // Redirect ke landing page, ganti path sesuai lokasi landing page
  window.location.href = '../index.html';  
});
