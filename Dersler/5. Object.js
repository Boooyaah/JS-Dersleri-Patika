let Mert = {
    yas:31,
    boy:195,
    kilo:115,
    mail:"mertkirkar@gmail.com",
    dersler:["Mat","Trk","Edebiyar","",""],
    login:function() {
        console.log("Öğrenci Giriş Yaptı.")
    },
    logout:function() {

        console.log("Öğrenci Çıkış Yaptı..")


    },
    printLessons ( ) {
        console.log(dersler)
        console.log(this)

    }

};

console.log(this    )
Mert.printLessons();
// Mert.login();
// Mert.logout();


// let Ahmet = {
//     yas:123,
//     boy:1941235,
//     kilo:112312415,
//     mail:"mertkirk123213ar@gmail.com"
// }
// let Ayşe = {
//     yas:341231,
//     boy:1941232135,
//     kilo:112312415,
//     mail:"mer124123tkirkar@gmail.com"
// }
// let Rabia = {
//     yas:34123211,
//     boy:1914231235,
//     kilo:11412315,
//     mail:"mertki12323rkar@gmail.com"
// }
// let Fatma = {
//     yas:31123123,
//     boy:11421395,
//     kilo:112312415,
//     mail:"mertk12321irkar@gmail.com"
// }

// let isimler= [Mert,Ahmet,Ayşe,Rabia,Fatma];


// const getFunction=function () {

//     isimler.forEach(value => {
//         console.log(value)
        
//     });



// }

// getFunction()
