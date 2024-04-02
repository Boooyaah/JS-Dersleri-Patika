const seferihisarGroup=document.querySelector("#Seferihisar")
const güzelbahçe=document.querySelector(".courierOrder")
const seferihisar=document.querySelector(".courierOrder2")
const degistirButton=document.querySelector(".degistir")
const degistirButton2=document.querySelector(".degistir2")
let index=0;
let index2=0;

let courierSeferihisar= [
    "Ersen Narinç",
    "Polat Yılmaz",
    "Berkcan Ceylan",
    "Erdoğan Ekim",
    "Ersin Yeşilyurt",
    "İsmet Öztürk",
    "Metin Kuş",
    "Tuna Kurşun",

]   
let courierGuzelbahce=[
    "Bülent Murat Ön",
    "Çetin Sarğın",
    "Ece Canerler",
    "Engin Kalender",
    "Farah Tuğcu",
    "Güler Dolu",
    "Hüseyin Kılıçarslan",
    "Musa Serhat Fazla",
    "Mustafa Özer"
]

güzelbahçe.innerHTML=(` Başlatmak için değiştir tuşuna bas `)
seferihisar.innerHTML=(` Başlatmak için değiştir tuşuna bas `)

degistirButton.addEventListener("click",e=>{
    if(index>=0 && index<=courierGuzelbahce.length-1){
        güzelbahçe.innerHTML=(` ${courierGuzelbahce[index]} `)
        index++;
       
    }else if(index=courierGuzelbahce.length-1){
        index=0;
    }
   
})

degistirButton2.addEventListener("click",e=>{
    if(index2>=0 && index2<=courierSeferihisar.length-1){
        seferihisar.innerHTML=(` ${courierSeferihisar[index2]} `)
        degistirButton2.innerHTML=` Seferihisar'ı Değiştir `
    }else if(index2=courierSeferihisar.length-1){
        index2=0;
    }
    index2++;
})











