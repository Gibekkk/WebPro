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

// Fungsi untuk memeriksa tema saat ini dan mengatur ulang sesuai dengan tema tersebut
function checkTheme(){
    
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


