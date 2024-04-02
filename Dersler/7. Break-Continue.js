const notlar=[12,15,100,29,90,76,74,38]
let i=0;

for (i;i<notlar.length;i++){
    

    if(notlar[i] === 15){
       
        continue;
    }
    console.log(notlar[i])

    if(notlar[i] === 100){
        console.log("Bravo En Yüksek Notu Sen Aldın")
       break;
    }
}