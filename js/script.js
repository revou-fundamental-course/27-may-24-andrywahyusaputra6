// Ini File Script Javascript

// Greeting User
function replaceName() {
  let name = prompt("Siapakah nama anda?", "");
  document.getElementById("name").innerHTML = name;
}

replaceName();

// Slide Show
var slideIndex = 1;
showSlide(slideIndex);

function nextslide(n) {
  showSlide((slideIndex += n));
}
function showSlide(n) {
  var i;
  var sliders = document.getElementsByClassName("imgslide");

  if (n > sliders.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = sliders.length;
  }

  for (i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }

  sliders[slideIndex - 1].style.display = "block";
}

// Form
document
  .getElementById("formulir")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    //membuat tanggal sekarang
    const now = new Date();
    const dateTimeString = now.toLocaleString();

    // Ambil nilai dari formulir

    const nama = document.getElementById("nama").value;
    const tglLahir = document.getElementById("tgl_lahir").value;
    const jenisKelamin = document.querySelector(
      'input[name="jenis_kelamin"]:checked'
    ).value;
    const pesan = document.getElementById("pesan").value;

    // Buat teks hasil inputan
    const resultText = `Date/time: ${dateTimeString}\n \nNama: ${nama}\nTanggal Lahir: ${tglLahir}\nJenis Kelamin: ${jenisKelamin}\nPesan:\n${pesan}`;

    // Tampilkan hasil inputan di text area
    document.getElementById("result").value = resultText;

    // Tampilkan pesan alert
    alert("Pesan telah tersubmit");
    document.getElementById("nama").value = "";
    document.getElementById("tgl_lahir").value = "";
    document.getElementById("pesan").value = "";
  });
