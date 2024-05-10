var inputs = document.getElementsByTagName('input'); // Mengambil semua elemen input
var selects = document.getElementsByTagName('select'); // Mengambil semua elemen select
for(var i = 0; i < inputs.length; i++) { // Looping melalui semua elemen input
    inputs[i].classList.add("focus-ring"); // Menambahkan class "focus-ring" ke setiap elemen input
}
        
const imgForm = document.querySelector('input[type="file"]'); // Mengambil elemen input untuk file
const dateForm = document.querySelector('input[type="date"]'); // Mengambil elemen input untuk tanggal
const phoneForm = document.querySelector('input[name="phone number"]'); // Mengambil elemen input untuk nomor telepon
const emailForm = document.querySelector('input[name="email"]'); // Mengambil elemen input untuk email
const genderForm = document.getElementById("genderInput"); // Mengambil elemen input untuk gender
const form = document.getElementById("myForm"); // Mengambil elemen form
let pagehr = document.createElement("hr"); // Membuat elemen <hr>
let displayDiv = document.getElementById("displayDiv"); // Mengambil elemen div untuk menampilkan data
let outputDiv = document.getElementById("outputDiv"); // Mengambil elemen div untuk output
const currentDate = new Date(); // Mendapatkan tanggal dan waktu saat ini
const phoneFormat = /^(\+)(62)([0-9]{10,13})$/; // Regex untuk validasi format nomor telepon Indonesia
const emailFormat = /^([a-zA-Z0-9]{1,})([\.]{0,1})([a-zA-Z0-9]{1,})([\@]{1})([a-z]{1,})([\.]{1}[a-z]{1,}){1,}$/; // Regex untuk validasi format email
dateForm.setAttribute("max", currentDate.toISOString().split("T")[0]); // Mengatur atribut maksimum pada input tanggal

form.addEventListener("submit", function(event){ // Menambahkan event listener untuk submit form
    event.preventDefault() // Mencegah perilaku default dari submit form
    displayDiv.innerHTML = ""; // Mengosongkan isi dari div display
    while(document.getElementsByClassName("alert-text").length > 0){
        document.getElementsByClassName("alert-text")[0].remove();
    }
    var emailCheck = emailFormat.test(emailForm.value); // Mengecek apakah format email valid
    var phoneCheck = phoneFormat.test(phoneForm.value); // Mengecek apakah format nomor telepon valid
    var check = true; // Variabel kontrol untuk pengecekan
    if(check){ // Jika pengecekan diaktifkan
        if(genderForm.value == "none"){ // Jika gender tidak dipilih
            document.getElementById("genderContainer").after(Object.assign(document.createElement("p"), {className: 'alert-text', textContent: "*Please Select A Gender!"})); // Menampilkan pesan error untuk memilih gender
        }
        for(var i = 0; i < selects.length; i++) { // Looping melalui semua elemen select
            if(selects[i].value == "none"){ // Jika select tidak dipilih
                selects[i].after(Object.assign(document.createElement("p"), {className: 'alert-text', textContent: "*Please Insert " + toTitleCase(selects[i].name) + "!"})); // Menampilkan pesan error bila belum diisi
                }
        } 
        for(var i = 0; i < inputs.length; i++){ // Looping melalui semua elemen input
            if(!inputs[i] || inputs[i].value == ""){ // Jika input kosong
                inputs[i].after(Object.assign(document.createElement("p"), {className: 'alert-text', textContent: "*Please Insert " + toTitleCase(inputs[i].name) + "!"})); // Menampilkan pesan error bila belum diisi
            }
        }
        if(document.getElementsByClassName("alert-text").length > 0){
            if(emailCheck && phoneCheck)return;
        }
        if(!emailCheck && emailForm.value != ""){ // Jika format email tidak valid
            emailForm.after(Object.assign(document.createElement("p"), {className: 'alert-text', textContent: "*Email Invalid!"})); // Menampilkan pesan error email invalid
        }
        if(!phoneCheck){ // Jika format nomor telepon tidak valid
            if(phoneForm.value != "+62") phoneForm.after(Object.assign(document.createElement("p"), {className: 'alert-text', textContent: "*Phone Number Invalid!"})); // Menampilkan pesan error nomor telepon invalid
            else phoneForm.after(Object.assign(document.createElement("p"), {className: 'alert-text', textContent: "*Please Fill Phone Number!"})); // Menampilkan pesan error bila nomor telepon belum diisi
        }
        return;
    }
        outputDiv.style.display = "block"; // Menampilkan div output
        displayDiv.appendChild(pagehr); // Menambahkan elemen <hr> ke div display
        const formData = new FormData(form); // Membuat FormData dari form
        var parsedData = {}; // Membuat objek untuk menyimpan data yang diparsing
        for(var [key, value] of formData){ // Looping melalui semua data form
            parsedData[key] = value; // Menyimpan data ke objek parsedData
            switch(typeof value){ // Menentukan tindakan berdasarkan tipe data
                case "string": // Jika tipe data adalah string
                    let para = document.createElement("p"); // Membuat elemen <p>
                    para.textContent = toTitleCase(key) + ": " + value; // Menetapkan teks untuk elemen <p>
                    displayDiv.appendChild(para); // Menambahkan elemen <p> ke div display
                    break;
                case "object": // Jika tipe data adalah objek
                    let prg = document.createElement("p"); // Membuat elemen <p>
                    prg.textContent = toTitleCase(key) + ": "; // Menetapkan teks untuk elemen <p>
                    displayDiv.appendChild(prg); // Menambahkan elemen <p> ke div display
                    if(imgForm.files.length != 0){ // Jika ada file yang diupload
                        let file = imgForm.files[0]; // Mengambil file pertama
                        let image = document.createElement("img"); // Membuat elemen <img>
                        var reader = new FileReader(); // Membuat FileReader
                        reader.readAsDataURL(file); // Membaca data sebagai URL
                        reader.onload = function () { // Ketika file selesai dibaca
                            localStorage.setItem("image", reader.result); // Menyimpan gambar ke localStorage
                            image.setAttribute("src", localStorage.getItem("image")); // Menetapkan sumber gambar
                            image.setAttribute("class", "output-image img-fluid w-50"); // Menetapkan kelas untuk gambar
                        };
                        displayDiv.appendChild(image); // Menambahkan gambar ke div display
                    }
                    break;
            }
        }
        console.log(parsedData); // Menampilkan data yang diparsing ke konsol
        displayDiv.style.display = "block"; // Menampilkan div display
});

function imageInput(){ // Fungsi untuk input gambar
    let file = imgForm.files[0]; // Mengambil file pertama
    const  fileType = file['type']; // Mengambil tipe file
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png']; // Array tipe gambar yang valid
    if (!validImageTypes.includes(fileType)) { // Jika tipe file tidak valid
        imgForm.value = ""; // Mengosongkan input file
        imgForm.after(Object.assign(document.createElement("p"), {className: 'alert-text', textContent: "*Image Invalid!"})); // Menampilkan pesan error bila bukan gambar
    }
}

function checkPhone(){ // Fungsi untuk mengecek nomor telepon
    if(!/^([\+](62))/gm.test(phoneForm.value)){ // Jika format nomor telepon tidak sesuai
        phoneForm.value = "+62";  // Menetapkan nilai default untuk input nomor telepon
    }
}

function toTitleCase(str) { // Fungsi untuk mengubah teks menjadi Title Case
    return str.replace(
        /\w\S*/g,
        function(txt) { // Mengganti setiap kata
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); // Mengubah huruf pertama menjadi kapital dan sisanya menjadi huruf kecil
        }
    );
}