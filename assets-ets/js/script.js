/*!
 * Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.getElementById("memberForm").addEventListener("submit", function (e) {
  e.preventDefault(); // mencegah submit default
  const form = e.target;

  // Validasi manual gender (karena radio button butuh perlakuan khusus)
  const genderChecked = document.querySelector('input[name="gender"]:checked');
  const genderError = document.getElementById("genderError");

  if (!genderChecked) {
    genderError.style.display = "block";
  } else {
    genderError.style.display = "none";
  }

  // Validasi form
  if (form.checkValidity() && genderChecked) {
    swal(`Pendaftaran berhasil! Selamat menjadi member Pakuwon Mall.`);
    form.reset();
    form.classList.remove("was-validated");
  } else {
    form.classList.add("was-validated");
  }
});
