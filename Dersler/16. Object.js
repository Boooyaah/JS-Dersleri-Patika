// ! obje tanımlama

let ogrenci={
    ad:"Mert",
    soyad:"Kırkar",
    yas:"29",
    email:"mertkirkar@gmail.com",
    sinif:"12",
    dersler:["Mat","Kimya","Biyoloji","Fen"]
}




// * Objeye Method ekleme

let ogrenci2={
    ad:"Mert",
    soyad:"Kırkar",
    yas:"29",
    email:"mertkirkar@gmail.com",
    sinif:"12",
    dersler:["Mat","Kimya","Biyoloji","Fen"],
    login()
    {
        console.log("öğrenci giriş yaptı...");
    },
    logout()
    {
        console.log("öğrenci çıkış yaptı.");
    },

    printLessons()
    {
        console.log(this.dersler)
        this.dersler.forEach(ders=>{
            console.log(ders)
        })
    }

}



// console.log(this)
ogrenci2.printLessons();
// ogrenci2.login();
// ogrenci2.logout();

 