// Mendapatkan elemen tombol untuk mengubah tema
const themeButton = document.getElementById("themeChangeBtn");
// Mendapatkan elemen container body
const bodyContainer = document.getElementsByTagName("body")[0];

// Fungsi untuk mengganti tema
function changeTheme() {
    // Cek jika tema saat ini adalah light, ubah ke dark
    if(bodyContainer.classList.contains("light")){
        toDark();
    } else{
        // Jika bukan light, ubah ke light
        toLight();
    }
}

// Fungsi untuk mengubah theme berdasarkan waktunya
function checkTheme(){
    // Mendapatkan string waktu lokal dan mengambil bagian waktu saja
    var waktu = new Date().toLocaleString().split(", ")[1];
    // Mengambil jam dari string waktu
    var jam = waktu.split(":")[0];
    // Mengambil setting AM atau PM dari string waktu
    var timeSetting = waktu.split(" ")[1];
    // Jika waktu menunjukkan PM, konversi jam ke format 24 jam
    if(timeSetting == "PM") jam = parseInt(jam) + 12;
    // Jika jam menunjukkan 24, ubah menjadi 0 untuk representasi tengah malam
    if(jam == 24) jam = 0;
    // Jika jam antara 6 pagi dan 18 sore, atur tema ke light
    if(jam >= 6 && jam < 18){
        toLight()
    } else{
        // Jika tidak, atur tema ke dark
        toDark()
    }
}

// Fungsi untuk mengubah tema ke dark
function toDark(){
    // Menghapus kelas light dari body
    bodyContainer.classList.remove("light");
    // Menambahkan kelas dark ke body
    bodyContainer.classList.add("dark");
    // Menghapus kelas btn-light dari tombol
    themeButton.classList.remove("btn-light");
    // Menambahkan kelas btn-dark ke tombol
    themeButton.classList.add("btn-dark");
    // Mengubah teks tombol menjadi "Dark Mode"
    themeButton.innerHTML = "Dark Mode";
}

// Fungsi untuk mengubah tema ke light
function toLight(){
    // Menghapus kelas dark dari body
    bodyContainer.classList.remove("dark");
    // Menambahkan kelas light ke body
    bodyContainer.classList.add("light");
    // Menghapus kelas btn-dark dari tombol
    themeButton.classList.remove("btn-dark");
    // Menambahkan kelas btn-light ke tombol
    themeButton.classList.add("btn-light");
    // Mengubah teks tombol menjadi "Light Mode"
    themeButton.innerHTML = "Light Mode";
}

checkTheme()