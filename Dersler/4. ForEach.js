let ogrencilerim= ["Mert","Hakan","Erol","Kaan"];

ogrencilerim.forEach((a,index) => {
console.log(a,index)
    
});


const ogrenci =(isim,index) => {

console.log(`${index}`,`${isim}`);

    
}

ogrencilerim.forEach(ogrenci);