// let ogrencilerim = ["a","b","c","d","e","f","g","h","ı","i","j","k","l","m","n"]
// let salonUyeleri=["Mert","Hakan","Kaan","Erol"]

// const ol=document.querySelector(".main");
// let html= ``;

// ogrencilerim.forEach(function(ogrenci){
//     html += `<li> ${ogrenci} </li>`

// })
// ol.innerHTML=html;

// const ul=document.querySelector(".main2");
// let html2=``;

// salonUyeleri.forEach(function(kisi){
//     html2 +=`<li>${kisi} </li>`
// })

// ul.innerHTML=html2;



let sube =["Mert Kırkar","Mahir Çay","Batuhan Çoban"]
sube.push("Ersin")


const ul = document.querySelector(".sube");
let html=``;

sube.forEach(function(calisan){
    html+=`<li> ${calisan} </li>`
})

ul.innerHTML=html;
