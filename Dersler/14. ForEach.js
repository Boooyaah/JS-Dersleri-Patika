// const a=(callbacka) => {
//     let yas=40;
//     callbacka(yas);
// };
// a(function(value){
//     console.log(value);
// })


let ogrencilerim = ["a","b","c","d","e","f","g","h"]
let salonUyeleri=["Mert","Hakan","Kaan","Erol"]


ogrencilerim.forEach(function(kisi,index){
    console.log(kisi,index+1)
})


const uye = (kisi,index)=>
{
    console.log(`${index+1} - ${kisi}`)
}


ogrencilerim.forEach(uye)