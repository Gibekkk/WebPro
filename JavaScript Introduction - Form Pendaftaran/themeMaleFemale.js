let body = document.getElementsByTagName("body")[0]; // Mendapatkan elemen body dari dokumen
let html = document.getElementsByTagName("html")[0]; // Mendapatkan elemen html dari dokumen
let submitButton = document.getElementById("button"); // Mendapatkan elemen button dengan id "button"
let buttonMale = document.getElementById("maleButton"); // Mendapatkan elemen button dengan id "maleButton"
let buttonFemale = document.getElementById("femaleButton"); // Mendapatkan elemen button dengan id "femaleButton"
let buttonOther = document.getElementById("otherButton"); // Mendapatkan elemen button dengan id "otherButton"
let formGender = document.getElementById("genderInput"); // Mendapatkan elemen input dengan id "genderInput"

function toMale(){
    if(body.id == "male"){ // Jika body sudah memiliki id "male"
        turnDefault(); // Kembalikan ke tampilan default
    } else{
        turnMale(); // Ubah tampilan ke tema male
    }
}

function toFemale(){
    if(body.id == "female"){ // Jika body sudah memiliki id "female"
        turnDefault(); // Kembalikan ke tampilan default
    } else{
        turnFemale(); // Ubah tampilan ke tema female
    }
}

function toOther(){
    if(body.id == "other"){ // Jika body sudah memiliki id "other"
        turnDefault(); // Kembalikan ke tampilan default
    } else{
        turnOther(); // Ubah tampilan ke tema other
    }
}

function turnMale(){
    body.setAttribute("id", "male"); // Set id body menjadi "male"
    submitButton.classList.remove('btn-dark'); // Hapus kelas 'btn-dark' dari submitButton
    submitButton.classList.add('btn-light'); // Tambahkan kelas 'btn-light' ke submitButton
    buttonMale.classList.remove('btn-outline-primary'); // Hapus kelas 'btn-outline-primary' dari buttonMale
    buttonMale.classList.add('btn-primary'); // Tambahkan kelas 'btn-primary' ke buttonMale
    buttonFemale.classList.remove('btn-danger'); // Hapus kelas 'btn-danger' dari buttonFemale
    buttonFemale.classList.add('btn-outline-danger'); // Tambahkan kelas 'btn-outline-danger' ke buttonFemale
    buttonOther.classList.remove('btn-other'); // Hapus kelas 'btn-other' dari buttonOther
    buttonOther.classList.add('btn-outline-other'); // Tambahkan kelas 'btn-outline-other' ke buttonOther
    formGender.value = "Male"; // Set nilai formGender menjadi "Male"

    document.getElementById("genderForm").style.display = "none"; // Sembunyikan form gender
}

function turnFemale(){
    body.setAttribute("id", "female"); // Set id body menjadi "female"
    submitButton.classList.remove('btn-dark'); // Hapus kelas 'btn-dark' dari submitButton
    submitButton.classList.add('btn-light'); // Tambahkan kelas 'btn-light' ke submitButton
    buttonFemale.classList.remove('btn-outline-danger'); // Hapus kelas 'btn-outline-danger' dari buttonFemale
    buttonFemale.classList.add('btn-danger'); // Tambahkan kelas 'btn-danger' ke buttonFemale
    buttonMale.classList.remove('btn-primary'); // Hapus kelas 'btn-primary' dari buttonMale
    buttonMale.classList.add('btn-outline-primary'); // Tambahkan kelas 'btn-outline-primary' ke buttonMale
    buttonOther.classList.remove('btn-other'); // Hapus kelas 'btn-other' dari buttonOther
    buttonOther.classList.add('btn-outline-other'); // Tambahkan kelas 'btn-outline-other' ke buttonOther
    formGender.value = "Female"; // Set nilai formGender menjadi "Female"

    document.getElementById("genderForm").style.display = "none"; // Sembunyikan form gender
}

function turnOther(){
    body.setAttribute("id", "other"); // Set id body menjadi "other"
    submitButton.classList.remove('btn-dark'); // Hapus kelas 'btn-dark' dari submitButton
    submitButton.classList.add('btn-light'); // Tambahkan kelas 'btn-light' ke submitButton
    buttonFemale.classList.remove('btn-danger'); // Hapus kelas 'btn-danger' dari buttonFemale
    buttonFemale.classList.add('btn-outline-danger'); // Tambahkan kelas 'btn-outline-danger' ke buttonFemale
    buttonMale.classList.remove('btn-primary'); // Hapus kelas 'btn-primary' dari buttonMale
    buttonMale.classList.add('btn-outline-primary'); // Tambahkan kelas 'btn-outline-primary' ke buttonMale
    buttonOther.classList.remove('btn-outline-other'); // Hapus kelas 'btn-outline-other' dari buttonOther
    buttonOther.classList.add('btn-other'); // Tambahkan kelas 'btn-other' ke buttonOther
    formGender.value = "Other"; // Set nilai formGender menjadi "Other"

    document.getElementById("genderForm").style.display = "block"; // Tampilkan form gender
}

function turnDefault(){
    body.setAttribute("id", "default"); // Set id body menjadi "default"
    submitButton.classList.remove('btn-light'); // Hapus kelas 'btn-light' dari submitButton
    submitButton.classList.add('btn-dark'); // Tambahkan kelas 'btn-dark' ke submitButton
    buttonMale.classList.remove('btn-primary'); // Hapus kelas 'btn-primary' dari buttonMale
    buttonMale.classList.add('btn-outline-primary'); // Tambahkan kelas 'btn-outline-primary' ke buttonMale
    buttonFemale.classList.remove('btn-danger'); // Hapus kelas 'btn-danger' dari buttonFemale
    buttonFemale.classList.add('btn-outline-danger'); // Tambahkan kelas 'btn-outline-danger' ke buttonFemale
    buttonOther.classList.remove('btn-other'); // Hapus kelas 'btn-other' dari buttonOther
    buttonOther.classList.add('btn-outline-other'); // Tambahkan kelas 'btn-outline-other' ke buttonOther
    formGender.value = "none"; // Set nilai formGender menjadi "none"

    document.getElementById("genderForm").style.display = "none"; // Sembunyikan form gender
}
